import {imageLinks}  from "./imgsLink"
 

const Card = () => {
     
     
    
  return (

    <>
    <div className="wapper sm:flex w-full h-fit  bg-slate-400 items-center justify-center ">
    {
      imageLinks && imageLinks.map((item,i)=>{
        return ( 
            <div className="sm:w-80  mt-10  sm:h-96 sm:drop-shadow-md shadow-lg shadow-zinc-800/40 drop-shadow-xl  sm:hover:drop-shadow-xl sm:hover:-translate-y-3 m-2 transition duration-500 " key={i}>
            <img src="./faucetwash.jpg" alt="" className='w-full h-4/5'/>
            <div className=" text-lg text-center"> {item.name}</div>
            <div className=" text-xs w-11/12 text-center  cursor-pointer text-slate-600 ">{item.detailes}  </div>
       </div>
        
        )
      }
      )
    } 
    </div>
    </>
     
      
             
        
   
     

  )
}

export default Card