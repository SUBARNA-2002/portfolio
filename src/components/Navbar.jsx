import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    if (show === true) {
      setShow(false);
    } else {
      setShow(true);
    }
  };
   const navigate = useNavigate();
   const handleHome = () => {
    navigate("/");
    setShow(false)
  };

  return (
    <>
      <div className=" bg-black text-white lg:h-16 lg:bg-black lg:text-white lg:flex lg:items-center lg:justify-evenly">
        <div className="flex">
          <div className="cursor-pointer text-3xl lg:px-0 px-1 lg:ml-0 ml-2 lg:border-0 py-2 font-bold lg:text-4xl lg:font-bold lg:py-3 lg:cursor-pointer"onClick={handleHome}>
            GridX
          </div>
          <button className=" lg:invisible lg:ml-0 ml-36  bg-cyan-500 rounded-lg px-3 py-2 my-2 text-black">
            Let's Talk
          </button>
          <div className=" mx-3 my-2 lg:hidden" onClick={handleShow}>
            <i className=" text-3xl fa-solid fa-bars"></i>
          </div>
        </div>
        <div className=" hidden lg:list-none lg:flex lg:space-x-12 lg:cursor-pointer lg:text-neutral-500 lg:items-center ">
          <li className=" lg:text-lg lg:hover:text-cyan-500   lg:hover:decoration-cyan-500 lg:hover:underline lg:items-center">
            HOME
          </li>
          <li className="  lg:text-lg lg:hover:text-cyan-500  lg:hover:decoration-cyan-500 lg:hover:underline">
            ABOUT
          </li>
          <li className=" lg:text-lg lg:hover:text-cyan-500   lg:hover:decoration-cyan-500 lg:hover:underline">
            WORK
          </li>
          <li className=" lg:text-lg lg:hover:text-cyan-500   lg:hover:decoration-cyan-500 lg:hover:underline">
            CONTACT
          </li>
        </div>
        <div>
          <button className=" invisible lg:visible lg:mt-4 lg:h-10 lg:px-6 lg:py-1 lg:text-black lg:bg-cyan-500 lg:rounded-lg lg:hover:bg-white lg:hover:text-black" >
            Let's Talk
          </button>
        </div>
        {show ? (
          <>
            <div className="bg-black list-none items-center lg:list-none py-1">
              <li></li>
              <li className=" mx-2  text-stone-400 rounded text-center px-4 py-1 my-2 "onClick={handleHome}>
                HOME
              </li>
              <li className="  mx-2  text-stone-400 rounded text-center  px-4 py-1 my-2 ">
                ABOUT
              </li>
              <li className="  mx-2 text-stone-400 rounded  text-center px-4 py-1 my-2 ">
                WORK
              </li>
              <li className="  mx-2  text-stone-400 rounded  text-center py-1 my-2 ">
                CONTACT
              </li>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

export default Navbar;
