import { useState } from 'react';
import AppleIcon from '../icons/AppleIcon';
import { navList } from '../../constants/navData';
import SearchIcon from '../icons/SearchIcon';
import BagIcon from '../icons/BagIcon';
import LaptopNavPopup from './LaptopNavPopup';

function LaptopNav() {
  const [currContent, setCurrContent] = useState(null);
  const hideContent = () => setCurrContent(null);

  // Icons shared classes
  const SharedCls = 'cursor-pointer w-[14px] h-11 fill-white opacity-80 hover:opacity-100 transition-opacity duration-150';

  return (
    <div
      className='hidden laptop:block relative z-50 h-11'
      onMouseLeave={hideContent}
    >
      <div className='absolute inset-0 z-50 flex justify-between items-center px-2 max-w-5xl mx-auto h-full'>
        <AppleIcon className={SharedCls} onMouseEnter={hideContent} />

        {navList.map((name) => (
          <a
            key={name}
            href={`/${name}`}
            className='laptop-nav-link'
            onMouseEnter={() => setCurrContent(name)}
          >
            {name}
          </a>
        ))}

        <SearchIcon
          className={SharedCls}
          onClick={() => setCurrContent(currContent === 'search' ? null : 'search')}
          onMouseEnter={() => {
            if (currContent !== 'search') hideContent();
          }}
        />
        <BagIcon
          className={SharedCls}
          onClick={() => setCurrContent(currContent === 'cart' ? null : 'cart')}
          onMouseEnter={() => {
            if (currContent !== 'cart') hideContent();
          }}
        />
      </div>

      <LaptopNavPopup
        currContent={currContent}
      />
    </div>
  );
}

export default LaptopNav;
