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
        "w-full rounded-lg border border-slate-200 bg-white shadow-sm placeholder:text-slate-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-600/15 outline-none transition";

    return (
        <div className="w-full">
            {label && (
                <label className="block text-sm font-medium text-slate-700 mb-1">
                    {label}
                </label>
            )}

            <input
                {...props}
                className={`${baseStyle} ${sizeStyles[size]} ${className}`}
            />

            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
    );
};