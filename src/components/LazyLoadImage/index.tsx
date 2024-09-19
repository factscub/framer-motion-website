import AnimateComponent from "../AnimateComponent";
import { LazyLoadImage as LazyImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const LazyLoadImage = ({ image }: { image: string }) => {
	return (
		<AnimateComponent>
			<LazyImage
				effect="blur"
				wrapperProps={{
					style: { transitionDelay: "1s" },
				}}
				src={image}
				alt=""
				className="w-full object-contain mt-2"
			/>
		</AnimateComponent>
	);
};

export default LazyLoadImage;
