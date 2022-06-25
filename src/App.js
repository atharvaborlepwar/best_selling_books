import "./App.css";
import Header from "./MyComponents/Header";
import { Footer } from "./MyComponents/Footer";
import {Books} from "./MyComponents/Books";
import { Bookitem } from "./MyComponents/Bookitem";


function App() {
  let Books=[
    {
      sno:1,
      title:"The Alchemist",
      author:"Paulo Coelho"

    },
    {
      sno:2,
      title:"The Alchemist",
      author:"Paulo Coelho"

    },
    {
      sno:3,
      title:"The Alchemist",
      author:"Paulo Coelho"

    }
  ]
  return (
    
    <>
    <Header title="" searchBar={true}/>
    <Footer/>
    <Books Books={Books}/>
    </>
  );
}

export default App;