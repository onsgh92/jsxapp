import './App.css';
import image from './photo.jpg';


function App() {
  return (
    <div className="App">
<div style={{border:"solid 1px black" , maxwidth:'100vw'}}>
<h1 className="title red">Ons gharbi</h1>

<img src={"/pic/pic.jpg"} />


<img src={image} />


<iframe width="320" height="240"  src="https://www.youtube.com/embed/VnjeR-bsRM4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  
  
  </div>      
      
   
    </div>
  );
}

export default App;
