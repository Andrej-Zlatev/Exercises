import "./App.css";
import "./header/Header";
import Header from "./header/Header";
import Footer from "./footer";
import Main from "./main";
function App() {
  return (
    <>
      <Header />
      <main>
        <Main />
      </main>
      <Footer />
    </>
  );
}

export default App;
