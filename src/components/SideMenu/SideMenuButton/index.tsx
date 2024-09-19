import { motion } from "framer-motion";
import styles from "./index.module.css";
import { SideMenuButtonProps } from "../../../types/types";

function SideMenuButton({ isActive, toggleMenu }: SideMenuButtonProps) {
	return (
		<div className="absolute top-0 right-0 w-[100px] h-10 cursor-pointer rounded-3xl overflow-hidden">
			<motion.div
				className="relative w-full h-full"
				animate={{ top: isActive ? "-100%" : "0%" }}
				transition={{ duration: 0.5, type: "tween", ease: [0.76, 0, 0.24, 1] }}
			>
				<div
					className={styles.el}
					onClick={() => {
						toggleMenu();
					}}
				>
					<PerspectiveText label="Menu" />
				</div>
				<div
					className={styles.el}
					onClick={() => {
						toggleMenu();
					}}
				>
					<PerspectiveText label="Close" />
				</div>
			</motion.div>
		</div>
	);
}

function PerspectiveText({ label }: { label: string }) {
	return (
		<div className={styles.perspectiveText}>
			<p>{label}</p>
			<p>{label}</p>
		</div>
	);
}

export default SideMenuButton;
