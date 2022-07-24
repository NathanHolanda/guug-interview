import { AppDispatch, storeActions } from "..";
import api from "../../services/api";

type Guest = {
    id: number;
    name: string;
    status: string;
};

export function setInitialAcceptedAndRefused() {
    return async (dispatch: AppDispatch) => {
        const response = await api.get("/");
        const data: Guest[] = response.data;

        data.forEach((guest) => {
            if (guest.status === "APPROVE")
                dispatch(storeActions.addAccepted(guest));
            else if (guest.status === "REFUSED")
                dispatch(storeActions.addRefused(guest));
        });
    };
}
