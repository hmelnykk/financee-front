'use client'

import Divider from "@/components/ui/Divider/Divider";
import { useState } from "react";
import AddNewExpenseForm from "./AddNewExpenseForm";
import AddNewIncomeForm from "./AddNewIncomeForm";
import Button from "@/components/ui/Button/Button";

const IncomeExpenseForm = () => {
    const [state, setState] = useState<"income" | "expense">("expense");
    return <div className="border p-2 rounded-default">
        <div className="flex gap-2 w-fit">
            <Button name="Add Expense" onClick={() => {setState('expense')}} />
            <Button name="Add Income" onClick={() => {setState('income')}} />
        </div>
        <Divider />
        <div className="p-2">
        {
            state === 'expense' ?
            <AddNewExpenseForm />
            :
            <AddNewIncomeForm />
        }
        </div>
    </div>
}

export default IncomeExpenseForm;
