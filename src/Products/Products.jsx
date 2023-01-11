import React, { useState, useEffect } from 'react'
const Products = () => {

    const [first, setfirst] = useState()
  const productdata = async function( ) {
    
     const res =  await fetch("/api/v1/product")
     const data = await res.json();
     const detas = data.products
     
     setfirst(detas)
    }

    
     useEffect(() => {
       productdata()
     }, [])
     
     console.log(first);
  return (
    <>
    <div className="wapper  w-full  h-min  " >
        <div className="images">
           {  first && first.map((item,i)=>{return(
            <div className="img w-96 h-96">
                 <img src={item.img} alt="lodding..." />
                  <p>{item.name}</p>
                </div>
           )}) 
            }
        </div>
    </div>
    </>
  )
}

export default Products