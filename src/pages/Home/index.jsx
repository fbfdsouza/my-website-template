import React, { useEffect } from "react"
import { restServer1 } from "../../api/baseAPI"

const Home = () => {


    useEffect(async ()=>{
        console.log(await restServer1.get("/"))
    },[])

    return <h1>Home</h1>
}

export default Home