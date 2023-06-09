import {  useEffect,useState } from "react";

const useData = () => {
    // slider data
const [slider,setSlider]=useState([])
const [loader,setLoader]=useState(true)

useEffect(()=>{
fetch('Banner.json')
.then(res=>res.json())
.then(data=>{
setSlider(data)
setLoader(false)

})
},[])
// popular class data




return [slider,loader]
};

export default useData;