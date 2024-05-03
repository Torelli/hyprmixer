function getPositionPercentage(position: string, length: string) {
	const lengthArr = length.split(":")
	const positionArr = position.split(":")

	const lengthinSeconds = lengthArr.length > 2 ? (+lengthArr[0] * 60 * 60) + (+lengthArr[1] * 60) + (+lengthArr[2]) : (+lengthArr[0] * 60) + (+lengthArr[1])
	const positionInSeconds = positionArr.length > 2 ? (+positionArr[0] * 60 * 60) + (+positionArr[1] * 60) + (+positionArr[2]) : (+positionArr[0] * 60) + (+positionArr[1])

	return (100 * positionInSeconds) / lengthinSeconds
}

export default function ProgressBar({ position, length }: { position: string, length: string }) {
	const percentage = position !== undefined && length !== undefined ? getPositionPercentage(position, length) + "%" : "0%"
	return <>
		<div className="w-full bg-slate-700 rounded-full h-1">
			<div className="h-1 rounded-full bg-white transition-all" style={{ width: percentage }}></div>
		</div>
		<div className="flex justify-between text-xs">
			<span className="text-slate-400">{position}</span>
			<span className="text-slate-400">{length}</span>
		</div>
	</>
}
