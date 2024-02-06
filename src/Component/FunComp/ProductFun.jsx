import React, { useState } from "react";

function ProductFun(){

    const [count ,setcount] = useState(0)
    const [name ,setname] = useState("")

    const handleadd = ()=>{
        setcount(count+1)



    }
    const handlename =()=>{

        setname("mano")
    }



    return(
        <>

        <h1>ProductFun</h1>
        <h2> count -{count}</h2>
        <h3> name -{name}</h3>
        <button onClick={handlename}>Add</button>
        <button onClick={handleadd}>Add</button>
        
        
        
        </>





    )




}

export default ProductFun;