import { ChangeEvent, useEffect } from "react";
import useAppDispatch from "../../hooks/useAppDispatch";
import useAppSelector from "../../hooks/useAppSelector";
import { storeActions } from "../../store";
import { selectSearch } from "../../store/slices/searchSlice";
import styles from "./SearchBox.module.scss";

type SearchBoxProps = {
    placeholder: string;
};

export default function SearchBox({ placeholder }: SearchBoxProps) {
    const dispatch = useAppDispatch();
    const search = useAppSelector(selectSearch);

    useEffect(() => {
        dispatch(storeActions.setSearchValue(""));
    }, [dispatch]);

    return (
        <div className={styles.container}>
            <input
                type="text"
                value={search}
                placeholder={placeholder}
                onChange={(event: ChangeEvent) => {
                    const element = event.target as HTMLInputElement;

                    dispatch(storeActions.setSearchValue(element.value));
                }}
            />
        </div>
    );
}
