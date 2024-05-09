/// <reference types="vite/client" />

import Player from './model/Player'
import Track from './model/Track'

export interface IPlayerCtlAPI {
  getPlayers: () => Promise<Player[]>
  getCurrentTrack: (player: Player) => Promise<Track>
  togglePlayPause: (player: string) => void
  next: (player: string) => void
  prev: (player: string) => void
  changePosition: (player: string, position: string) => void
  getPlayerVolume: (player: string) => Promise<string>
  setPlayerVolume: (player: string, volume: number) => void
}

declare global {
  interface Window {
    // expose in the `electron/preload/index.ts`
    ipcRenderer: import('electron').IpcRenderer
    playerCtlAPI: IPlayerCtlAPI
  }
}

