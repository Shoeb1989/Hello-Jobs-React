import React from 'react';
import BannerImage from "../../img/working.png"

const Banner = () => {
    return (
     <div className="relative my-0  bg-white ">
        <div className="flex flex-col lg:flex-row lg:items-stretch lg:min-h-[800px]">
        
            <div className="relative flex items-center justify-center w-full lg:order-2 lg:w-7/12">
                <div className="absolute bottom-0 right-0 hidden lg:block">
                    <img className="object-contain w-auto h-48" src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/3/curved-lines.png" alt="Decorative curved lines" />
                </div>
                <div className="relative px-4 pt-24 pb-16 text-center sm:px-6 md:px-24 2xl:px-32 lg:py-24 lg:text-left">
                    <h1 className="text-4xl font-bold text-black sm:text-6xl xl:text-8xl">
                        Get it done.<br />
                        Fast, Easy.
                    </h1>
                    <p className="mt-8 text-xl text-black">One Step Closer To Your Dream Job</p>
                    
                </div>
            </div>
            
                <div className="relative w-full overflow-hidden lg:order-1 h-96 lg:h-auto lg:w-5/12">
                <div className="absolute inset-0">
                    <img className="object-cover w-full h-full scale-150" src={BannerImage} alt="Working" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0">
                    <div className="p-4 sm:p-6 lg:p-8">
                        <p className="max-w-xs mt-1.5 text-xl text-white">Apply Your Favourite Job</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    );
};

export default Banner;