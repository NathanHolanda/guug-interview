import {
    createContext,
    Dispatch,
    ReactNode,
    SetStateAction,
    useContext,
    useState,
} from "react";

type Guest = {
    id: number;
    name: string;
    status: string;
};

type AcceptedState = {
    accepted: Guest[];
    setAccepted: Dispatch<SetStateAction<Guest[]>>;
};

type ProviderProps = {
    children: ReactNode;
};

const Context = createContext<AcceptedState>({} as AcceptedState);

export function AcceptedProvider({ children }: ProviderProps) {
    const [accepted, setAccepted] = useState<Guest[]>([]);

    return (
        <Context.Provider value={{ accepted, setAccepted }}>
            {children}
        </Context.Provider>
    );
}

export default function useAccepted() {
    const accepted = useContext(Context);

    return accepted;
}
