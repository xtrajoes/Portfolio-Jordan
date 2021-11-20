
import BcaContents from '../components/Contents/BcaContents';
import Footer from '../components/Footer/Footer'
import HeaderContent from '../components/Header/HeaderContent'
import Header from '../components/Header/Header'
import { Layout } from '../layout/Layout';


const BcaPage = () => {
  return(
    <>
    <HeaderContent/>
      <BcaContents/>
    <Footer/>
    </>
  );
}

export default BcaPage;