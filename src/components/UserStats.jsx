import React from 'react'
import Calendar from '../assests/Iconly/Bulk/Calendar.png'
import AddUser from '../assests/Iconly/Light/AddUser.png'
import Activity from '../assests/Iconly/Light/Activity.png'
import Graph from '../assests/Iconly/Bulk/Graph.png'

const UserStats = () => {
  return (
    <div className='w-[1081px] h-[272px] bg-background-blue absolute left-[318px] top-[526px]'>
        {/*Headings*/}
        <p className='absolute left-[0px] top-[0px] not-italic leading-[24px] font-[Inter] text-[20px] tracking-[-0.02em] text-[#ADB3CC] font-semibold'>Users Statistics</p>
        <p className='absolute left-[0px] top-[29px] not-italic leading-[17px] font-[Inter] text-[14px] tracking-[-0.02em] text-[#585F80] font-normal'>Today's statistics</p>
        <p className='absolute left-[857px] top-[30px] not-italic leading-[12px] font-[Inter] text-[10px] tracking-[-0.02em] text-[#55597D] font-normal'>JUNE 03, 22 TO JULY 02,22</p>
        <img src={Calendar} alt="" className='absolute top-[25px] left-[831px] w-[20px] h-[20px] cursor-pointer'/>
    
        {/*Unique Visitors*/}
        <div>
          <div className='absolute top-[74px] left-[0px] w-[318px] h-[197px] bg-[#1A1E30] rounded-[12px] overflow-hidden'> 
          <img src={Graph} alt="" className='w-[318px] object-top top-[52px] absolute '/> {/*Graph*/}
          </div>
          <p className='absolute left-[24px] top-[98px] not-italic leading-[24px] font-[Inter] text-[20px] tracking-[-0.02em] text-[#ADB3CC] font-normal'>Unique visitors</p>
          <div className='absolute top-[156px] left-[122px] w-[74px] h-[47px] backdrop-blur-[3.5px] rounded-[8px] overflow-hidden border-[1px] border-gray-400'> {/*Blurred box on graph*/}
            <p className='absolute left-[15px] top-[8px] not-italic leading-[17px] font-[Inter] text-[14px] tracking-[-0.02em] text-[#FFFFFF] font-medium'>84,150</p>
            <p className='absolute left-[22px] top-[27px] not-italic leading-[12px] font-[Inter] text-[10px] tracking-[-0.02em] text-[#FFFFFF] font-medium'>+4.5%</p>
          </div>
        </div>

        {/*New Users*/}
        <div>
        <div className='absolute top-[74px] left-[338px] w-[318px] h-[197px] bg-[#1A1E30] rounded-[12px]'></div>
        <p className='absolute left-[362px] top-[98px] not-italic leading-[24px] font-[Inter] text-[20px] tracking-[-0.02em] text-[#ADB3CC] font-normal'>New users</p>
        <p className='absolute left-[362px] top-[140px] not-italic leading-[70px] font-[Inter] text-[58px] tracking-[-0.02em] text-[#ADB3CC] font-semibold'>17,805</p>
        <p className='absolute left-[362px] top-[228px] not-italic leading-[19px] font-[Inter] text-[16px] tracking-[-0.02em] text-[#00DE73] font-normal'>+1,500 (4.17%)</p>
        <img src={AddUser} alt="" className='absolute top-[98px] left-[604px] w-[28px]'/>
        </div>

        {/*Online Users*/}
        <div>
        <div className='absolute top-[74px] left-[676px] w-[318px] h-[197px] bg-[#1A1E30] rounded-[12px]'></div>
        <p className='absolute left-[700px] top-[98px] not-italic leading-[24px] font-[Inter] text-[20px] tracking-[-0.02em] text-[#ADB3CC] font-normal'>Online users</p>
        <p className='absolute left-[700px] top-[140px] not-italic leading-[70px] font-[Inter] text-[58px] tracking-[-0.02em] text-[#ADB3CC] font-semibold'>1,846</p>
        <p className='absolute left-[700px] top-[228px] not-italic leading-[19px] font-[Inter] text-[16px] tracking-[-0.02em] text-[#00DE73] font-normal'>+530 (8.38%)</p>
        <img src={Activity} alt="" className='absolute top-[98px] left-[942px] w-[28px]'/>
        </div>
        
    </div>
  )
}

export default UserStats