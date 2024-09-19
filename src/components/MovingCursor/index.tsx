import { ReactNode, useEffect, useRef } from "react";
import { useState } from "react";
import useMouse from "@react-hook/mouse-position";
import { motion } from "framer-motion";
import { FaPlay, FaPauseCircle } from "react-icons/fa";
import { useVideo } from "../../context/VideoPlayer";

export default function MovingCursor({ children }: { children: ReactNode }) {
	const [cursorVariant, setCursorVariant] = useState("default");

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
		if (!state.mouseEntered) {
			setCursorVariant("default");
		} else {
			setCursorVariant("video");
		}
	}, [state.mouseEntered]);

	return (
		<div ref={ref}>
			<motion.div
				variants={variants}
				className="fixed z-50 flex flex-row content-center justify-center top-0 left-0 pointer-events-none text-white text-center"
				animate={cursorVariant}
				transition={spring}
			>
				{state.mouseEntered && <VideoCursor isPlaying={state.isPlaying} />}
			</motion.div>
			{children}
		</div>
	);
}

const VideoCursor = ({ isPlaying }: { isPlaying: boolean }) => {
	return (
		<div className="text-center">
			<div className="bg-gray-50 p-3 m-2 rounded-md">
				{isPlaying ? <FaPauseCircle /> : <FaPlay />}
			</div>
			<span className="uppercase text-white">
				{isPlaying ? "Pause" : "Play"}
			</span>
		</div>
	);
};
