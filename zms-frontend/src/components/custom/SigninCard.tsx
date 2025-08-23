import { Button } from "@/components/ui/button"
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import axios from "axios"
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "@/services/api";
export function SigninCard() {
    const [form, setForm] = useState({ email: "", password: "" });
    const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
    const navigate = useNavigate();
    const validate = () => {
        const newErrors: { email?: string; password?: string } = {};
        if (!form.email) {
            newErrors.email = "Email is required.";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
            newErrors.email = "Enter a valid email address.";
        }
        if (!form.password) {
            newErrors.password = "Password is required.";
        } else if (form.password.length < 6) {
            newErrors.password = "Password must be at least 6 characters.";
        }
        return newErrors;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.id]: e.target.value });
        setErrors({ ...errors, [e.target.id]: undefined });
    };

    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form submitted:", form);
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        // Proceed with login logic here
        try{
            console.log("Submitting to /auth/login:", form);
            const response = await api.post('/auth/login', form);
            
            if(response.status === 200 || response.status === 201){
                localStorage.setItem("token", response.data.token);
                console.log(response.data);
                alert("Login successful");
                navigate("/dashboard/animals");
            }
        }
        catch(err){console.error(err)}
    };
    return (
        <Card className="w-full max-w-sm p-2">
            <CardHeader className="gap-3 pb-2">
                <CardTitle className="mb-1 w-full">Login to your account</CardTitle>
                <CardDescription className="mb-2">
                    Enter your email below to login to your account
                </CardDescription>
                <CardAction className="mt-1">
                    <Button variant="link">Sign Up</Button>
                </CardAction>
            </CardHeader>
            <CardContent className="pt-0 pb-2">
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-7">
                        <div className="grid gap-3">
                            <Label htmlFor="email" className="mb-1">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="m@example.com"
                                className="h-10"
                                value={form.email}
                                onChange={handleChange}
                                aria-invalid={!!errors.email}
                            />
                            {errors.email && (
                                <span className="text-xs text-red-500 mt-1">{errors.email}</span>
                            )}
                        </div>
                        <div className="grid gap-3">
                            <div className="flex items-center mb-1">
                                <Label htmlFor="password">Password</Label>
                                <a
                                    href="#"
                                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                                >
                                    Forgot your password?
                                </a>
                            </div>
                            <Input
                                id="password"
                                type="password"
                                className="h-10"
                                value={form.password}
                                onChange={handleChange}
                                aria-invalid={!!errors.password}
                            />
                            {errors.password && (
                                <span className="text-xs text-red-500 mt-1">{errors.password}</span>
                            )}
                        </div>
                    </div>
                    <Button type="submit" className="w-full mb-2" >
                    Login
                </Button>
                <Button variant="outline" className="w-full">
                    Login with Google
                </Button>
                </form>
            </CardContent>
            <CardFooter className="flex flex-col gap-4 pt-2">

            </CardFooter>
        </Card>
    )
}
