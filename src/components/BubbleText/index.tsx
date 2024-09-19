import { useRef } from "react";
import styles from "./index.module.css";
import { motion, useInView } from "framer-motion";

const BubbleText = ({ text }: { text: string }) => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<div className="flex justify-center items-center min-h-[60vh] pt-10 pb-10 bg-black px-2">
			<motion.h2
				ref={ref}
				className="text-center text-6xl font-thin text-indigo-300 sm:w-3/4"
				style={{
					transform: isInView ? "none" : "translateX(-100%)",
					opacity: isInView ? 1 : 0,
					transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
				}}
			>
				{text.split("").map((child, idx) => (
					<motion.span key={idx} className={styles.hoverText}>
						{child}
					</motion.span>
				))}
			</motion.h2>
		</div>
	);
};

export default BubbleText;
