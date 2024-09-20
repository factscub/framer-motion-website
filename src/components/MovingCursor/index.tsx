import { ReactNode, useEffect, useRef } from "react";
import { useState } from "react";
import useMouse from "@react-hook/mouse-position";
import { motion } from "framer-motion";
import { useVideo } from "../../context/VideoPlayer";
import useWindowWidth from "../../hooks/useWindowWidth";
import VideoCursor from "../VideoCursor";

export default function MovingCursor({ children }: { children: ReactNode }) {
	const [cursorVariant, setCursorVariant] = useState("default");
	const windowWidth = useWindowWidth();

	const ref = useRef(null);
	const mouse = useMouse(ref, {
		enterDelay: 100,
		leaveDelay: 100,
	});

	let mouseXPosition = mouse.clientX ?? 0;
	let mouseYPosition = mouse.clientY ?? 0;

	const variants = {
		default: {
			opacity: 1,
			border: "2px solid gray",
			color: "#000",
			borderRadius: "50%",
			height: 40,
			width: 40,
			x: mouseXPosition - 20,
			y: mouseYPosition - 20,
			transition: {
				type: "spring",
				mass: 0.2,
			},
		},

		video: {
			opacity: 1,
			color: "#000",
			height: 40,
			width: 40,
			x: mouseXPosition - 30,
			y: mouseYPosition - 40,
		},
	};

	const spring = {
		type: "spring",
		stiffness: 500,
		damping: 28,
	};

	const { state } = useVideo();

	useEffect(() => {
		if (!mouse.isOver) {
			setCursorVariant("hidden");
		} else if (!state.mouseEntered) {
			setCursorVariant("default");
		} else {
			setCursorVariant("video");
		}
	}, [mouse.isOver, state.mouseEntered]);

	return (
		<div ref={ref}>
			{windowWidth <= 768 ? (
				children
			) : (
				<>
					<motion.div
						variants={variants}
						className="fixed z-50 flex flex-row content-center justify-center top-0 left-0 pointer-events-none text-white text-center"
						animate={cursorVariant}
						transition={spring}
					>
						{state.mouseEntered && <VideoCursor />}
					</motion.div>
					{children}
				</>
			)}
		</div>
	);
}
