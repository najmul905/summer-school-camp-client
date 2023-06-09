import { useEffect, useState } from "react";

const usePopularins = () => {
    const [popuarIns,setPopularCls]=useState([])
    const [loader,setLoader]=useState(true)
useEffect(()=>{
    fetch('PopularIns.json')
    .then(res=>res.json())
    .then(data=>{
        setPopularCls(data)
        setLoader(false)
    })
},[])
    return [popuarIns,loader]
};

export default usePopularins;