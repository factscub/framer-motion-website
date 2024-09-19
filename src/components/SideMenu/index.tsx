import { useState } from "react";
import { motion } from "framer-motion";
import SideMenuButton from "./SideMenuButton";
import SideMenuOptions from "./SideMenuOptions";
import { menu } from "./variants";

function SideMenu() {
	const [isActive, setIsActive] = useState(false);

	const toggleMenu = () => {
		setIsActive(!isActive);
	};
	return (
		<section className="fixed right-8 top-8">
			<motion.div
				className="overflow-hidden bg-[#c9fd74] rounded-3xl absolute text-right sm:text-left"
				variants={menu}
				animate={isActive ? "open" : "closed"}
				initial="closed"
			>
				<SideMenuOptions toggleMenu={toggleMenu} />
			</motion.div>
			<SideMenuButton isActive={isActive} toggleMenu={toggleMenu} />
		</section>
	);
}

export default SideMenu;
