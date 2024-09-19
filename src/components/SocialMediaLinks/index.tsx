import {
	FaFacebookF,
	FaLinkedinIn,
	FaInstagram,
	FaTwitter,
} from "react-icons/fa";
import styles from "./index.module.css";
import { ReactNode, useRef, useState } from "react";
import { motion } from "framer-motion";
import { socialMediaLinks } from "../../constants/navLinksData";
import { Link } from "react-router-dom";

const icons = [
	<FaFacebookF />,
	<FaLinkedinIn />,
	<FaInstagram />,
	<FaTwitter />,
];

const linksData = socialMediaLinks.map((linkData, index) => ({
	...linkData,
	icon: icons[index],
}));

const MagneticLink = ({
	children,
	urlPath,
}: {
	children: ReactNode;
	urlPath: string;
}) => {
	const ref = useRef<HTMLDivElement | null>(null);
	const [position, setPosition] = useState({ x: 0, y: 0 });

	const handleMouse = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		if (!ref.current) return;
		const { clientX, clientY } = e;
		const { height, width, left, top } = ref.current.getBoundingClientRect();
		const middleX = clientX - (left + width / 2);
		const middleY = clientY - (top + height / 2);
		setPosition({ x: middleX, y: middleY });
	};

	const reset = () => {
		setPosition({ x: 0, y: 0 });
	};

	const { x, y } = position;
	return (
		<motion.div
			style={{ position: "relative" }}
			ref={ref}
			onMouseMove={handleMouse}
			onMouseLeave={reset}
			animate={{ x, y }}
			transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
		>
			<Link to={urlPath}>{children}</Link>
		</motion.div>
	);
};

const SocialMediaLinks = () => {
	return (
		<section
			className={
				styles.container +
				" bg-black flex items-center justify-center flex-col h-screen gap-12"
			}
		>
			{linksData.map((link) => (
				<MagneticLink key={link.name} urlPath={link.urlPath}>
					{link.icon}
				</MagneticLink>
			))}
		</section>
	);
};
export default SocialMediaLinks;
