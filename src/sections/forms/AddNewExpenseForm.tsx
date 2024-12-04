'use client'

import Button from "@/components/ui/Button/Button";
import Input from "@/components/ui/Inputs/Input";
import CustomSelect from "@/components/ui/Select/CustomSelect";
import axios from "axios";
import { useState } from "react";

const customSelectValues = [
    {
        title: "Products",
        description: "Products for home",
        value: 'products',
    },
    {
        title: "Vegetables",
        description: "Go green",
        value: 'vegetables',
    },
    {
        title: "Alcohol",
        description: "Beers, roms, revo",
        value: 'music_instruments',
    },
    {
        title: "Fruits",
        description: "Fresh and healthy fruits",
        value: 'fruits',
    },
    {
        title: "Electronics",
        description: "Latest gadgets and devices",
        value: 'electronics',
    },
    {
        title: "Clothing",
        description: "Trendy fashion for all seasons",
        value: 'clothing',
    },
    {
        title: "Furniture",
        description: "Comfortable and stylish furniture",
        value: 'furniture',
    },
    {
        title: "Books",
        description: "Wide range of genres and authors",
        value: 'books',
    },
    {
        title: "Toys",
        description: "Fun toys for kids of all ages",
        value: 'toys',
    },
    {
        title: "Beauty",
        description: "Skincare, makeup, and beauty essentials",
        value: 'beauty',
    },
    {
        title: "Sports Equipment",
        description: "Everything for fitness and sports enthusiasts",
        value: 'sports_equipment',
    },
    {
        title: "Home Appliances",
        description: "Essential appliances for your home",
        value: 'home_appliances',
    },
    {
        title: "Pet Supplies",
        description: "Products for your furry friends",
        value: 'pet_supplies',
    },
    {
        title: "Health Products",
        description: "Supplements and wellness items",
        value: 'health_products',
    },
    {
        title: "Kitchenware",
        description: "Cookware and kitchen tools",
        value: 'kitchenware',
    },
    {
        title: "Automotive",
        description: "Car parts and accessories",
        value: 'automotive',
    },
    {
        title: "Music Instruments",
        description: "Guitars, pianos, and more",
        value: 'music_instruments',
    },
];

interface NewExpense {
    category: string;
    product?: string;
    money: number;
    description: string;
}

const initialExpense = {
    category: '',
    money: 0,
    description: '',
}

const AddNewExpenseForm = () => {
    const [newExpense, setNewExpense] = useState<NewExpense>(initialExpense);
    const [addingError, setAddingError] = useState<boolean>(false);

    return <div>
        <div className="[&>*]:mb-2">
            <CustomSelect
                name="Category"
                values={customSelectValues}
                defaultValue="Category"
                valuesTitle="Select a category of your Expense"
                onChange={(value) => {
                    setNewExpense({
                        ...newExpense,
                        category: value,
                    })
                }}
            />
            <Input name="Money" type="number" onChange={(value) => {
                setNewExpense({
                    ...newExpense,
                    money: parseFloat(value),
                })
            }} />
            <Input name="Description" type="text" onChange={(value) => {
                setNewExpense({
                    ...newExpense,
                    description: value,
                })
            }} />
            <Button name="Add Expense" onClick={() => {
                if (!newExpense.category || !newExpense.description || !newExpense.money) {
                    setAddingError(true);
                    return;
                }

                setAddingError(false);

                axios.post('http://localhost:3001/expense-logs', {
                    ...newExpense,
                    user: 2
                })
            }} />
        </div>
        {
            addingError && <p className="text-red-500 text-sm text-end">You have to fill all fields!</p>
        }
    </div>
}

export default AddNewExpenseForm;
