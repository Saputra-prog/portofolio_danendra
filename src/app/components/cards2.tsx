import React from 'react';
import Image from 'next/image';

interface CardsProps {
    img: string;
    desc: string;
    children: React.ReactNode;
    className?: string; // Tambahkan optional className prop
}

const Cards2: React.FC<CardsProps> = ({ img, desc, children, className }) => {
    return (
        <div className={` flex justify-center col-colspan items-center shadow-lg p-4 object-cover w-full h-full bg-white${className}`}>
            <Image src={img} width={215} height={215} alt='Image' className='w-auto h-20 bg-cover rounded-full' />
            <p>{desc}</p>
            {children}
        </div>
    );
};

export default Cards2;
