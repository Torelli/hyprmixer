import { PlayerContext } from "@/contexts/PlayerContext"
import { changePosition } from "@/service/playerService"
import { useContext } from "react"

function getPositionPercentage(position: string, length: string) {
	return (100 * getTimeInSeconds(position)) / getTimeInSeconds(length)
}

function getTimeInSeconds(s: string) {
	const timeArr = s.split(":")

	return timeArr.length > 2 ? (+timeArr[0] * 60 * 60) + (+timeArr[1] * 60) + (+timeArr[2]) : (+timeArr[0] * 60) + (+timeArr[1])
}

function getPositionSeconds(positionPercentage: string, length: string) {
	const lengthSeconds = getTimeInSeconds(length)
	return (lengthSeconds * +positionPercentage) / 100
}

export default function ProgressBar({ position, length }: { position: string, length: string }) {
	const { currentPlayer } = useContext(PlayerContext)
	const percentage = position !== undefined && length !== undefined && length !== "0:00" ? getPositionPercentage(position, length) : "0"
	return <>
		<div className="relative w-full h-1 bg-slate-700 rounded-full group">
			<input type="range" min="0" max="100" onChange={(e) => changePosition(currentPlayer.name, getPositionSeconds(e.target.value, length).toString())} value={percentage} className="z-50 absolute w-full h-1 rounded-lg appearance-none cursor-pointer range-sm bg-transparent [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-2 [&::-webkit-slider-thumb]:w-2 [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:opacity-0 group-hover:[&::-webkit-slider-thumb]:opacity-100 focus-visible:outline-none" />
			<div className="z-0 absolute h-1 rounded-full bg-white" style={{ width: percentage + "%" }}></div>
		</div>
		<div className="flex justify-between text-xs">
			<span className="text-slate-400">{position}</span>
			<span className="text-slate-400">{length}</span>
		</div>
	</>
}
