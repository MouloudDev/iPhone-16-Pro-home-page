import { useEffect, useRef } from 'react';
import { navSearchLinks } from '../../constants/navData';
import SearchIcon from '../icons/SearchIcon';
import ToRightArrowIcon from '../icons/ToRightArrowIcon';

function Search({parentComp}) {
  const srchInputRef = useRef(null);

  useEffect(() => {
    if (!srchInputRef.current) return;

    const focusInput = () => srchInputRef.current.focus();

    // Delay giving focus to the input element when Search is rendered
    // inside of <LaptopNav /> until <LaptopNavPopup /> animation ends.
    // its animation ends after .35 seconds. (see <LaptopNavPopup />)
    let timeout;
    if (parentComp === 'LaptopNav') {
      timeout = setTimeout(focusInput, 350)
    } else focusInput();

    return () => clearTimeout(timeout)
  }, [])

  return (
    <div className='pt-14 px-12'>
      <div className='w-full flex-center px-3'>
        <SearchIcon className='w-[25px] h-[25px] fill-[#86868b] opacity-50 mr-2'/>
        <input ref={srchInputRef} className='search-input' placeholder='Search'/>
      </div>
      <div className='mt-12'>
        <h2 className='mobile-nav-heading px-3'>Quick Links</h2>
        <ul>
          {navSearchLinks.map(link =>
            <li key={link} className='nav-search-list-item group'>
              <ToRightArrowIcon className='fill-[#868688] group-hover:fill-[#e8e8ed]'/>
              {link}
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}

export default Search;
