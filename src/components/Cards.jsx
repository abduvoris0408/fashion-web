import { FaArrowRight, FaEye, FaRegStar, FaStarHalfAlt } from 'react-icons/fa';
import { Cardavatar } from '../../public/logos';
import { Image1, Image2, Image3, Image4 } from '../assets/images';

const Cards = () => {
  return (
    <div className='bg-gray-50 mt-5'>
      <div className='container w-11/12 md:w-10/12 mx-auto'>
        <div className='flex flex-col gap-8'>
          {[Image1, Image2, Image3, Image4].map((image, index) => (
            <div
              key={index}
              className='bg-white rounded-md p-5 flex flex-col md:flex-row gap-4'
            >
              <img
                src={image}
                alt={`img${index + 1}`}
                className='w-full md:w-1/3 h-auto object-cover'
              />
              <div className='p-5 flex flex-col justify-between'>
                <h1 className='text-[22px] md:text-[26px] font-bold font-[--Roboto Condensed]'>
                  The best fashion influencers to follow for sartorial inspiration
                </h1>
                <p className='text-[16px] md:text-[18px] text-gray-500 font-[--Roboto Condensed]'>
                  From our favourite UK influencers to the best missives from Milan and the coolest New Yorkers,
                  read on some of the best fashion blogs out there, and for even more inspiration, do head to
                  our separate black fashion influencer round-up.
                </p>
                <p className='text-[16px] md:text-[18px] text-gray-500 font-[--Roboto Condensed]'>
                  Fancy some shopping deals? Check out these amazing sales: Zara Black Friday, ASOS Black Friday,
                  Missoma Black Friday and Gucci Black Friday...
                </p>
                <div className='flex flex-col md:flex-row items-start md:items-center justify-between gap-4'>
                  <div className='flex gap-2 items-center'>
                    <img src={Cardavatar} alt='author' className='w-10 h-10' />
                    <div>
                      <h2 className='font-[--Roboto Condensed] text-gray-500'>Jane Cooper</h2>
                      <p className='font-[--Roboto Condensed] text-gray-500'>Jan 10, 2022</p>
                    </div>
                  </div>
                  <div className='flex items-center gap-1'>
                    <FaEye className='text-gray-600' />
                    <p className='font-bold text-gray-600'>1.5 M</p>
                  </div>
                  <ul className='flex items-center gap-2'>
                    <FaStarHalfAlt className='text-gray-600 text-[18px]' />
                    <FaRegStar className='text-gray-600 text-[18px]' />
                    <FaRegStar className='text-gray-600 text-[18px]' />
                    <FaRegStar className='text-gray-600 text-[18px]' />
                    <FaRegStar className='text-gray-600 text-[18px]' />
                  </ul>
                  <FaArrowRight className='text-blue-500 text-[22px] hover:animate-bounce' />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
