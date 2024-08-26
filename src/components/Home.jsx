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
        <div className="md:hidden mt-7">
          <button
            className="text-white focus:outline-none"
            onClick={toggleSideMenu}
          >
            <Menu className='text-black'/>
          </button>
        </div>

        {/* Desktop sidebar */}
        <DesktopSidebar/>

      {/* main section */}
        <div className='flex flex-col w-full h-fit'>

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
