import { useRef } from "react";
import { useVideo } from "../../context/VideoPlayer";
import VideoCursor from "../VideoCursor";
import useWindowWidth from "../../hooks/useWindowWidth";

const VideoPlayer = () => {
	const { state, dispatch } = useVideo();
	const windowWidth = useWindowWidth();
	const videoRef = useRef<HTMLVideoElement | null>(null);

	const handlePlay = () => {
		if (videoRef.current) {
			videoRef.current.play();
			dispatch({ type: "PLAY" });
		}
	};

	const handlePause = () => {
		if (videoRef.current) {
			videoRef.current.pause();
			dispatch({ type: "PAUSE" });
		}
	};

	const togglePlaying = () => {
		if (videoRef.current) {
			state.isPlaying ? handlePause() : handlePlay();
		}
	};

	const mouseEntered = () => {
		if (!state.mouseEntered) {
			dispatch({ type: "MOUSE_ENTERED" });
		}
	};

	const mouseLeft = () => {
		if (state.mouseEntered) {
			dispatch({ type: "MOUSE_LEFT" });
		}
	};
	return (
		<div className="w-full h-full relative">
			{windowWidth <= 768 && (
				<div className="absolute top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2">
					<VideoCursor color="#000" />
				</div>
			)}
			<video
				onClick={togglePlaying}
				ref={videoRef}
				className="h-full w-full object-cover cursor-pointer"
				onMouseEnter={mouseEntered}
				onMouseLeave={mouseLeft}
				autoPlay={state.isPlaying}
				muted
				playsInline
			>
				<source src="/media/motion-(Original).mp4-opt.mp4" type="video/mp4" />
				Your browser does not support the video tag.
			</video>
		</div>
	);
};

export default VideoPlayer;
