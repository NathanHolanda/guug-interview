import { useQuery } from "@tanstack/react-query";
import { useCallback } from "react";
import GuestsList from "../../components/GuestsList";
import Layout from "../../components/Layout";
import Loading from "../../components/Loading";
import Navbar from "../../components/Navbar";
import useAppSelector from "../../hooks/useAppSelector";
import api from "../../services/api";
import { selectChecked } from "../../store/slices/checkedSlice";

type Guest = {
    id: number;
    name: string;
    status: string;
};

function Main() {
    const checkedGuests = useAppSelector(selectChecked).guests;

    const fetchGuests = useCallback(async () => {
        const response = await api.get("/");
        const data = await response.data;

        const guests: Guest[] = data.filter((item: Guest) => {
            return (
                item.status === "PENDING" &&
                !checkedGuests.some(
                    (checkedGuest) => checkedGuest.id === item.id
                )
            );
        });

        return guests;
    }, [checkedGuests]);

    const { data } = useQuery<Guest[]>(["guests"], fetchGuests, {
        refetchInterval: 15000,
    });

    return (
        <>
            <Navbar />
            <Layout
                title="Portaria"
                subtitle="Aprove ou negue a entrada dos visitantes"
            >
                {data ? (
                    <GuestsList
                        guests={data}
                        haveButtons={true}
                        showChecked={false}
                    />
                ) : (
                    <Loading />
                )}
            </Layout>
        </>
    );
}

export default Main;
