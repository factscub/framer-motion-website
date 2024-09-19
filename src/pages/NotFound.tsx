import PageTransition from "../components/PageTransition";
import AnimateComponent from "../components/AnimateComponent";
import { Link } from "react-router-dom";

const NotFound = () => {
	return (
		<PageTransition>
			<AnimateComponent>
				<div className="not-found h-screen flex flex-col items-center gap-3 text-3xl justify-center">
					<h1>404</h1>
					<p>Oops! The page you're looking for doesn't exist.</p>
					<Link
						to="/"
						className="mt-5 text-lg rounded-2xl border-2 border-dashed border-black bg-white px-6 py-3 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none"
					>
						Go Home
					</Link>
				</div>
			</AnimateComponent>
		</PageTransition>
	);
};

export default NotFound;
