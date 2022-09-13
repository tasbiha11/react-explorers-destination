import Backdrop from "./components/backdrop/Backdrop";
import Destinstions from "./components/destinations/Destinstions";
import Navbar from "./components/navbar/Navbar";
import Search from "./components/search/Search";

function App() {
  return (
    <div >
      <Navbar />
      <Backdrop />
      <Destinstions />
      <Search />
    </div>
  );
}

export default App;
