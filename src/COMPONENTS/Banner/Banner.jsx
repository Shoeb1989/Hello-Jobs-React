import React from 'react';

const Banner = () => {
    return (
        <div className="relative">
            <header className="absolute inset-x-0 top-0 z-10 w-full">
                <div className="px-4 mx-auto sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 lg:h-20">
                        <div className="flex-shrink-0">
                    
                        </div>

                    </div>
                </div>
            </header>

            <section className="overflow-hidden">
                <div className="flex flex-col lg:flex-row lg:items-stretch lg:min-h-[800px]">
                    <div className="relative flex items-center justify-center w-full lg:order-2 lg:w-7/12">
                        <div className="absolute bottom-0 right-0 hidden lg:block">
                            <img className="object-contain w-auto h-48" src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/3/curved-lines.png" alt="" />
                        </div>

                        <div className="relative px-4 pt-24 pb-16 text-center sm:px-6 md:px-24 2xl:px-32 lg:py-24 lg:text-left">
                            <h1 className="text-4xl font-bold text-black sm:text-6xl xl:text-8xl">
                                Get it done.<br />
                                Fast, Easy.
                            </h1>
                            <p className="mt-8 text-xl text-black">One Step
                                Closer To Your
                                Dream Job</p>

                            <form action="#" method="POST" className="max-w-xl mx-auto mt-8 bg-white lg:mx-0 sm:bg-transparent lg:mt-12 rounded-xl">
                                <div className="p-4 sm:p-2 sm:bg-white sm:border-2 sm:border-transparent sm:rounded-full sm:focus-within:border-orange-500 sm:focus-within:ring-1 sm:focus-within:ring-orange-500">
                                    <div className="flex flex-col items-start sm:flex-row">
                                        <div className="flex-1 w-full min-w-0">
                                            
                                        </div>

                                        
                                    </div>
                                </div>
                            </form>
                    
                        </div>

                        
                    </div>

                    <div className="relative w-full overflow-hidden lg:order-1 h-96 lg:h-auto lg:w-5/12">
                        <div className="absolute inset-0">
                            <img className="object-cover w-full h-full scale-150" src="/src/img/working-removebg-preview.png" alt="" />
                        </div>

                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

                        <div className="absolute bottom-0 left-0">
                            <div className="p-4 sm:p-6 lg:p-8">
                                <div className="flex items-center">



                                </div>
                                <p className="max-w-xs mt-1.5 text-xl text-white">Apply Your Favourite job</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Banner;