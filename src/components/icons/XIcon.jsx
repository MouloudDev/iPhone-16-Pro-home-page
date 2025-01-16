const XIcon = (props) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className + " cursor-pointer opacity-50 hover:opacity-70 transition-opacity duration-300"}
      onClick={props.onClick}
    >
      <path
        d="M2 2L16 16M16 2L2 16"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default XIcon
