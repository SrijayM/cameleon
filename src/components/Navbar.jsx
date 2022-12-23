import React from 'react'
import Search from '../assests/Iconly/Light/Search.png'
import Noti from '../assests/Iconly/Bulk/Notification.png'
import Arrow from '../assests/Iconly/Bold/Arrow - Down 2.png'

const Navbar = () => {
  return (
    <div className='w-[1094px] h-[43px] bg-background-blue absolute left-[318px] top-[20px]'>
        <div className=' max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full'>
            {/*Search Bar*/}
            <form className='w-[373px]'>
                <div>
                    <input type="search" id="default-search" class="absolute bg-[#1D2032] w-[373px] h-[39px] left-[0px] top-[0px] px-[12px] py-[11px] rounded-lg font-[Inter] font-normal placeholder-[#424A70] text-[14px]" placeholder="Search" required></input>
                    <button type="submit" class="absolute flex-none grow-0 left-[337px] top-[11px]">
                        <img src={Search} alt="searchimg" className='w-[16px] h-[16px]'/>
                    </button>
                </div>
            </form>
            
            {/*Pages*/}
            <div className='hidden md:flex'>
                <ul className='flex flex-none  absolute left-[414px] gap-[40px] text-header-text top-[11px] text-[14px] font-[Inter]'>
                    <li className='cursor-pointer'>Analytics</li>
                    <li className='text-[#55597D] cursor-pointer hover:text-[#ADB3CC]'>Earnings</li>
                    <li className='text-[#55597D] cursor-pointer hover:text-[#ADB3CC]'>Ads Experiments</li>
                </ul>

                {/*Notifications + profile*/}
                <img src={Noti} alt="" className='w-[20px] h-[20px] absolute left-[879px] top-[12px]'/>
                <img src="https://i.pinimg.com/originals/14/9a/30/149a304c6b7766e5a52b0bd324020dba.jpg" alt="" className=' absolute w-[40px] h-[40px] rounded-[50%] left-[918px] top-[2px] cursor-pointer'/>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Eo_circle_light-green_blank.svg/2048px-Eo_circle_light-green_blank.svg.png" alt="" className='w-[8px] h-[8px] absolute left-[950px] top-[31px]' />
                <p className='absolute font-[Inter] text-[#55597D] font-normal text-[10px] top-[3px] left-[974px]'>WELCOME</p>
                <div className='cursor-pointer'>
                    <p  className='absolute top-[19px] left-[973px] text-[#ADB3CC] font-[Inter] font-semibold hover:underline'>Srijay Mundlur</p>
                    <button>
                        <img src={Arrow} alt="" className='w-[16px] absolute left-[1090px] top-[24px]'/>
                    </button>            
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Navbar