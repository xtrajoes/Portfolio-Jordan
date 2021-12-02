
import GjkContents from '../components/Contents/GjkContents';
import Footer from '../components/Footer/Footer'
import HeaderContent from '../components/Header/HeaderContent'
import Header from '../components/Header/Header'
import { Layout } from '../layout/Layout';


const GjkPage = () => {
  return(
    <>
    <HeaderContent/>
      <GjkContents/>
    <Footer/>
    </>
  );
}

export default GjkPage;