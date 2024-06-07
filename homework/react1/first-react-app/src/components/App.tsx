import "./App.css";
import CounterApp from "./CounterApp/CounterApp";
import Planets from "./Planets";
import Footer from "./footer";
import "./header/Header";
import Header from "./header/Header";
import Main from "./main";
function App() {
  return (
    <>
      <Header />
      <main>
        <Main />
        <CounterApp />
        <Planets />
      </main>
      <Footer />
    </>
  );
}

export default App;
