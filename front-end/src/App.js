import "./App.css";
import Header from "./Components/Header/Header";
import { Navbar } from "./Components/Navbar/Navbar";
import { Routes } from "./Routes/Routes";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Routes />
    </>
  );
}

export default App;
