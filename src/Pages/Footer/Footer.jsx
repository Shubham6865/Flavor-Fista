import React from 'react'

const Footer = () => {
    return (
        <div className='bg-black text-white flex flex-wrap '>

            <div className="w-full sm:w-1/2  lg:w-1/4 ">
                <h1 className="text-4xl font-bold px-1">Flavor Fista</h1>
                <p className="my-2 px-2 hover:font-bold cursor-pointer">© 2024 Shubham Parade</p>
            </div>
            <div className="w-full sm:w-1/2  lg:w-1/4  ">
                <h1 className="text-2xl font-bold px-1">Company</h1>
                <p className="my-2 px-2 hover:font-bold cursor-pointer">About</p>
                <p className="my-2 px-2 hover:font-bold cursor-pointer">Careers</p>
                <p className="my-2 px-2 hover:font-bold cursor-pointer">Team</p>


            </div>
            <div className="w-full sm:w-1/2  lg:w-1/4  ">
                <h1 className="text-2xl font-bold px-1">Contact us</h1>
                <p className="my-2 px-2 hover:font-bold cursor-pointer">Help & Support</p>
                <p className="my-2 px-2 hover:font-bold cursor-pointer">Partner with us</p>

                <h1 className="text-2xl font-bold px-1">Legal</h1>
                <p className="my-2 px-2 hover:font-bold cursor-pointer">Terms & Conditions</p>
                <p className="my-2 px-2 hover:font-bold cursor-pointer">Cookie Policy</p>
                <p className="my-2 px-2 hover:font-bold cursor-pointer">Privacy Policy</p>

            </div>
            <div className="w-full  sm:w-1/2  lg:w-1/4 ">
                <h1 className="text-2xl font-bold px-1">Service Location</h1>
                <p className="my-2 px-2 hover:font-bold cursor-pointer">Pune</p>
                <p className="my-2 px-2 hover:font-bold cursor-pointer">Mumbai</p>
                <p className="my-2 px-2 hover:font-bold cursor-pointer">Hyderabad</p>
                <p className="my-2 px-2 hover:font-bold cursor-pointer">Gurgaon</p>
                <p className="my-2 px-2 hover:font-bold cursor-pointer">Bangalore</p>

            </div>

        </div>
    )
}

export default Footer
