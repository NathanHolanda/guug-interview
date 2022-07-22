import React from "react";

type ButtonProps = {
    label: string;
    onClick: () => void;
};

export default function index({ label, onClick }: ButtonProps) {
    return (
        <button type="button" onClick={onClick}>
            {label}
        </button>
    );
}
