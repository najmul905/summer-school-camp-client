import { Helmet} from 'react-helmet-async';
import Banner from './Banner/Banner';
import Populercls from './PopularClass/Populercls';
import PopulerIns from './PopulerInstractor/PopulerIns';

const Home = () => {


    return (
        <div>
<Helmet>
   <title> SSSC-Home</title>
</Helmet>
           <Banner></Banner>
          <Populercls></Populercls>
          <PopulerIns></PopulerIns>
           
        </div>
    );
};

export default Home;