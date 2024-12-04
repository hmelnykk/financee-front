import React from "react";

interface ButtonProps {
    name: string;
    id?: string
    href?: string;
    onClick?: any; // find the type
    className?: string;
}

const Button = ({ name, id, href, onClick, className }: ButtonProps) => {
    return <button id={id}
        className={`py-2 px-4 rounded-default bg-black text-white text-sm duration-200 hover:bg-slate-800 ${className}`}
        onClick={onClick}
    >
        {name}
    </button>
}

export default Button;
