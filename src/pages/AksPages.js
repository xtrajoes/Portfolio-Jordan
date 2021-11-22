
import AksContents from '../components/Contents/AksContents';
import Footer from '../components/Footer/Footer'
import HeaderContent from '../components/Header/HeaderContent'
import Header from '../components/Header/Header'
import { Layout } from '../layout/Layout';


const AksPage = () => {
  return(
    <>
    <HeaderContent/>
      <AksContents/>
    <Footer/>
    </>
  );
}

export default AksPage;