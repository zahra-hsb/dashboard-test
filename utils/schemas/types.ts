import { HTMLInputTypeAttribute, ReactNode } from "react";
import { FieldValues, Path, UseFormRegister } from "react-hook-form";

export interface TextInputType<TFormValues extends FieldValues> {
    label?: string;
    id: string;
    registerId: Path<TFormValues>;
    type: HTMLInputTypeAttribute;
    className?: string;
    placeholder?: string;
    dir?: "ltr" | "rtl";
    icon?: ReactNode;
    name: string;
    required: boolean;
    register: UseFormRegister<TFormValues>;
}

export interface LoginFormType {
    username: string;
    password: string;
}