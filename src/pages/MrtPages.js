
import MrtContents from '../components/Contents/MrtContents';
import Footer from '../components/Footer/Footer'
import HeaderContent from '../components/Header/HeaderContent'
import Header from '../components/Header/Header'
import { Layout } from '../layout/Layout';


const MrtPage = () => {
  return(
    <>
    <HeaderContent/>
      <MrtContents/>
    <Footer/>
    </>
  );
}

export default MrtPage;