import React from 'react';
import Image from 'next/image';

interface CardsProps {
    img: string;
    desc: string;
    children: React.ReactNode;
    className?: string; // Tambahkan optional className prop
}

const Cards: React.FC<CardsProps> = ({ img, desc, children, className }) => {
    return (
        <div className={`bg-gray-800 flex justify-center flex-col items-center shadow-lg p-4 object-cover w-full h-full${className}`}>
            <Image src={img} width={215} height={215} alt='Image' className='w-auto h-56 bg-cover rounded-lg' />
            <p>{desc}</p>
            {children}
        </div>
    );
};

export default Cards;
