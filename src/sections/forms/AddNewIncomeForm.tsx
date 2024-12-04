'use client'

import Button from "@/components/ui/Button/Button";
import Input from "@/components/ui/Inputs/Input";
import { useState } from "react";



interface NewIncome {
    source: string;
    money: number;
}

const initialIncome = {
    source: '',
    money: 0,
};

const AddNewIncomeForm = () => {
    const [newIncome, setNewIncome] = useState<NewIncome>(initialIncome);
    const [addingError, setAddingError] = useState<boolean>(false);

    return <div className="[&>*]:mb-2">
        <Input name="Money" type="number" onChange={(value) => {
            setNewIncome({
                ...newIncome,
                money: parseFloat(value),
            })
        }} />
        <Input name="Source" type="text" onChange={(value) => {
            setNewIncome({
                ...newIncome,
                source: value,
            })
        }} />
        <Button name="Add Income" onClick={() => {
            if (!newIncome.source || !newIncome.money) {
                setAddingError(true);
                return;
            }

            setAddingError(false);
            console.log(newIncome);
        }} />
        {
            addingError && <p className="text-red-500 text-sm">You have to fill all fields!</p>
        }
    </div>
}

export default AddNewIncomeForm;
