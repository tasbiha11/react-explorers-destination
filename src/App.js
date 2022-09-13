import Backdrop from "./components/backdrop/Backdrop";
import Destinstions from "./components/destinations/Destinstions";
import Navbar from "./components/navbar/Navbar";
import Search from "./components/search/Search";
import Selects from "./components/selects/Selects";

function App() {
  return (
    <div >
      <Navbar />
      <Backdrop />
      <Destinstions />
      <Search />
      <Selects />
    </div>
  );
}

export default App;
