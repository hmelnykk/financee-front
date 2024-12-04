interface SelectProps {
    name: string;
    values: string[];
    className?: string;
}

const Select = ({ name, values, className }: SelectProps) => {
    return <div>
        <p className="text-[12px] translate-y-2 translate-x-1 bg-white w-fit px-2">{name}</p>
        <select
            name={name}
            id={name.toLowerCase().replace(' ', '-')}
            className={`py-2 text-sm border rounded-default w-full outline-none ${className}`} // focus:border-red-300
        >
            <option value="">---</option>
            {
                values.map((el, idx) => (
                    <option key={idx}>{el}</option>
                ))
            }
        </select>
    </div>
}

export default Select;
