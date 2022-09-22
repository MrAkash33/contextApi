import React from "react"
import Typed from 'react-typed';
const Hero = () =>{
    return(
        <div className="text-white">
                <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
                    <p className="text-[#00df9a]">Growing WIth Data Analytics</p>
                    <h1 className="md:text-7xl sm:text-4xl font-bold mdLpy-6">Grow with data</h1>
                    <div>
                        <p className="md:text-5xl sm:text-4xl text-xl font-bold">Fast,flexible financing for <Typed
                            strings={['BTB','BTC','SASS']}
                            typeSpeed={120}
                            backSpeed={140}
                            loop
                        /></p>
                    </div>
                    <p className="md:text-2xl text-xl md:font-bold  md:text-red-900">Monitor your data Analytics to increase reveneue for the help of coding.</p>
                    <button className='bg-[#00df9a] w-[200px] rounded-md text-black justify-center mx-auto p-2 mt-4'>Get Started</button>
                </div>
        </div>
    )
}
export default Hero