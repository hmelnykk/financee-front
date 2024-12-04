'use client'

import { useState } from "react";
import Divider from "../Divider/Divider";

interface CustomSelectOption {
    title: string;
    value: string;
    description?: string;
}

interface CustomSelectProps {
    name?: string;
    values: CustomSelectOption[];
    defaultValue?: string;
    className?: string;
    valuesTitle?: string;
    onChange: (value: string) => void;
    disabled?: boolean;
}

const CustomSelect = ({ name, values = [], defaultValue, className, valuesTitle, onChange, disabled=false }: CustomSelectProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selected, setSelected] = useState<string>(defaultValue || '---');

    return <>
        <div id={name?.toLowerCase().replace(' ', '-')}
            className={`w-full flex rounded-default shadow-md shadow-slate-100 px-2
                duration-300 hover:shadow-slate-200 ${isOpen ? 'bg-slate-100' : ''} ${className}`}
            onClick={() => {
                if (!disabled) setIsOpen(!isOpen);
            }}>

            <p className="p-2 flex-grow select-none text-sm">{selected}</p>
            <button className="hover:bg-slate-100 duration-200 h-fit p-2 rounded-default my-auto">
                {
                    disabled ?
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                        className={`size-5`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                    </svg>
                    :
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                        className={`size-5 duration-300 ${isOpen ? '-rotate-180' : ''}`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                }
            </button>
        </div>
        <div className={`bg-white border rounded-default p-2 duration-300 shadow-xl absolute ${isOpen ? '' : 'hidden'}`}>
            <p className="p-2 text-sm">{valuesTitle}</p>
            <Divider />
            <div className="h-[40vh] overflow-y-scroll grid grid-cols-2 gap-2">
                {
                    values.map((el, idx) => (
                        <div
                            className="hover:bg-slate-100 rounded-default duration-200 select-none p-2 text-sm"
                            key={idx}
                            onClick={() => {
                                setSelected(el.title);
                                setIsOpen(false);
                                onChange(el.value);
                            }}
                        >
                            <p>{el.title}</p>
                            { el.description && <p className="text-slate-500">{el.description}</p> }
                        </div>
                    ))
                }
            </div>
        </div>
    </>
}

export default CustomSelect;
