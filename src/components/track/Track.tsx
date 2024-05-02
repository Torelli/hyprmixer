import { PlayerContext } from "@/contexts/PlayerContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import DiscIcon from "../discIcon/DiscIcon";

export default function Track() {
	const { isDiscMode, setDiscMode } = useContext(PlayerContext)
	const [isPlaying, setIsPlaying] = useState(false)

	return <div className='pt-12 sm:pt-8 md:p-0 text-white flex flex-col items-center justify-center gap-4'>
		<button onClick={() => setDiscMode(!isDiscMode)} className={`w-20 h-20 sm:w-28 sm:h-28 md:w-40 md:h-40 focus-visible:outline-white ${isDiscMode ? `border-none animate-spin-slow ${isPlaying ? "hover:pause" : "pause"} rounded-full` : "border hover:scale-110"} transition-all`}>
			{isDiscMode ? <DiscIcon /> : <FontAwesomeIcon className="text-4xl" icon="fa-regular fa-image" />}
		</button>
		<div className="flex flex-col gap-4 w-64">
			<div className="flex flex-col justify-center items-center">
				<h1 className="font-bold text-sm">Feeling good</h1>
				<h2 className="text-slate-400 text-xs">John Doe</h2>
			</div>
			<div className="border-b-2"></div>
			<div className="min-h-12 sm:min-h-20 text-sm sm:text-lg md:text-2xl flex items-center justify-around">
				<button className="hover:bg-gray-900/60 py-2 px-4 rounded-full focus-visible:outline-white transition-all"><FontAwesomeIcon icon="fa-solid fa-backward-step" /></button>
				<button onClick={() => setIsPlaying(!isPlaying)} className={`hover:bg-gray-900/60 ${isPlaying ? "py-2 px-4" : "py-3 pl-5 pr-4"} rounded-full focus-visible:outline-white transition-all`}>
					{isPlaying ? <FontAwesomeIcon icon="fa-solid fa-pause" /> : <FontAwesomeIcon icon="fa-solid fa-play" />}
				</button>
				<button className="hover:bg-gray-900/60 py-2 px-4 rounded-full focus-visible:outline-white transition-all"><FontAwesomeIcon icon="fa-solid fa-forward-step" /></button>
			</div>
		</div>
	</div >
}
