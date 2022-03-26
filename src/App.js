import "./App.css";
import Content from "./components/Content/Content";
import Header from "./components/Header/Header";
import Shop from "./components/Shop/Shop";

function App() {
  return (
    <div className="app">
      <Header></Header>
      <Shop></Shop>
      <Content></Content>
    </div>
  );
}

export default App;
