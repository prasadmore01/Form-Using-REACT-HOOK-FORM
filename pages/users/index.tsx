import axios from "axios"
import { useEffect, useState } from "react"

const index = () => {

    const[data,setData]=useState<any[]>()

    useEffect(()=>{
        const fetchData = async()=>{
        const response = await axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>{
            return res
        })
        setData( response.data)
        }
        fetchData()
    },[])

    console.log({data})

    return(
        <div>
            <h1>Working</h1>
        </div>
    )


}

export default index