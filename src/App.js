import './App.css';
import Navbar from './components/Navbar';
import React from 'react';
import Sidebar from './components/Sidebar';
import SitePerformance from './components/SitePerformance';
import UserStats from './components/UserStats';
import TopRefer from './components/TopRefer';
import ArrowRight from './assests/Iconly/Light-outline/ArrowRight.png'


function App() {
  return (
    <body className='bg-background-blue min-h-screen h-[1321px]'>
      <div>
        <Navbar />
        <Sidebar />
        <SitePerformance />
        <UserStats />
        <TopRefer />

        <h1 className='absolute left-[318px] top-[103px] not-italic leading-[39px] font-[Inter] text-[32px] tracking-[-0.02em] text-[#ADB3CC] font-semibold'>Dashboard</h1>

        <p className='absolute left-[1336px] top-[355px] not-italic leading-[17px] font-[Inter] text-[14px] tracking-[-0.02em] text-[#42BBFF] font-normal cursor-pointer hover:underline'>View all</p>
        <img src={ArrowRight} alt="" className='absolute top-[357.5px] left-[1387px] w-[12px] cursor-pointer'/>

        <p className='absolute left-[1336px] top-[691px] not-italic leading-[17px] font-[Inter] text-[14px] tracking-[-0.02em] text-[#42BBFF] font-normal cursor-pointer hover:underline'>View all</p>
        <img src={ArrowRight} alt="" className='absolute top-[693.5px] left-[1387px] w-[12px] cursor-pointer'/>

      </div>
    </body>
  );
}

export default App;
