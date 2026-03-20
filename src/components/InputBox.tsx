"use client";


interface InputBoxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
    label?: string;
    error?: string;
    className?: string;
    size?: "sm" | "md" | "lg";
}

const sizeStyles = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-5 py-3 text-lg",
};

export const InputBox = ({
    label,
    error,
    className,
    size = "md",
    ...props
}: InputBoxProps) => {
    const baseStyle =
        "w-full rounded-lg border border-slate-200 bg-white text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-600/15 outline-none transition dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100 dark:placeholder:text-slate-500";

    return (
        <div className="w-full">
            {label && (
                <label className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300">
                    {label}
                </label>
            )}

            <input
                {...props}
                className={`${baseStyle} ${sizeStyles[size]} ${className}`}
            />

            {error && <p className="mt-1 text-sm text-red-500 dark:text-red-400">{error}</p>}
        </div>
    );
};