"use client"
import { useForm } from "react-hook-form";
import Card from "../shared/Card";
import Input from "../shared/Input";
import { LoginFormType } from "@/utils/schemas/types";
import Button from "../shared/Button";
import { LoginSchema } from "@/utils/schemas/zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<LoginFormType>({
        resolver: zodResolver(LoginSchema)
    })
    const onSubmit = (data: LoginFormType) => {
        console.log(data)
    }
    return (
        <Card className="max-w-lg mx-auto text-gray-950">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center gap-5">
                <label className="">Login</label>
                <Input label="Username" placeholder="Enter your username..." required={true} id="username" name="username" register={register} registerId="username" type="text" />
                {errors.username ?
                    <span className="text-red-600">{errors.username.message}</span>
                    : ""}
                <Input label="Password" placeholder="Enter your password..." required={true} id="password" name="password" register={register} registerId="password" type="password" />
                {errors.password ?
                    <span className="text-red-600">{errors.password.message}</span> : ""}
                <Button>
                    Submit
                </Button>
            </form>
        </Card>
    )
}

export default Login;