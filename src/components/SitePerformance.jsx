import React from 'react'
import Calendar from '../assests/Iconly/Bulk/Calendar.png'
import People from '../assests/Iconly/Bulk/People.png'
import Swap from '../assests/Iconly/Bulk/Swap.png'
import SwapGreen from '../assests/Iconly/Bulk/SwapGreen.png'
import Show from '../assests/Iconly/Light-outline/Show.png'
import Chart from '../assests/Iconly/Light-outline/Chart.png'
import SwapRed from '../assests/Iconly/Bulk/SwapRed.png'

const SitePerformance = () => {
  return (
    <div className='w-[1081px] h-[271px] bg-background-blue absolute left-[318px] top-[191px]'>
        {/*Headings*/}
        <p className='absolute left-[0px] top-[0px] not-italic leading-[24px] font-[Inter] text-[20px] tracking-[-0.02em] text-[#ADB3CC] font-semibold'>Site Performance </p>
        <p className='absolute left-[0px] top-[29px] not-italic leading-[17px] font-[Inter] text-[14px] tracking-[-0.02em] text-[#585F80] font-normal'>Today vs 7 days ago</p>
        <p className='absolute left-[857px] top-[30px] not-italic leading-[12px] font-[Inter] text-[10px] tracking-[-0.02em] text-[#55597D] font-normal'>JUNE 03, 22 TO JULY 02,22</p>
        <img src={Calendar} alt="" className='absolute top-[25px] left-[831px] w-[20px] h-[20px] cursor-pointer'/>

        {/*Vistors*/}
        <div>
          <div className='absolute top-[74px] left-[0px] w-[318px] h-[197px] bg-[#0329E8] rounded-[12px]'></div>
          <p className='absolute left-[24px] top-[98px] not-italic leading-[24px] font-[Inter] text-[20px] tracking-[-0.02em] text-[#DDEFFA] font-normal'>Visitors</p>
          <img src={People} alt="" className='absolute top-[98px] left-[266px] w-[28px]'/>
          <img src={Swap} alt="" className='absolute top-[223px] left-[270px] w-[24px]'/>
          <p className='absolute left-[24px] top-[140px] not-italic leading-[70px] font-[Inter] text-[58px] tracking-[-0.02em] text-[#DDEFFA] font-semibold'>92,680</p>
          <p className='absolute left-[24px] top-[228px] not-italic leading-[19px] font-[Inter] text-[16px] tracking-[-0.02em] text-[#DDEFFA] font-normal'>+3,840 (26.80%)</p>
        </div>

        {/*Page Views*/}
        <div>
          <div className='absolute top-[74px] left-[338px] w-[318px] h-[197px] bg-[#1A1E30] rounded-[12px]'></div>
          <p className='absolute left-[362px] top-[98px] not-italic leading-[24px] font-[Inter] text-[20px] tracking-[-0.02em] text-[#ADB3CC] font-normal'>Page views</p>
          <p className='absolute left-[362px] top-[140px] not-italic leading-[70px] font-[Inter] text-[58px] tracking-[-0.02em] text-[#17B1EA] font-semibold'>580.5K</p>
          <p className='absolute left-[362px] top-[228px] not-italic leading-[19px] font-[Inter] text-[16px] tracking-[-0.02em] text-[#00DE73] font-normal'>+210K (16.20%)</p>
          <img src={Show} alt="" className='absolute top-[98px] left-[604px] w-[28px]'/>
          <img src={SwapGreen} alt="" className='absolute top-[223px] left-[608px] w-[24px]'/>
        </div>

        {/*Bounce rates*/}
        <div>
          <div className='absolute top-[74px] left-[676px] w-[318px] h-[197px] bg-[#1A1E30] rounded-[12px]'></div>
          <p className='absolute left-[700px] top-[98px] not-italic leading-[24px] font-[Inter] text-[20px] tracking-[-0.02em] text-[#ADB3CC] font-normal'>Bounce rates</p>
          <p className='absolute left-[700px] top-[140px] not-italic leading-[70px] font-[Inter] text-[58px] tracking-[-0.02em] text-[#17B1EA] font-semibold'>15.43%</p>
          <p className='absolute left-[700px] top-[228px] not-italic leading-[19px] font-[Inter] text-[16px] tracking-[-0.02em] text-[#F21010] font-normal'>-0.74 (0.74%)</p>
          <img src={Chart} alt="" className='absolute top-[98px] left-[942px] w-[28px]'/>
          <img src={SwapRed} alt="" className='absolute top-[223px] left-[946px] w-[24px]'/>
        </div>

    </div>
  )
}

export default SitePerformance