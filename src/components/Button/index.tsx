import React, { ReactNode } from "react";
import styles from "./Button.module.scss";

type ButtonProps = {
    onClick: () => void;
    children: ReactNode;
    type: "error" | "success";
};

export default function Button({ onClick, children, type }: ButtonProps) {
    return (
        <button
            className={`${styles.button} ${type ? styles[type] : ""}`}
            type="button"
            onClick={onClick}
        >
            {children}
        </button>
    );
}
