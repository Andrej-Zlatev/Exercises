import "./App.css";
import "./components/header/Header";
import Header from "./components/header/Header";
import Footer from "./components/footer";
import Main from "./components/main";
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
