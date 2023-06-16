import { useEffect, useState } from "react";

const usePopularins = () => {
    const [popuarIns,setPopularCls]=useState([])
    const [loader,setLoader]=useState(true)
useEffect(()=>{
    fetch('https://school-summer-sport-camp-server.vercel.app/instructor')
    .then(res=>res.json())
    .then(data=>{
        setPopularCls(data)
        setLoader(false)
    })
},[])
    return [popuarIns,loader]
};

export default usePopularins;