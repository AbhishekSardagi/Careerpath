import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import { Routes } from "./Routes/Routes";

function App() {
  return (
    <>
      <Header />
      <Routes />
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
