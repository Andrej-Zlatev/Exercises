import "./App.css";
import CounterApp from "./CounterApp/CounterApp";
import Menu from "./Menu/Menu";
import Planets from "./Planets";
import TextValue from "./TextValue/TextValue";
import Footer from "./footer";
import "./header/Header";
import Header from "./header/Header";
import Main from "./main";
function App() {
  return (
    <>
      <Header />
      <Menu />
      <main>
        <Main />
        <CounterApp />
        <Planets />
        <TextValue />
      </main>
      <Footer />
    </>
  );
}

export default App;
