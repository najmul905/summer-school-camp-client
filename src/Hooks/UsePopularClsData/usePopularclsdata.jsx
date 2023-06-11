import { useEffect, useState } from "react";

const usePopularclsdata = () => {

    const [popularCls,setPopularCls]=useState([])
    const [loader,setLoader]=useState(true)
useEffect(()=>{
    fetch('http://localhost:5000/class')
    .then(res=>res.json())
    .then(data=>{
        setPopularCls(data)
        setLoader(false)
    })
},[])
    return [popularCls,loader]
    
};

export default usePopularclsdata;