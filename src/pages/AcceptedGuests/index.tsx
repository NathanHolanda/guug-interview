import GuestsList from "../../components/GuestsList";
import Layout from "../../components/Layout";
import Loading from "../../components/Loading";
import Navbar from "../../components/Navbar";
import useAppSelector from "../../hooks/useAppSelector";
import { selectAccepted } from "../../store/slices/acceptedSlice";

function AcceptedGuests() {
    const accepted = useAppSelector(selectAccepted).guests;

    return (
        <>
            <Navbar />
            <Layout
                title="Visitantes aceitos"
                subtitle="Lista de visitantes aprovados na portaria"
            >
                {accepted ? <GuestsList guests={accepted} /> : <Loading />}
            </Layout>
        </>
    );
}

export default AcceptedGuests;
