import Accordian from "./component/accordian/index"
import RandomColor from "./component/colorGenerator/index"
import StarRating from "./component/starRating/starRating"
import ImageSlider from "./component/image-slider/imageSlider"
import LoadMoreData from "./component/load_more_data/loadMoreData"
import TreeMenu from "./component/tree_menu/treeMenu"
import ToggleTheme from "./component/toggle_theme/toggleTheme"
import PopUP from "./component/pop_up_model/popUpModel"


function App() {

  return (
    <>
      <Accordian />
      <div style={{ border: '2px solid black', width: '100%', marginTop:"20px", marginBottom: "20px" }} />
      <RandomColor />
      <div style={{ border: '2px solid black', width: '100%', marginTop:"20px", marginBottom: "20px" }} />
      <StarRating numOfStar={5}/>
      <div style={{ border: '2px solid black', width: '100%', marginTop:"20px", marginBottom: "20px" }} />
      <ImageSlider url={"https://picsum.photos/v2/list?page=1&limit="} limit = {10} />
      <div style={{ border: '2px solid black', width: '100%', marginTop:"20px", marginBottom: "20px" }} /> 
      <LoadMoreData />
      <div style={{ border: '2px solid black', width: '100%', marginTop:"20px", marginBottom: "20px" }} />
      <TreeMenu />
      <div style={{ border: '2px solid black', width: '100%', marginTop:"20px", marginBottom: "20px" }} />
      <ToggleTheme />
      <div style={{ border: '2px solid black', width: '100%', marginTop:"20px", marginBottom: "20px" }} />
      <PopUP />
      <div style={{ border: '2px solid black', width: '100%', marginTop:"20px", marginBottom: "20px" }} />
    </>
  )
}

export default App
