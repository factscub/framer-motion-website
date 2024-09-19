import Lenis from "lenis";
import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
	const scrollRef = useRef<HTMLDivElement | null>(null);
	const location = useLocation();

	useEffect(() => {
		const lenis = new Lenis();

		function raf(time: number) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);

		return () => {
			lenis.destroy();
		};
	}, []);

	useEffect(() => {
		const lenis = new Lenis();
		lenis.scrollTo(0, { immediate: true });

		return () => {
			lenis.destroy();
		};
	}, [location]);

	return <div ref={scrollRef}>{children}</div>;
};

export default SmoothScroll;
