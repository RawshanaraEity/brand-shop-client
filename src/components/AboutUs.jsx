

const AboutUs = () => {

   

    return (
        <div className="text-center " >
            <h1 className="text-5xl text-black bg-red-100  md:text-6xl font-bold p-10">About Us</h1>
           <div className="grid grid-cols-1 md:grid-cols-2 p-8 md:p-10">
           <div>
              <img className="h-[600px] w-full rounded-lg" src="https://i.ibb.co/3FzRxMH/about-brand.jpg" alt="" />
            </div>
            <div>
            <div className='flex items-center text-center h-full'>
               <div className=" py-8 md:py-14">
               <h2 className='w-full md:w-2/3 mx-auto text-4xl font-semibold'>Welcome!!To
               <span className="text-red-600 font-bold"> BiteOfTheBrands</span>
               </h2>
                <p className='my-10 p-5 mx-auto text-xl font-medium'>At BiteOfTheBrands we believe that every meal and every sip should be a memorable experience. We invite you to embark on this culinary journey with us, exploring flavors from around the world, and elevating your dining and drinking rituals to new heights.</p>
               </div>
            </div>
            </div>
           </div>
        </div>
    );
};

export default AboutUs;