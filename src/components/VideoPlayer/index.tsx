import { useRef } from "react";
import { useVideo } from "../../context/VideoPlayer";

const VideoPlayer = () => {
	const { state, dispatch } = useVideo();
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
		<div className="w-full h-full">
			<video
				onClick={togglePlaying}
				ref={videoRef}
				className="h-full w-full object-cover cursor-pointer"
				onMouseEnter={mouseEntered}
				onMouseLeave={mouseLeft}
				autoPlay={state.isPlaying}
				muted
				playsinline
			>
				<source src="/media/motion-(Original).mp4-opt.mp4" type="video/mp4" />
				Your browser does not support the video tag.
			</video>
		</div>
	);
};

export default VideoPlayer;
