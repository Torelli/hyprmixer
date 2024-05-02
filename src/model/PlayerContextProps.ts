import { Dispatch, SetStateAction } from "react"

export default interface PlayerContextProps {
  players: string
  isDiscMode: boolean
  setDiscMode: Dispatch<SetStateAction<boolean>>
}
