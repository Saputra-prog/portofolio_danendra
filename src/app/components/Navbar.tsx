import React from 'react'

function Navbar() {
  return (
    <div>
       <nav className="bg-slate-900 p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <p className="text-white text-sm font-bold">Portofolio Danendra</p>
                    <div className="flex space-x-4">
                        <a href="#home" className="text-white hover:text-orange-500 mx-2">Home</a>
                        <a href="#about" className="text-white hover:text-orange-500 mx-2">About</a>
                        <a href="#projects" className="text-white hover:text-orange-500 mx-2">Projects</a>
                        <a href="#service" className="text-white hover:text-orange-500 mx-2">Service</a>
                    </div>
                </div>
            </nav>       
    </div>
  )
}

export default Navbar;
