import Usercard from "./components/usercard"
import './App.css'

function App() {

  return (
    <div className="App">
      <Usercard name="Albert Einstein" desc="(14 March 1879 – 18 April 1955)" image="https://upload.wikimedia.org/wikipedia/commons/4/4e/Albert_Einstein_1947_square_cropped.jpg"/>
      <Usercard name="Sylvia Plath" desc="27 October, 1932 - 11 February, 1963" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-E7xfw4GwmvhO7g9CTSIlx7sH4_lPW1LyJxYpMnyMeHTD4cEeUpAZxxeRP27KaJbt0Tc&usqp=CAU"/>
      <Usercard name="Stanley Kubrick" desc="(July 26, 1928 – March 7, 1999)" image = "https://hips.hearstapps.com/hmg-prod/images/stanley-kubrick-9369672-1-402.jpg"/>
    </div>
  )
}

export default App
