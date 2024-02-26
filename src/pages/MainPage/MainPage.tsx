import { useState } from "react";

import { Filter } from "@/components/Filter";
import { CreateTripModal } from "@/components/Modals";
import { TripsList } from "@/components/TripsList/TripsList";
import {WeatherWidget } from "@/components/WeatherWidgets";
import trips from "@/shared/data/trips.json";
import { useGetWeatherByCity,useSelectedTrip, useTrips } from "@/shared/lib/hooks";
import { Trip } from "@/shared/types/entities";
import { StickyContentLayout } from "@/shared/ui";

const MainPage = () => {
    const {storageTrips} = useTrips();
    const defaultList = storageTrips ? storageTrips : trips;
    const [tripsList, setTripsList] = useState(defaultList);
    const {selectedCard, setSelectedCard} = useSelectedTrip(defaultList)
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const { isLoading, weatherPeriodData, weatherTodayData} = useGetWeatherByCity(selectedCard)

    const onToggleModal = () => {
        setModalIsOpen((prev) => !prev);
    };

    const onCityClick = (item: Trip) => {
        setSelectedCard(item)
    }

    return (
        <StickyContentLayout
            content={
                <>
                    <Filter list={defaultList} setList={setTripsList} />
                    <TripsList list={tripsList} setModalIsOpen={onToggleModal} onItemClick={onCityClick} selectedItem={selectedCard} />
                    {modalIsOpen && (
                        <CreateTripModal list={defaultList} setTripsList={setTripsList} onClose={onToggleModal} />
                    )}
                    <WeatherWidget variant='byWeek' data={weatherPeriodData} isLoading={isLoading} />
                </>
            }
            right={<WeatherWidget  data={weatherTodayData}  isLoading={isLoading}/>}
        />
    );
};

export default MainPage;
