import { useEffect, useState } from "react";

const usePopularclsdata = () => {

    const [popularCls,setPopularCls]=useState([])
    const [loader,setLoader]=useState(true)
useEffect(()=>{
    fetch('https://school-summer-sport-camp-server.vercel.app/class')
    .then(res=>res.json())
    .then(data=>{
        setPopularCls(data)
        setLoader(false)
    })
},[])
    return [popularCls,loader]
    
};

export default usePopularclsdata;