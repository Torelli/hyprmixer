import { PlayerContext } from "@/contexts/PlayerContext"
import PlayerProviderProps from "@/model/PlayerProviderProps"
import { useEffect, useState } from "react"



export default function PlayerProvider({ children }: PlayerProviderProps) {
	const [players, setPlayers] = useState("")
	const [isDiscMode, setDiscMode] = useState(false)

	useEffect(() => {
	})
	return (
		<PlayerContext.Provider value={{ players, isDiscMode, setDiscMode }} >
			{children}
		</PlayerContext.Provider>
	)
}
