import Track from './components/track/Track'
import Navbar from './components/navbar/Navbar'
import { useContext } from 'react'
import { PlayerContext } from './contexts/PlayerContext'
import PlayerList from './components/playerList/PlayerList'
import Settings from './components/settings/Settings'

function App() {
  const { pageOpened } = useContext(PlayerContext)

  switch (pageOpened) {
    case 0:
      return <div className="select-none flex items-center justify-center h-dvh">
        <Navbar />
        <Track />
      </div>
    case 1:
      return <div className="select-none flex items-center justify-center h-dvh">
        <Navbar />
        <PlayerList />
      </div>
    case 2:
      return <div className="select-none flex items-center justify-center h-dvh">
        <Navbar />
        <Settings />
      </div>
  }
}

export default App
