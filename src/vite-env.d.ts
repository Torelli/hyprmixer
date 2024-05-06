/// <reference types="vite/client" />

import Track from './model/Track'

export interface IPlayerCtlAPI {
  getPlayers: () => Promise<Array<string>>
  getCurrentTrack: (player: string) => Promise<Track>
  togglePlayPause: (player: string) => void
  next: (player: string) => void
  prev: (player: string) => void
  changePosition: (player: string, position: string) => void
}

declare global {
  interface Window {
    // expose in the `electron/preload/index.ts`
    ipcRenderer: import('electron').IpcRenderer
    playerCtlAPI: IPlayerCtlAPI
  }
}

