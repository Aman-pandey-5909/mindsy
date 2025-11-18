import React from "react";
import mainimg from "../assets/main-img-home.jpg";
import { BiSolidRightArrowAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
  return (
    <main>
      <div className="h-[95vh] relative after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-black/40">
        <img src={mainimg} alt="main image" className="object-cover object-bottom w-full h-full" />
        <div className="absolute z-10 bottom-0 left-0 -translate-y-1/2 translate-x-[10%] text-white">
            <h1 className="text-3xl mb-7 font-bold">Clarity for your mind. Support for your journey.</h1>
            <div>
                <p className="my-2 text-xl font-semibold">Your mental well-being starts with awareness.</p>
                <button onClick={() => navigate("/assessment")} className="flex bg-accent-1 px-5 py-4 shadow-md justify-center gap-1 items-center text-text-black rounded-xl">Start Assessment <BiSolidRightArrowAlt className="text-2xl" /></button>
            </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
