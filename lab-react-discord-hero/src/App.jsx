import './App.css'
import backgroundImg from "./assets/discord-background.png"
import menuIcon from "./assets/menu-icon.png"
import logo from "./assets/discord-logo-white.png"

function App() {
  

  return (
    <div className="App">
      <nav>
        <img src={logo} />
        <img src={menuIcon} />
      </nav>
      <h1>IMAGINE A PLACE...</h1>
      <p>...where you can belong to a school club, a gaming group, or a 
        worldwide art community. Where just you and a handful of 
        friends can spend time together. A place that makes it easy to
        talk every day and hang out more often.
      </p>
      <div className="buttons-div">
        <button type="button">Download for Mac</button>
        <button type="button">Open Discord in your browser</button>
      </div>
      <img src={backgroundImg} className="background-img" />
    </div>  
  )
}

export default App
