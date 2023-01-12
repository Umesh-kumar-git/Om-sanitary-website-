import Card from "./card";
import { Link } from "react-router-dom";
const Home = () => {
  const Products = [
    {
      img: "./closet.jpg",
      link: "/",
      name:"Closet"
    },
    {
      img: "./faucet2.jpg",
      link: "/",
      name:"Fucets"

    },
    {
      img: "./fitings.jpg",
      link: "/",
      name:"Fittings"

    },
    {
      img: "./faucet2.jpg",
      link: "/",
      name:"Foucets"

    },
    {
      img: "./fitings.jpg",
      link: "/",
      name:"Fittings"

    },
    {
      img: "./fitings.jpg",
      link: "/",
      name:"Fittings"

    },
  ];

  return (
    <>
      <div className=" h-screen mt-5 w-full">
        {/* images backgorund */}
        <div className=" sm:w-full  flex h-3/4 flex-col items-center  ">
          <div
            className=" sm:w-full  w-11/12 bg-cover bg-no-repeat h-full sm:h-5/6 bg-left sm:bg-center"
            style={{ backgroundImage: "url(./19016.jpg)" }}
          >
            {" "}
          </div>
        </div>
        <span className="text-lg w-11/12  text-zinc-500 text-center  hidden sm:inline-block ">
          {" "}
          Lorem ipsum dolor sit amet consect excepturi, ipsum, temporibus quam
          possimus debitis consequatur dolore necessitatibus. Labore aperiam
          temporibus necessitatibus, fugit doloremque debitis.{" "}
        </span>
      </div>

      <div className="handpump chapakal  h-fit flex w-full   justify-center ">
        <div className="waper  w-11/12  bg-slate-100 h-min ">
          <div className="swr-pipes text-center text-4xl my-10 mb-10 font-thin ">
            Products Avilable
          </div>
          {/*  .......... */}
          <div className="pipes-fitings-moter  w-full h-fit   flex sm:flex-row  flex-col flex-wrap  justify-center   mb-28  ">
            {Products.map((elm, i) => {
              return (
                <div
                  className="card  sm:w-96 sm:h-96 p-2  hover:-translate-y-3 transition duration-500 cursor-pointer "
                  key={i}
                >
                  <Link to={elm.link}>
                    <div className=" w-full h-full  ">

                    <img src={elm.img} alt="" className=" w-full h-full " />
                    </div>
                    <div className=" w-full h-10  font-extrabold z-50    bg-orange-500 text-center -mt-10">
                      <div className="" >{elm.name}</div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <Card />
    </>
  );
};

export default Home;
