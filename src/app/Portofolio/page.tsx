"use client";

import React from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";
import Cards from "../components/cards";
import Cards2 from "../components/cards2";

function Portofolio() {
  const handleSubmit = () => {
    alert("Button clicked!");
  };

  return (
    <main className="bg-blue-200">
      <Navbar />
      <div className=" w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  bg-blue-200 py-4">
        <div className="bg-blue-200 text-orange-600 p-4 justify-start items-center">
          <h3 className="text-sm mb-2">Hi, I am </h3>
          <p className="text-gray-700 text-7xl font-bold border-b-2 border-orange-600 pb-2 leading-tight">
            Danendra Saputra
          </p>
        </div>
        <div className="flex mt-4 justify-center">
          <Image src="/Danendra1.jpg" width={215} height={215} alt="Makanan" />
        </div>
        <div className="bg-blue-200 text-white-200 p-4 flex flex-col items-center">
          <h3 className="text-xl font-bold mb-2">Praktek Kerja Danendra</h3>
          <p className="text-gray-700">
            Saya adalah siswa dari SMKN 1 Cisarua yang saat ini sedang
            melaksanakan PKL(Praktik Kerja Lapangan) di PT Saptaloka Digital
          </p>
          <div className="flex mt-4">
            <button
              className="rounded-lg bg-orange-600 text-white py-3 px-6 mr-4"
              onClick={handleSubmit}
            >
              Submit
            </button>
            <button
              className="rounded-lg bg-white py-3 px-6"
              onClick={handleSubmit}
            >
              Download CV
            </button>
          </div>
        </div>
      </div>

      <div className=" grid grid-cols-2 bg-blue-200 mb-24 ">
        <div className="flex mt-4 justify-center">
          <Image
            src="/Danendra.S.jpg"
            width={215}
            height={215}
            alt="Danendra"
          ></Image>
        </div>

        <div className="bg-blue-200 p-4 rounded-none">
          <h3 className="text-1xl font-bold mb-2 text-orange-600">About Me</h3>
          <p className="text-black text-2xl">Sedikit Info Tentang Saya</p>
          <p className="text-black text-2xl mb-4">
            Sebagai anak dari Ayah Indra dan Bunda Dian,{" "}
            <span className="text-orange-600 text font-bold">
              Saya adalah anak kedua sekaligus anak laki laki pertama
            </span>
            . Cita cita saya ingin menjadi ceo dan memiliki hotel di tiap kota
          </p>
        </div>
      </div>

      <div className=" text-orange-600 p-4 justify-start items-center">
        <h3 className="text-sm mb-2">Biodata</h3>
        <div className="flex justify-between text-gray-700 text-4xl font-bold border-b-2 border-orange-600 pb-2 leading-tight">
          Danendra Saputra
          <div className="flex items-end me-4">
            <button className="bg-amber-50 text-blue-950 border-2 border-blue-950 rounded-s-md h-9 my-2 p-2"></button>
            <button className="bg-slate-400 rounded-e-md border-2 border-blue-950 h-9 my-2 p-2"></button>
          </div>
        </div>
      </div>

      <div className="flex gap-3 justify-center w-full h-full text-white">
        <Cards className="" img={"/Danendra5.jpg"} desc={""}>
          <p>Keluarga kecil saya</p>
        </Cards>
        <Cards className="" img={"/Danendra7.jpg"} desc={""}>
          <p>Bundahara utama</p>
        </Cards>
        <Cards className="" img={"/Danendra8.jpg"} desc={""}>
          <p>Teman SMP saya</p>
        </Cards>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 bg-white mt-4">
                <div className=" col-span-2 w-full h-full text-orange-600 p-4 justify-start items-center rounded-lg font-bold">
                    <h3 className="text-sm mb-2">Keahlian</h3>
                    <div className="text-blue-950 text-2xl font-bold pb-2 leading-tight">Pengalaman terbaik untuk mendapat hidup yang terbaik</div>
                    <p className="text-black">ABCDEFGHIJKLMN<span className="text-orange-700">OPQRSTU</span>VWXYZ</p>
                </div>
                <div className="bg-gray-800 relative p-4 flex gap-2 items-center rounded-tl-lg"> 
          <div className=" absolute top-9 right-60 w-28 h-28 bg-white"><Cards2 className="" img={"/Danendra8.jpg"} desc={""}>
          <p></p>
        </Cards2>
        </div>
          <div className=" absolute top-9 right-96 w-28 h-28 bg-white">
            <Cards2 className="" img={"/Danendra9.jpg"} desc={""}>
          <p></p>
        </Cards2></div>
                </div>
            </div>
            <div className=" col-colspan justify-center bg-gray-800 p-4 flex">
              <div className="text-start font-bold ">
                <Cards2 className="" img={"/Danendra10.jpg"} desc={""} >
                  <p></p>
                </Cards2>
                <div className="text-pretty text-black">                  
                </div>
              </div>
                </div>
                < hr/>
                <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Danendra Saputra</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="https://www.instagram.com/saputradanen?igsh=MXE3ejBjZnVkYXMzaw==/in/danendra-saputra" className="hover:text-black hover:animate-bounce">Saputradanen</a>
            <a href="https://x.com/dxnr118993?t=W1nlWMqts29hjdkpXJobsg&s=08 " className="hover:text-black">X</a>
            <a href="mailto:saputradanen@gmail.com" className="hover:hover:text-black">Email</a>
          </div>
        </div>
      </footer>
              
    </main>
               
                   
            
  );
}

export default Portofolio;
