import { library } from '@fortawesome/fontawesome-svg-core'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons'
import Track from './components/track/Track'
import Navbar from './components/navbar/Navbar'

library.add(fas, far, faTwitter, faFontAwesome)


function App() {
  return (
    <div className="select-none flex items-center justify-center h-svh">
      <Navbar />
      <Track />
    </div>
  )
}

export default App
