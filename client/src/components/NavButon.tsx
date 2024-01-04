import React from "react";
import { useNavigate } from "react-router-dom"

type TNavButton = {
    to: string;
    text: string;
    className?: string
}

export function NavButton({to, text, className} : TNavButton) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(to, {replace: true})
    }

    return (
        <button className={className} onClick={handleClick}>
            {text}
        </button>
    )
}