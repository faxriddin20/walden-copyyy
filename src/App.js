
import './App.scss';
import Gong from './components/gong/Gong';
import Header from './components/header/Header';
import Products from './components/products/Products';
import SecondSection from './components/section/SecondSection';
// import Footer from './components/footer/Footer'
function App() {
  return (
    <>
      <Header />
      {/* <Footer /> */}
      <SecondSection />
      <Products />
      <Gong />
    </>
  );
}

export default App;
