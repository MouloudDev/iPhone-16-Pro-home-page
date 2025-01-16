import { navList } from '../../constants/navData';
import NavChevron from '../icons/NavChevron';

function MobileNavList() {
  const chvrnCls = `
    rotate-180 opacity-0 group-hover:opacity-100 transition-opacity duration-[320ms] ease-[cubic-bezier(0.4,0,0.6,1)]
  `
  return (
    <ul className='pt-[50px] list-none laptop:hidden'>
      {navList.map((item) => (
        <li key={item}>
          <a className='mobile-nav-list group'>
            <span>{item}</span>
            <NavChevron className={chvrnCls}/>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default MobileNavList
