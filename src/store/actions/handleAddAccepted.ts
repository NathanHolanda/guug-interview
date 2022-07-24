import { AppDispatch, storeActions } from "..";

type Guest = {
    id: number;
    name: string;
    status: string;
};

export function handleAddAccepted(guest: Guest) {
    return (dispatch: AppDispatch): void => {
        dispatch(storeActions.addAccepted(guest));
        dispatch(storeActions.addChecked(guest));
    };
}
