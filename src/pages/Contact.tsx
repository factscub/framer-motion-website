import AnimateComponent from "../components/AnimateComponent";
import PageTransition from "../components/PageTransition";
import PricingCard from "../components/PricingCard";

const Contact = () => {
	return (
		<PageTransition>
			<AnimateComponent>
				<PricingCard />
			</AnimateComponent>
		</PageTransition>
	);
};

export default Contact;
