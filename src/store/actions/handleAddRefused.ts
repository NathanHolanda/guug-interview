import { AppDispatch, storeActions } from "..";

type Guest = {
    id: number;
    name: string;
    status: string;
};

export function handleAddRefused(guest: Guest) {
    return (dispatch: AppDispatch): void => {
        dispatch(storeActions.addRefused(guest));
        dispatch(storeActions.addChecked(guest));
    };
}
