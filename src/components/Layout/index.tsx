import React, { ReactNode } from "react";
import styles from "./Layout.module.scss";
import SearchBox from "../SearchBox";

type LayoutProps = {
    title: string;
    subtitle: string;
    children: ReactNode;
};

export default function Layout({ title, subtitle, children }: LayoutProps) {
    return (
        <main className={styles.main}>
            <div className={styles.title}>
                <h1>{title}</h1>
                <h4>{subtitle}</h4>
            </div>
            <section className={styles.card}>
                <SearchBox placeholder="Procurar por visitante..." />
                <div className={styles.listContainer}>{children}</div>
            </section>
        </main>
    );
}
