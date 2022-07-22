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

type RefusedState = {
    refused: Guest[];
    setRefused: Dispatch<SetStateAction<Guest[]>>;
};

type ProviderProps = {
    children: ReactNode;
};

const Context = createContext<RefusedState>({} as RefusedState);

export function RefusedProvider({ children }: ProviderProps) {
    const [refused, setRefused] = useState<Guest[]>([]);

    return (
        <Context.Provider value={{ refused, setRefused }}>
            {children}
        </Context.Provider>
    );
}

export default function useRefused() {
    const refused = useContext(Context);

    return refused;
}
