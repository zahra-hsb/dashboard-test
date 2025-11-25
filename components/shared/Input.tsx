"use client"
import { TextInputType } from "@/utils/schemas/types";
import { FieldValues, Path } from "react-hook-form";

const Input = <TFormValues extends FieldValues = FieldValues>({
    label,
    id,
    type,
    className,
    placeholder,
    dir,
    icon,
    register,
    name,
    required,
    registerId
}: TextInputType<TFormValues>) => {
    return (
        <div className="flex flex-col items-start gap-2 w-full">
            <div className="w-full relative">
                <label htmlFor={id}>{label}{required ? <span className="text-red-600 px-1 text-lg">*</span> : <></>}</label>
                {icon}
                <input
                    type={type}
                    dir={dir}
                    className={`border-b p-2 rounded-lg dark:border-black dark:bg-white placeholder:text-gray-500 focus:border outline-0 px-3 focus:shadow-lg w-full shadow-sm ${className} ${icon ? 'pl-12' : ''}`}
                    placeholder={placeholder}
                    id={id}
                    {...register(registerId, { required })}
                />
            </div>
        </div>
    );
};

export default Input;
