import React from 'react'
import Dash from '../assests/Iconly/Bulk/Category.png'
import Message from '../assests/Iconly/Bulk/Message.png'
import Report from '../assests/Iconly/Bulk/Paper.png'
import Noti from '../assests/Iconly/Bulk/Notification.png'
import Wallet from '../assests/Iconly/Bulk/Wallet.png'
import Bookmark from '../assests/Iconly/Bulk/Bookmark.png'
import Video from '../assests/Iconly/Bulk/Video.png'
import Setting from '../assests/Iconly/Bulk/Setting.png'
import About from '../assests/Iconly/Bulk/About.png'
import Highlight from '../assests/Iconly/Bulk/Highlight.png'
import Sun from '../assests/Iconly/Bulk/Sun.png'
import Line from '../assests/Iconly/Bulk/Line.png'

const Sidebar = () => {
  return (
    <div className='w-[290px] h-[1321px] bg-background-blue absolute left-[0px] top-[0px] border-solid border-r-[2px] border-gray-800'>
        <div><img src="https://1000logos.net/wp-content/uploads/2021/11/logo-Telenet.png" alt="" className='w-[127px] h-[64px] absolute left-[81px] top-[40px]' /></div> {/*Logo*/}
        
        {/*Section headers*/}
        <h1 className='absolute font-[Inter] text-[#55597D] text-[10px] left-[28px] top-[152px]'>MAIN MENU</h1>
        <h1 className='absolute font-[Inter] text-[#55597D] text-[10px] left-[28px] top-[452px]'>WORKS</h1>
        <h1 className='absolute font-[Inter] text-[#55597D] text-[10px] left-[28px] top-[619px]'>OPTIONS</h1>

        {/*Main menu*/}
        <ul className='font-[Inter] text-[#ADB3CC] text-[14px] font-medium space-y-[24px] top-[180px] left-[60px] absolute '>
          <li className='cursor-pointer text-[#42BBFF]'>Dashboard</li>
          <li className='cursor-pointer hover:underline'>Messages</li>
          <li className='cursor-pointer hover:underline'>Reports</li>
          <li className='cursor-pointer hover:underline'>Notifications</li>
          <li className='cursor-pointer hover:underline'>Invoices</li>
        </ul>

        {/*Works*/}    
        <ul className='font-[Inter] text-[#ADB3CC] text-[14px] font-medium absolute top-[480.5px] left-[60px] space-y-[24px]'>
          <li className='cursor-pointer hover:underline'>Bookmarks</li>
          <li className='cursor-pointer hover:underline'>Conferences</li>
        </ul>
           
        {/*Options*/}   
        <ul className='font-[Inter] text-[#ADB3CC] text-[14px] font-medium absolute top-[647px] left-[60px] space-y-[24px]'>
            <li className='cursor-pointer hover:underline'>Settings</li>
            <li className='cursor-pointer hover:underline'>About</li>
        </ul>
            
        {/*Main menu icons*/}    
        <ul className='absolute top-[180px] left-[28px] space-y-[25.5px]'>
          <img src={Dash} alt="" className='w-[20px] h-[20px] cursor-pointer'/>
          <img src={Message} alt="" className='w-[20px] h-[20px] cursor-pointer'/>
          <img src={Report} alt="" className='w-[20px] h-[20px] cursor-pointer'/>
          <img src={Noti} alt="" className='w-[20px] h-[20px] cursor-pointer'/>
          <img src={Wallet} alt="" className='w-[20px] h-[20px] cursor-pointer'/>
        </ul>
           
        {/*Works icons*/}   
        <ul className='absolute top-[479px] left-[28px] space-y-[25.5px]'>
          <img src={Bookmark} alt="" className='w-[20px] h-[20px] cursor-pointer'/>
          <img src={Video} alt="" className='w-[20px] h-[20px] cursor-pointer'/>
        </ul>
            
        {/*Options icons*/}    
        <ul className='absolute top-[647px] left-[28px] space-y-[25.5px]'>
          <img src={Setting} alt="" className='w-[20px] h-[20px] cursor-pointer'/>
          <img src={About} alt="" className='w-[20px] h-[20px] cursor-pointer'/>
        </ul>

        {/*Messages notification*/}
        <img src={Highlight} alt="" className='absolute w-[6px] h-[16px] left-[-3px] top-[183px] rounded'/>
        <div className='absolute top-[224px] left-[216px] w-[48px] h-[20px] bg-[#0C3247] rounded-full '></div>
        <p className='font-[Inter] text-[#42BBFF] text-[13px] absolute right-[29.5px] top-[224.5px] font-medium'>3 new</p>
        
        {/*Invoices notification*/}
        <div className='absolute top-[358px] left-[228px] w-[35px] h-[20px] bg-[#BF3931] rounded-full'></div>
        <p className='font-[Inter] text-[#FFFFFF] text-[13px] absolute right-[29.5px] top-[358px] font-medium'>10+</p>
        
        {/*Light mode*/}
        <img src={Sun} alt="" className='absolute top-[1273px] left-[28px] w-[20px]'/>
        <p className='font-[Inter] text-[#55597D] text-[10px] absolute left-[60px] top-[1276px] font-medium'>LIGHT MODE</p>

        {/*Divider lines*/}
        <img src={Line} alt="" className='w-[225px] left-[28px] top-[416px] absolute'/>
        <img src={Line} alt="" className='w-[225px] left-[28px] top-[583px] absolute'/>

    </div>
  )
}

export default Sidebar