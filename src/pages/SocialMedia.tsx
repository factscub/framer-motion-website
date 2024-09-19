import AnimateComponent from "../components/AnimateComponent";
import PageTransition from "../components/PageTransition";
import SocialMediaLinks from "../components/SocialMediaLinks";

const SocialMedia = () => {
	return (
		<PageTransition>
			<AnimateComponent>
				<SocialMediaLinks />
			</AnimateComponent>
		</PageTransition>
	);
};

export default SocialMedia;
