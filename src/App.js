import Main from './components/Main';
import Body from './components/Body';
import Banner from './components/Banner';
import Banner2 from './components/Banner2';
import Banner3 from './components/Banner3';
import Banner4 from './components/Banner4';
import Footer from './components/Footer';
import './styles/App.css';

const bannerMaterialOne ={
  title:"Black Jacket",
  content:"Guess??",
  bgColor:"cyan",
  fontColor:"brown"
}

const bannerMaterialTwo ={
  title:"Tie-Dye Shirt",
  content:"roam the unknown",
  bgColor:"grey",
  fontColor:"orange"
}
function App() {
    return (
    <>
    <Main />
    <Body />
    <Banner title="Blue Sweater" content="I wear white shoes" bgColor="pink" fontColor="red" />
    <Banner title="Grey Sweater" content="I wear pink socks" bgColor="blue" fontColor="yellow"/>
    <Banner title="Grey Sweater" content="I wear pink socks" bgColor="pink"fontColor="purple"/>
    <Banner2 info={bannerMaterialOne}/>
    <Banner3 data={bannerMaterialTwo}/>
    <Banner4 
      howMany={3}
      shirt="puma"
      data={bannerMaterialOne}/>
    <Footer />
    </>
  );
}

export default App;
