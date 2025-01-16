import { profileLinks } from '../../constants/navData';

function Cart() {
  return (
    <div className='pt-14 px-12'>
      <div>
        <h2 className='cart-heading'>Your Bag is empty.</h2>
        <div className='mobile-nav-heading'>
          <a href='#' className='text-[#2997ff] underline'>Sign in</a> to see if you have any saved items
        </div>
      </div>
      <h2 className='mobile-nav-heading mt-14'>My Profile</h2>
      <ul>
        {profileLinks.map(({name, Icon}) => (
          <li key={name} className='nav-profile-list-item group'>
            <Icon className='w-4 h-6 bg-transparent' pathClassName='fill-[#6E6E73] group-hover:fill-[#f5f5f7]'/>
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
