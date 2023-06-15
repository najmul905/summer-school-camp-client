import { Helmet } from 'react-helmet-async';
import Banner from './Banner/Banner';
import Populercls from './PopularClass/Populercls';
import PopulerIns from './PopulerInstractor/PopulerIns';

const Home = () => {


    return (
        <div>
            <Helmet>
                <title> SSSC-Home</title>
            </Helmet>
            <div className='text-center'>
                <h1 className="italic text-4xl font-semibold hover:text-5xl"><span className='text-orange-400'>Welcome To Our</span> <br /><span className='text-orange-500'> Summer School</span></h1>
            </div>
            <Banner></Banner>
            <Populercls></Populercls>
            <PopulerIns></PopulerIns>

        </div>
    );
};

export default Home;