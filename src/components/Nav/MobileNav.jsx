import { useState } from 'react';
import AppleIcon from '../icons/AppleIcon';
import SearchIcon from '../icons/SearchIcon';
import BagIcon from '../icons/BagIcon';
import BurgerMenuIcon from '../icons/BurgerMenuIcon';
import MobileNavPopup from './MobileNavPopup';

function MobileNav() {
  const [currContent, setCurrContent] = useState(null);

  const showSearch = () => setCurrContent('search');
  const showCart = () => setCurrContent('cart');
  const showNavList = () => setCurrContent('navList');

  // Icons shared classes
  const SharedCls = 'cursor-pointer fill-white opacity-70 hover:opacity-100 transition-opacity duration-200';

  return (
    <div className='flex justify-between items-center laptop:hidden px-3'>
      <AppleIcon className={SharedCls}/>

      <div className='flex-center gap-8'>
        <SearchIcon className={SharedCls} onClick={showSearch}/>
        <BagIcon className={SharedCls} onClick={showCart}/>
        <BurgerMenuIcon className={SharedCls} onClick={showNavList}/>
      </div>

      <MobileNavPopup
        currContent={currContent}
        setCurrContent={setCurrContent}
      />
    </div>
  )
}

export default MobileNav
