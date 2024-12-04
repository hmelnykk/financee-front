'use client'

import Button from "@/components/ui/Button/Button";
import Divider from "@/components/ui/Divider/Divider";
import Input from "@/components/ui/Inputs/Input"
import axios from "axios";
import { setCookie } from "cookies-next";
import { useState } from "react";

interface LoginData {
    email: string;
    password: string;
}

const initialLoginData = {
    email: '',
    password: '',
}

const LoginForm = () => {
    const [loginData, setLoginData] = useState<LoginData>(initialLoginData);
    return <div className="p-8 rounded-default bg-white max-w-[300px] mx-auto">
        <h1 className="text-center">Welcome back!</h1>
        <Divider />

        <div className="space-y-2">
            <Input name="Email" type="email" onChange={(value) => {
                setLoginData({
                    ...loginData,
                    email: value,
                })
            }} />
            <Input name="Password" type="password" onChange={(value) => {
                setLoginData({
                    ...loginData,
                    password: value,
                })
            }} />
            <Button name="Login" className="w-full" onClick={() => {
                if (!loginData.email || !loginData.password) {
                    return;
                }

                axios.post('http://localhost:3001/users/login', loginData)
                    .then(res => res.data)
                    .then(data => {
                        const { userId } = data;
                        if (userId) {
                            setCookie('userId', userId);
                        }
                    })
            }} />
        </div>
    </div>
}

export default LoginForm;
