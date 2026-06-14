import React from "react";
import { Link } from "react-router-dom";

const Navbar = ()=>{
    return (
        <div className="flex justify-between bg-black h-[70px] items-center p-3 pl-9 pr-9 rounded-xl mb-5  ">

            <div className="font-bold text-3xl text-mist-500">
                <Link to="/">Film Gallary</Link>
            </div>

            <div className="font-bold text-2xl text-mist-500 flex gap-1">
                <Link className=" bg-cyan-100 hover:bg-cyan-400 px-7 py-2 text-black hover:text-white  " to="/">Home</Link>
                <Link className="bg-fuchsia-200 hover:bg-fuchsia-400 px-7 py-2   text-black hover:text-white  " to="/favourates">Favourates</Link>
            </div>


        </div>
    )
}

export default Navbar