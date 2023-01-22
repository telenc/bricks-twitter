import useBricks from 'usebricks';
import './App.css';


function TwitterHorizontal() {
  var { user, widget, configMode, props } = useBricks();
  return (
    <div className="App" style={{
      backgroundColor: "#00ACEE",
      width: "100vw",
      height: "100vh",
      display: "flex",
      justifyContent: "start",
      alignItems: "center",

    }}>
      <input type="text" className='inputHorizontal' placeholder="@username" />
      <img src="/twitter.png" />
    </div>
  )
}

function TwitterSquare() {
  var { user, widget, configMode, props } = useBricks();
  return (
    <div className="App" style={{
      backgroundColor: "#00ACEE",
      width: "100vw",
      height: "100vh",
      display: "flex",
      justifyContent: "start",
      alignItems: "start",
      flexDirection: "column",

    }}>
      <input type="text" className='inputSquare' placeholder="@username" />
      <p>50 following</p>
      <p>44 followees</p>
      <img src="/twitter.png" />
    </div>
  )
}
function App() {
  var { user, widget, configMode, props } = useBricks();
  const width = window.innerWidth;
  const height = window.innerHeight;
  if (height < 100) {
    return <TwitterHorizontal />
  }
  return <TwitterSquare />
}

export default App
