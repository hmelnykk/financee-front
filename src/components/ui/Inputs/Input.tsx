'use client'

interface InputProps {
    name: string;
    onChange?: (value: string) => void;
    className?: string;
    type: "text" | "number" | "email" | "password";
}

const Input = ({ name, onChange, className, type = 'text' }: InputProps) => {
    const changeInputHandler = (e: React.FormEvent<HTMLInputElement>) => {
        if (onChange) onChange(e.currentTarget.value);
    }

    return <input
        id={name.toLowerCase().replace(' ', '-')}
        type={type}
        onChange={changeInputHandler}
        placeholder={name}
        className={`block w-full flex rounded-default shadow-md placeholder:text-sm shadow-slate-100 duration-300 hover:shadow-slate-200 p-2 ${className}`}
    />
}

export default Input;
