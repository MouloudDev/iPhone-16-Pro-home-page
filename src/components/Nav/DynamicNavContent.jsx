const DynamicNavContent = ({data}) => {
  const {primCol, secCols} = data;
  return (
    <div className='flex gap-6 mt-5'>
      <div className='mr-4'>
        <h2 className='nav-dropdown-col-heading'>{primCol.heading}</h2>
        <ul className='list-none'>
          {primCol.links.map((link) => (
            <li key={link} className='nav-dropdown-prim-col-list-item'>
              <a href={`/${link}`}>{link}</a>
            </li>
          ))}
        </ul>
      </div>
      {secCols.map(({ heading, links }) => (
        <div key={heading} className='mr-4'>
          <h2 className='nav-dropdown-col-heading'>{heading}</h2>
          <ul className='list-none'>
            {links.map((link) => (
              <li key={link} className='nav-dropdown-sec-col-list-item'>
                <a href={`/${link}`}>{link}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default DynamicNavContent
