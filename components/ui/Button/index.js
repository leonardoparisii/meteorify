import React from 'react';

const Button = (props) => {
  let buttonClass = props.primary ? 'bg-slate-300 text-gray-950 font-semibold' : 'bg-black';
  return (
    <button className={`rounded-md p-4 w-fit ${buttonClass}`}>
      {props.children}
    </button>
  );
};

export default Button;