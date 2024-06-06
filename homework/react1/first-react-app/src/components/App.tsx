import "./App.css";
import CounterApp from "./CounterApp/CounterApp";
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
      </main>
      <Footer />
    </>
  );
}

export default App;
