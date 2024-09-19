import React, { createContext, useReducer, useContext, ReactNode } from "react";
import { VideoAction, VideoState } from "../types/types";

const initialState: VideoState = {
	isPlaying: true,
	mouseEntered: false,
};

function videoReducer(state: VideoState, action: VideoAction): VideoState {
	switch (action.type) {
		case "PLAY":
			return { ...state, isPlaying: true };
		case "PAUSE":
			return { ...state, isPlaying: false };
		case "MOUSE_ENTERED":
			return { ...state, mouseEntered: true };
		case "MOUSE_LEFT":
			return { ...state, mouseEntered: false };

		default:
			return state;
	}
}

const VideoContext = createContext<
	| {
			state: VideoState;
			dispatch: React.Dispatch<VideoAction>;
	  }
	| undefined
>(undefined);

export function useVideo() {
	const context = useContext(VideoContext);
	if (!context) {
		throw new Error("useVideo must be used within a VideoProvider");
	}
	return context;
}

export const VideoProvider = ({ children }: { children: ReactNode }) => {
	const [state, dispatch] = useReducer(videoReducer, initialState);

	return (
		<VideoContext.Provider value={{ state, dispatch }}>
			{children}
		</VideoContext.Provider>
	);
};
