import { useState, useEffect } from "react";

function useWindowWidth(debounceDelay: number = 300): number {
	const [width, setWidth] = useState<number>(window.innerWidth);

	useEffect(() => {
		let debounceTimer: ReturnType<typeof setTimeout>;

		const handleResize = () => {
			clearTimeout(debounceTimer);
			debounceTimer = setTimeout(() => {
				setWidth(window.innerWidth);
			}, debounceDelay);
		};

		window.addEventListener("resize", handleResize);

		return () => {
			clearTimeout(debounceTimer);
			window.removeEventListener("resize", handleResize);
		};
	}, [debounceDelay]);

	return width;
}

export default useWindowWidth;
