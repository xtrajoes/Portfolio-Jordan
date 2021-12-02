
import PtiContents from '../components/Contents/PtiContents';
import Footer from '../components/Footer/Footer'
import HeaderContent from '../components/Header/HeaderContent'
import Header from '../components/Header/Header'
import { Layout } from '../layout/Layout';


const PtiPage = () => {
  return(
    <>
    <HeaderContent/>
      <PtiContents/>
    <Footer/>
    </>
  );
}

export default PtiPage;