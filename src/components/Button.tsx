import { ReactElement } from "react";

type ButtonProps = {
    title: string;
    icon?: ReactElement;
    className?: string;
    handleClick?: () => void;
};

export default function Button({
    title,
    icon,
    className,
    handleClick,
}: ButtonProps) {
    return (
        <button
            className={`${className} flex items-center justify-center p-2  rounded-md gap-1  text-white bg-black   `}
            onClick={handleClick}
        >
            {title}
            {icon}
        </button>
    );
}
