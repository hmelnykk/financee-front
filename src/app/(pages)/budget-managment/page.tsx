import AddNewExpenseForm from "@/sections/forms/AddNewExpenseForm";
import AddNewIncomeForm from "@/sections/forms/AddNewIncomeForm";
import TransactionsTable from "@/sections/tables/TransactionsTable";

export default function Home() {
    return (
        <>
            <div className="bg-white rounded-default p-8">
                <div className="grid grid-cols-2 gap-8">
                    <div className="shadow-lg shadow-slate-100 rounded-default p-8">
                        <AddNewExpenseForm />
                    </div>
                    <div className="shadow-lg shadow-slate-100 rounded-default p-8">
                        <AddNewIncomeForm />
                    </div>
                    <div className="shadow-lg shadow-slate-100 rounded-default p-8 col-span-2 space-y-2">
                        <TransactionsTable />
                    </div>
                </div>
            </div>
        </>
    );
}
