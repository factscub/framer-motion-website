import { useEffect, useState } from "react";

const useHeader = () => {
	const [showSideMenu, setShowSideMenu] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const shouldShowSideMenu =
				window.scrollY > 200 || window.innerWidth <= 768;
			setShowSideMenu(shouldShowSideMenu);
		};

		window.addEventListener("scroll", handleScroll);
		window.addEventListener("resize", handleScroll);

		handleScroll();

		return () => {
			window.removeEventListener("scroll", handleScroll);
			window.removeEventListener("resize", handleScroll);
		};
	}, []);

	return { showSideMenu };
};

export default useHeader;
