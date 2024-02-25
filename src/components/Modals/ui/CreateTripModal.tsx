import "../styles/CreateTripModal.css";

import { useState } from "react";

import cities from "@/shared/data/cities.json";
import { getWithin15Date } from "@/shared/lib/helpers";
import { useTrips } from "@/shared/lib/hooks";
import { City, Trip } from "@/shared/types/entities";
import { ModalProps } from "@/shared/types/uiTypes";
import { Dropdown, Input, Modal } from "@/shared/ui";

const { startDate: minDate } = getWithin15Date(new Date());

type Props = ModalProps & {
    list: Trip[];
    setTripsList: (list: Trip[]) => void;
};


export const CreateTripModal = (props: Props) => {
    const { list, onClose,setTripsList, ...otherProps } = props;
    const {setStorageTrips} = useTrips();

    const [city, setCity] = useState<City>(list[0] || {});
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    const onChangeCity = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value
        const selectedObject = cities.find(option => option.title === value)!;
        setCity(selectedObject);
    };

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        list.push({
            id: String(Math.random()),
            title: city.title,
            startDate,
            endDate,
            image: city.image,
        });
        setTripsList(list)
        setStorageTrips(list)
        if (onClose) {
            onClose();
        }
    };
    return (
        <Modal {...otherProps} onSubmit={onSubmit} onClose={onClose}>
            <div className="createTripModal">
                <Dropdown
                    required
                    placeholder="Select city"
                    label="City"
                    options={cities}
                    onChange={onChangeCity}
                />
                <Input
                    label="Start date"
                    placeholder="Select date"
                    name="date"
                    type="date"
                    min={minDate}
                    value={startDate}
                    // max={endDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    fullWidth
                    required
                />
                <Input
                    label="End date"
                    placeholder="Select date"
                    name="date"
                    type="date"
                    min={minDate}
                    value={endDate}
                    // max={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    fullWidth
                    required
                />
            </div>
        </Modal>
    );
};
