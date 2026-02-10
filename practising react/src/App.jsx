import Accordian from "./component/accordian/index"
import RandomColor from "./component/colorGenerator/index"
import StarRating from "./component/starRating/starRating"

function App() {

  return (
    <>
      <Accordian />
      <div style={{ border: '2px solid black', width: '100%', marginTop:"20px", marginBottom: "20px" }} />
      <RandomColor />
      <div style={{ border: '2px solid black', width: '100%', marginTop:"20px", marginBottom: "20px" }} />
      <StarRating />
      <div style={{ border: '2px solid black', width: '100%', marginTop:"20px", marginBottom: "20px" }} />
    </>
  )
}

export default App
