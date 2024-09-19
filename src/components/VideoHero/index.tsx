import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

const VideoHero = () => {
	const container = useRef(null);
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["start start", "end start"],
	});
	const y = useTransform(scrollYProgress, [0, 1], ["0vh", "150vh"]);

	return (
		<div className="h-screen overflow-hidden">
			<motion.section className="relative h-screen w-full" style={{ y }}>
				<video
					className=" h-full w-full object-cover"
					autoPlay
					loop
					muted
					playsInline
				>
					<source
						src="/media/Mockup_Designed_cells_motion-opt.mp4"
						type="video/mp4"
					/>
					Your browser does not support the video tag.
				</video>

				<div className="absolute top-0 left-0 h-full w-full flex items-center justify-center bg-black  bg-opacity-50">
					<div className="text-center text-white">
						<h1 className="text-7xl font-extrabold mb-4 uppercase">
							Desinged cells
						</h1>
						<Link
							to={"/"}
							className="relative inline-block text-white group mb-8 uppercase font-extrabold tracking-tighter"
						>
							case on behance
							<span className="absolute bottom-0 left-0 h-[1px] bg-white w-full transform transition-all duration-500 ease-in-out group-hover:w-0"></span>
						</Link>
					</div>
				</div>
			</motion.section>
		</div>
	);
};

export default VideoHero;
