import AnimateComponent from "../components/AnimateComponent";
import BubbleText from "../components/BubbleText";
import HorizontalScrollCarousel from "../components/HorizontalScrollCarousel";
import LazyLoadImage from "../components/LazyLoadImage";
import PageTransition from "../components/PageTransition";
import TextOverlayCard from "../components/TextOverlayCard";
import VideoHero from "../components/VideoHero";
import VideoPlayer from "../components/VideoPlayer";
import { cards } from "../constants/cardsData";

const images = [
	"/media/image1.webp",
	"/media/image2.webp",
	"/media/image3.webp",
	"/media/image4.webp",
	"/media/image5.webp",
	"/media/image6.webp",
	"/media/image7.webp",
];

const Home = () => {
	return (
		<PageTransition>
			<AnimateComponent>
				<VideoHero />
				<BubbleText text="Development site For South Korean companies, which is engaged study stem cells and development biotechnology." />
				<div className="px-5 mt-3 xl:px-52">
					<VideoPlayer />
					<div className="md:flex gap-2">
						<LazyLoadImage image={images[0]} />
						<LazyLoadImage image={images[1]} />
					</div>
					<LazyLoadImage image={images[2]} />
					<LazyLoadImage image={images[3]} />

					<AnimateComponent>
						<div className="my-24 ">
							<p className="mb-8 text-base font-bold uppercase">
								Emphasizing innovation
							</p>
							<div className="sm:mx-10 md:mx-56">
								<p className="text-2xl font-bold">
									Dynamic and colorful renders help to attract the user's
									attention to the company's work processes and its scientific
									achievements.
								</p>
							</div>
						</div>
					</AnimateComponent>
					<div className="md:flex gap-2">
						<LazyLoadImage image={images[4]} />
						<LazyLoadImage image={images[5]} />
					</div>
					<LazyLoadImage image={images[6]} />
				</div>
				<HorizontalScrollCarousel>
					{cards.map(({ title, urlPath, id }) => {
						return <TextOverlayCard {...{ title, urlPath }} key={id} />;
					})}
				</HorizontalScrollCarousel>
			</AnimateComponent>
		</PageTransition>
	);
};

export default Home;
