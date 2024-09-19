import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { navLinksData } from "../../constants/navLinksData";
import { CursorProps, IPosition, SingleLinkProps } from "../../types/types";

const NormalNavBar = () => {
	const [position, setPosition] = useState<IPosition>({
		left: 0,
		width: 0,
		opacity: 0,
	});

	return (
		<ul
			onMouseLeave={() => {
				setPosition((prev) => ({
					...prev,
					opacity: 0,
				}));
			}}
			className="relative mx-auto flex w-fit rounded-full border-2 border-black bg-white p-1"
		>
			{navLinksData.map((linkData) => (
				<SingleLink
					key={linkData.urlPath}
					linkData={linkData}
					setPosition={setPosition}
				/>
			))}

			<Cursor position={position} />
		</ul>
	);
};

const SingleLink = ({ linkData, setPosition }: SingleLinkProps) => {
	const ref = useRef<HTMLLIElement | null>(null);

	return (
		<li
			ref={ref}
			onMouseEnter={() => {
				if (!ref.current) return;

				const { width } = ref.current.getBoundingClientRect();

				setPosition({
					left: ref.current.offsetLeft,
					width,
					opacity: 1,
				});
			}}
			className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base"
		>
			<NavLink
				to={linkData.urlPath}
				className={({ isActive }) =>
					isActive ? "text-yellow-500 py-3" : "py-3"
				}
			>
				{linkData.name}
			</NavLink>
		</li>
	);
};

const Cursor = ({ position }: CursorProps) => {
	return (
		<motion.li
			animate={{
				...position,
			}}
			className="absolute z-0 h-7 rounded-full bg-black md:h-12"
		/>
	);
};

export default NormalNavBar;
