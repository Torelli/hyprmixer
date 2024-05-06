import { PlayerContext } from "@/contexts/PlayerContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useState } from "react";
import DiscIcon from "../discIcon/DiscIcon";
import { next, prev, togglePlayPause } from "@/service/playerService";
import ProgressBar from "./ProgressBar";
import { faImage } from "@fortawesome/free-regular-svg-icons";
import { faBackwardStep, faForwardStep, faPause, faPlay } from "@fortawesome/free-solid-svg-icons";

export default function Track() {
	const { track, isDiscMode, setDiscMode, currentPlayer } = useContext(PlayerContext)
	const [isPlaying, setIsPlaying] = useState(track?.status == "Playing\n")

	useEffect(() => {
		setIsPlaying(track?.status == "Playing\n")

	})

	return <div className='pt-12 sm:pt-8 md:p-0 text-white flex flex-col items-center justify-center gap-4'>
		<button onClick={() => setDiscMode(!isDiscMode)} className={`drop-shadow-md w-28 h-28 sm:w-32 sm:h-32 md:w-44  md:h-44 focus-visible:outline-white ${isDiscMode ? `border-none animate-spin-slow ${isPlaying ? "hover:pause" : "pause"} rounded-full overflow-hidden` : track?.artUrl == "" ? "border hover:scale-110" : "hover:scale-110"} transition-all`}>
			{track?.artUrl !== "" ? <img src={track?.artUrl} /> : isDiscMode ? <DiscIcon /> : <FontAwesomeIcon className="text-4xl" icon={faImage} />}
		</button>
		<div className="flex flex-col gap-2 w-64">
			<div className="flex flex-col justify-center items-center">
				<h1 className="font-bold text-sm">{track?.title}</h1>
				<h2 className="text-slate-400 text-xs">{track?.artist}</h2>
			</div>
			<ProgressBar position={track?.position as string} length={track?.length as string} />
			<div className="min-h-12 sm:min-h-20 text-sm sm:text-lg md:text-2xl flex items-center justify-around">
				<button onClick={() => prev(currentPlayer)} className="hover:bg-gray-900/60 py-2 px-4 rounded-full focus-visible:outline-white transition-all"><FontAwesomeIcon icon={faBackwardStep} /></button>
				<button onClick={() => togglePlayPause(currentPlayer)} className={`hover:bg-gray-900/60 ${isPlaying ? "py-2 px-4" : "py-3 pl-5 pr-4"} rounded-full focus-visible:outline-white transition-all`}>
					{isPlaying ? <FontAwesomeIcon icon={faPause} /> : <FontAwesomeIcon icon={faPlay} />}
				</button>
				<button onClick={() => next(currentPlayer)} className="hover:bg-gray-900/60 py-2 px-4 rounded-full focus-visible:outline-white transition-all"><FontAwesomeIcon icon={faForwardStep} /></button>
			</div>
		</div>
	</div >
}
