import { Link } from "react-router-dom";
import { socialMediaLinks, navLinksData } from "../../constants/navLinksData";
import { LinksProps } from "../../types/types";

const Footer = () => {
	const footerHeadings = ["Explore", "Social Media"];
	return (
		<div
			className="relative h-[300px]"
			style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
		>
			<div className="fixed bottom-0 h-[300px] w-full">
				<div className="bg-[#4E4E5A] py-8 px-12 h-full w-full flex flex-col justify-between">
					<div className="flex shrink-0 gap-20">
						{[navLinksData, socialMediaLinks].map((data, index) => (
							<Links data={data} heading={footerHeadings[index]} key={index} />
						))}
					</div>
					<div className="flex justify-between items-end text-white">
						<p>©copyright</p>
					</div>
				</div>
			</div>
		</div>
	);
};

function Links({ data, heading }: LinksProps) {
	return (
		<div className="flex flex-col gap-2 text-[#c9fd74]">
			<h3 className="mb-2 uppercase text-white">{heading}</h3>
			<ul>
				{data.map(({ urlPath, name }) => (
					<li key={name} className="mb-2">
						<Link to={urlPath} className="relative group">
							{name}
							<span className="absolute bottom-0 left-0 h-[1px] bg-white w-0 transform transition-all duration-500 ease-in-out group-hover:w-full"></span>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}

export default Footer;
