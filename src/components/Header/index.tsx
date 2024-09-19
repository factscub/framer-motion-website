import { motion } from "framer-motion";
import NormalNavBar from "../NormalNavBar";
import SideMenu from "../SideMenu";
import useHeader from "../../hooks/useHeader";

const Header = () => {
	const { showSideMenu } = useHeader();

	return (
		<header>
			<nav className="fixed top-0 right-0 z-50 py-5 px-5">
				<motion.div
					animate={{ opacity: showSideMenu ? 0 : 1 }}
					transition={{ duration: 0.3 }}
				>
					<NormalNavBar />
				</motion.div>
				<motion.div
					animate={{ opacity: showSideMenu ? 1 : 0 }}
					initial={{ opacity: 0, width: 0 }}
					transition={{ duration: 0.3 }}
				>
					{<SideMenu />}
				</motion.div>
			</nav>
		</header>
	);
};

export default Header;
