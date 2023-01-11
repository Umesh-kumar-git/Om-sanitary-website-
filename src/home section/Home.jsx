import Footer from "../footer/Footer";
import Card from "./card";

const Home = () => {

  
  return (
<>
 <div className=" h-screen mt-5 w-full">
     {/* images backgorund */}
   <div className=" sm:w-full  flex h-3/4 flex-col items-center  ">
      <div className=" sm:w-full  w-11/12 bg-cover bg-no-repeat h-full sm:h-5/6 bg-left sm:bg-center" style={{backgroundImage:"url(./19016.jpg)"}} > </div>
       </div>
       <span className="text-lg w-11/12  text-zinc-500 text-center  hidden sm:inline-block " > Lorem ipsum dolor sit amet consect excepturi, ipsum, temporibus quam possimus debitis consequatur dolore necessitatibus. Labore aperiam temporibus necessitatibus, fugit doloremque debitis. </span>   
   
   </div>


   <div className="handpump chapakal  h-fit flex w-full   justify-center ">
    <div className="waper  w-11/12  bg-slate-100 h-min ">  
        <div className="swr-pipes text-center text-4xl my-10 mb-10 font-thin ">
          Products Avilable
        </div>
         {/*  .......... */}
        <div className="pipes-fitings-moter  w-full  flex sm:flex-row  flex-col justify-center  space-x-2 mb-28  ">
                <div className="card  sm:w-96 sm:h-96  bg-orange-500  cursor-pointer "> <img src="./closet.jpg" alt="" className=" w-full h-full" /> </div>
                <div className="card sm:w-96 sm:h-96  bg-orange-500 cursor-pointer  "><img src="./faucet2.jpg" className=" w-full h-full " alt="" /></div>
                <div className="card  sm:w-96 sm:h-96 bg-orange-500 cursor-pointer "> <img src="./fitings.jpg" className="w-full h-full" alt="" /> </div>
        </div>
       </div>
       </div>

       <Card/>
       <Footer/>
    </>
  );
}

export default Home