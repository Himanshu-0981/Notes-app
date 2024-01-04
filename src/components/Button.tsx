import { ReactElement } from "react";

type ButtonProps = {
    title: string;
    icon: ReactElement;
    className: string;
    handleClick: () => void;
};

export default function Button({
    title,
    icon,
    className,
    handleClick,
}: ButtonProps) {
    return (
        <button
            className={`${className} flex items-center justify-center py-2  gap-1 bg-green-700 text-white font-bold `}
            onClick={handleClick}
        >
            {title}
            {icon}
        </button>
    );
}
