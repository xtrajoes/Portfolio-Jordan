
import TJContents from '../components/Contents/TJContents';

import { Layout } from '../layout/Layout';


export default function Home2(){
    return(
      <Layout>
        <TJContents />
        
      </Layout>
    );
};

Home2.getLayout = function getLayout(page){
  return (
    {page}
  );
};

