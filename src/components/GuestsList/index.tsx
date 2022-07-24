import { useCallback } from "react";
import { TiTick, TiTimes } from "react-icons/ti";
import useAppDispatch from "../../hooks/useAppDispatch";
import useAppSelector from "../../hooks/useAppSelector";
import { handleAddAccepted } from "../../store/actions/handleAddAccepted";
import { handleAddRefused } from "../../store/actions/handleAddRefused";
import { selectChecked } from "../../store/slices/checkedSlice";
import { selectSearch } from "../../store/slices/searchSlice";
import Button from "../Button";
import styles from "./GuestsList.module.scss";

type Guest = {
    id: number;
    name: string;
    status: string;
};

type GuestsListProps = {
    guests: Guest[];
    showChecked?: boolean;
    haveButtons?: boolean;
};

export default function GuestsList({
    guests,
    showChecked = true,
    haveButtons = false,
}: GuestsListProps) {
    const dispatch = useAppDispatch();

    const checkedGuests = useAppSelector(selectChecked).guests;
    const search = useAppSelector(selectSearch);

    const acceptGuest = useCallback(
        (guest: Guest): void => {
            guest.status = "APPROVE";

            dispatch(handleAddAccepted(guest));
        },
        [dispatch]
    );
    const refuseGuest = useCallback(
        (guest: Guest): void => {
            guest.status = "REFUSED";

            dispatch(handleAddRefused(guest));
        },
        [dispatch]
    );

    return (
        <ul>
            {guests.length > 0 &&
                guests.map((guest) => {
                    const showGuest = showChecked
                        ? true
                        : !checkedGuests.some(
                              (checkedGuest) => checkedGuest.id === guest.id
                          );

                    const guestNameLowercase = guest.name.toLowerCase();
                    const searchLowercase = search.toLowerCase();

                    const isSearched =
                        (search !== "" &&
                            guestNameLowercase.includes(searchLowercase)) ||
                        search === "";

                    if (showGuest && isSearched)
                        return (
                            <li className={styles.listItem} key={guest.id}>
                                <p>{guest.name}</p>
                                {haveButtons && (
                                    <div className={styles.buttonsContainer}>
                                        <Button
                                            onClick={() => acceptGuest(guest)}
                                            type="success"
                                        >
                                            <TiTick fontSize={20} />
                                        </Button>
                                        <Button
                                            onClick={() => refuseGuest(guest)}
                                            type="error"
                                        >
                                            <TiTimes fontSize={20} />
                                        </Button>
                                    </div>
                                )}
                            </li>
                        );
                    else return null;
                })}
        </ul>
    );
}
