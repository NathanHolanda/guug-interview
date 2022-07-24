import GuestsList from "../../components/GuestsList";
import Layout from "../../components/Layout";
import Loading from "../../components/Loading";
import Navbar from "../../components/Navbar";
import useAppSelector from "../../hooks/useAppSelector";
import { selectRefused } from "../../store/slices/refusedSlice";

function RefusedGuests() {
    const refused = useAppSelector(selectRefused).guests;

    return (
        <>
            <Navbar />
            <Layout
                title="Visitantes recusados"
                subtitle="Lista de visitantes não aprovados na portaria"
            >
                {refused ? <GuestsList guests={refused} /> : <Loading />}
            </Layout>
        </>
    );
}

export default RefusedGuests;
