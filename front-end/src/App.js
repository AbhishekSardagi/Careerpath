import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import { Routes } from "./Routes/Routes";
import Chat from "./Components/Chat"

function App() {
  return (
    <>
      <Header />
      <Routes />
      <div>
      <div><Chat /></div>
        <Footer />
      </div>
    </>
  );
}

export default App;
