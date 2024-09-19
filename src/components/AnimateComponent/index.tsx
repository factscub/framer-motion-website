import { useInView } from "framer-motion";
import { ReactNode, useRef } from "react";

const AnimateComponent = ({ children }: { children: ReactNode }) => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<div ref={ref}>
			<div
				style={{
					transform: isInView ? "none" : "translateY(20%)",
					opacity: isInView ? 1 : 0,
					transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
				}}
			>
				{children}
			</div>
		</div>
	);
};

export default AnimateComponent;
