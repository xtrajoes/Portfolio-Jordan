
import BzyContents from '../components/Contents/BzyContents';
import Footer from '../components/Footer/Footer'
import HeaderContent from '../components/Header/HeaderContent'
import Header from '../components/Header/Header'
import { Layout } from '../layout/Layout';


const BzyPage = () => {
  return(
    <>
    <HeaderContent/>
      <BzyContents/>
    <Footer/>
    </>
  );
}

export default BzyPage;