import styles from "./index.module.css";
import { motion } from "framer-motion";
import {
	navLinksData,
	socialMediaLinks,
} from "../../../constants/navLinksData";
import { NavLink } from "react-router-dom";
import { perspective, slideIn } from "./variants";

function SideMenuOptions({ toggleMenu }: { toggleMenu(): void }) {
	return (
		<div className="flex flex-col justify-between px-10 py-24 h-full box-border">
			<div className={styles.body + " flex flex-col gap-2"}>
				{navLinksData.map(({ urlPath, name }, i) => {
					return (
						<div key={`b_${i}`} className={styles.linkContainer}>
							<motion.div
								custom={i}
								variants={perspective}
								initial="initial"
								animate="enter"
								exit="exit"
							>
								<NavLink
									to={urlPath}
									onClick={toggleMenu}
									className={({ isActive }) =>
										isActive
											? " text-white rounded-3xl inline-block px-5 py-1 bg-black"
											: "text-black"
									}
								>
									{name}
								</NavLink>
							</motion.div>
						</div>
					);
				})}
			</div>
			<motion.div className="flex flex-wrap">
				{socialMediaLinks.map(({ name, urlPath }, i) => {
					return (
						<motion.a
							className="w-1/2 mt-2"
							variants={slideIn}
							custom={i}
							initial="initial"
							animate="enter"
							exit="exit"
							key={`f_${i}`}
							href={urlPath}
							whileHover={{ scale: 1.1 }}
						>
							{name}
						</motion.a>
					);
				})}
			</motion.div>
		</div>
	);
}

export default SideMenuOptions;
