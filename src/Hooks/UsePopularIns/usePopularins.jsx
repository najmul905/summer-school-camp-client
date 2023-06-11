import { useEffect, useState } from "react";

const usePopularins = () => {
    const [popuarIns,setPopularCls]=useState([])
    const [loader,setLoader]=useState(true)
useEffect(()=>{
    fetch('http://localhost:5000/instructor')
    .then(res=>res.json())
    .then(data=>{
        setPopularCls(data)
        setLoader(false)
    })
},[])
    return [popuarIns,loader]
};

export default usePopularins;