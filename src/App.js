import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div id="app">
      <div id="top">
        <h1 id="left" className="header-items">
          <>Dudhwa National Park</>
        </h1>
        <h1 id="right" className="header-items">
          +918178396703
        </h1>
      </div>
      <div id="page">
        <Header></Header>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
