import Backdrop from "./components/backdrop/Backdrop";
import ImgCarousel from "./components/carousel/ImgCarousel";
import Destinstions from "./components/destinations/Destinstions";
import Footer from "./components/footer/Footer";
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
      <ImgCarousel />
      <Footer />
    </div>
  );
}

export default App;
