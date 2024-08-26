import { Menu} from 'lucide-react';
import React, { useState } from 'react';
import { MobileViewSidebar } from './MobileViewSidebar';

import { Header } from './Header';
import { Dashboard } from './Dashboard';
import { DesktopSidebar } from './DesktopSidebar';

export const Home = () => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  const toggleSideMenu = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
  };



  return (
    <>
      <div className={`flex h-screen bg-white ${isSideMenuOpen ? 'overflow-hidden' : ''}`}>
        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden p-4 h-fit bg-[#9B76D6]">
          <button
            className="text-white focus:outline-none"
            onClick={toggleSideMenu}
          >
            <Menu className='text-white'/>
          </button>
        </div>

        {/* Desktop sidebar */}
        <DesktopSidebar/>

      {/* main section */}
        <div className='flex flex-col'>

          {/* header section */}
          <Header/>

          {/* dashboard section */}
          <Dashboard/>

        </div>
        
        {/* mobile sidebar */}
        <MobileViewSidebar toggleSideMenu={toggleSideMenu} isSideMenuOpen={isSideMenuOpen}/>
        
      </div>
      
    </>
  );
};
