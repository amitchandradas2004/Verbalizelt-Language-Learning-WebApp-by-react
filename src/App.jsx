import "./App.css";
import Hero from "./Components/Hero/Hero";
import Learn from "./Components/Learn/Learn";
import Learning from "./Components/Learning/Learning";
import Navbar from "./Components/Navbar/Navbar";
import NewLanguage from "./Components/NewLanguage/NewLanguage";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Learning></Learning>
      <NewLanguage></NewLanguage>
      <Learn></Learn>
    </>
  );
}

export default App;
