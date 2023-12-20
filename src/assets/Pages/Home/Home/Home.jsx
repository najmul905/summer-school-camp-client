import { Helmet } from 'react-helmet-async';
import Banner from './Banner/Banner';
import Populercls from './PopularClass/Populercls';
import PopulerIns from './PopulerInstractor/PopulerIns';
import Discount from './Discount/Discount';
// import {motion} from 'framer-motion'
const Home = () => {


    return (
        <div>
            <Helmet>
                <title> Study Care-Home</title>
            </Helmet>
            {/* <div className='text-center'>
                <motion.h1
                 whileHover={{ scale: [null, 1,1.2] }}
                 transition={{ duration: 0.3 }}
                className="italic text-4xl font-semibold py-4"><span className='text-orange-400'>Welcome To Our</span> <br /><span className='text-orange-500'> Summer School</span></motion.h1>
            </div> */}
            <Banner></Banner>
           <div className='lg:mx-24 md:mx-18 mx-10 mb-8'>
           <Populercls></Populercls>
            <PopulerIns></PopulerIns>
            <Discount></Discount>
           </div>

        </div>
    );
};

export default Home;