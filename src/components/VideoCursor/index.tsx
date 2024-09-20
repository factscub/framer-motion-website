import { FaPlay, FaPauseCircle } from "react-icons/fa";
import { useVideo } from "../../context/VideoPlayer";

const VideoCursor = ({ color = "#fff" }: { color?: string }) => {
	const { state } = useVideo();
	return (
		<div className="text-center inline-flex flex-col justify-center">
			<div className="bg-gray-50 p-3 m-2 rounded-md">
				{state.isPlaying ? <FaPauseCircle /> : <FaPlay />}
			</div>
			<span className="uppercase text-white" style={{ color }}>
				{state.isPlaying ? "Pause" : "Play"}
			</span>
		</div>
	);
};

export default VideoCursor;
