import React, { useCallback, useEffect, useState } from "react";
import Button from "../../components/Button";
import useAccepted from "../../hooks/useAccepted";
import useRefused from "../../hooks/useRefused";
import api from "../../services/api";
import styles from "./Main.module.css";

type Guest = {
    id: number;
    name: string;
    status: string;
};

function App() {
    const { refused, setRefused } = useRefused();
    const { accepted, setAccepted } = useAccepted();

    const [guests, setGuests] = useState<Guest[]>([]);

    const fetch = useCallback(() => {
        setInterval(() => {
            api.get("/")
                .then((response) => {
                    console.log(response.data);
                    return response.data;
                })
                .then((data) => {
                    const guests = data.filter(
                        (item: Guest) => item.status === "PENDING"
                    );
                    setGuests(guests);
                });
        }, 15000);
    }, []);

    useEffect(() => {
        fetch();
    }, []);

    return (
        <main className={styles.Main}>
            <section>
                <ul>
                    {guests.map((guest) => (
                        <li key={guest.id}>
                            <span>{guest.name}</span>
                            <Button
                                label={"Aceitar"}
                                onClick={function (): void {
                                    setAccepted([...accepted, guest]);
                                }}
                            />
                            <Button
                                label={"Recusar"}
                                onClick={function (): void {
                                    setRefused([...refused, guest]);
                                }}
                            />
                        </li>
                    ))}
                </ul>
            </section>
            <section>
                <Button
                    label={"Visitantes aceitos"}
                    onClick={function (): void {
                        throw new Error("Function not implemented.");
                    }}
                />
                <Button
                    label={"Visitantes recusados"}
                    onClick={function (): void {
                        throw new Error("Function not implemented.");
                    }}
                />
            </section>
        </main>
    );
}

export default App;
