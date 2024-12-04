'use client'

import axios from "axios";
import { useEffect, useState } from "react";

interface ExpenseLogType {
    id: number;
    category: string;
    money: number;
    description: string;
    date: string;
}

interface IncomeLogType {
    id: number;
    money: number;
    source: string;
}

interface TableDataType {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    expenseLogs: ExpenseLogType[];
    incomeLogs: IncomeLogType[];
}

const TransactionsTable = () => {
    const [data, setData] = useState<TableDataType>();
    const [updater, setUpdater] = useState<number>(0);

    useEffect(() => {
        axios.get('http://localhost:3001/users/2')
            .then(res => res.data)
            .then(data => {
                setData(data);
            })
            .catch(() => { })
    }, [updater])

    return data && <>
        <div className="flex gap-4 items-center">
            <button onClick={() => { setUpdater(updater + 1) }} className="*:hover:animate-spin hover:bg-slate-100 duration-200 rounded-full p-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                </svg>
            </button>
            <h1 className="font-bold text-xl">Your money flow table</h1>
        </div>
        <div className="rounded-default border">
            <div className="grid grid-cols-4 p-4 font-bold">
                <p>Category</p>
                <p>Amount</p>
                <p>Description</p>
                <p>Date</p>
            </div>
            <hr />
                {
                    data.expenseLogs?.map((log, logIdx) => {
                        return <div key={logIdx} className="grid grid-cols-4 p-4 duration-200 hover:bg-slate-100">
                            <p>{log.category}</p>
                            <p>{log.money}</p>
                            <p>{log.description}</p>
                            <p>{log.date}</p>
                        </div>
                    })
                }
                {
                    data.incomeLogs?.map((log, logIdx) => {
                        return <div key={logIdx} className="grid grid-cols-4 p-4 duration-200 hover:bg-slate-100">
                            <p>Income</p>
                            <p>{log.money}</p>
                            <p>{log.source}</p>
                        </div>
                    })
                }
        </div>
    </>
}

export default TransactionsTable;
