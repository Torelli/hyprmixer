import { Dispatch, SetStateAction } from "react"
import Track from "./Track"

export default interface PlayerContextProps {
  players: string[] | null
  currentPlayer: string
  track: Track | null
  isDiscMode: boolean
  setDiscMode: Dispatch<SetStateAction<boolean>>
}
