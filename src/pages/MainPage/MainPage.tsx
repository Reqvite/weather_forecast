import { useState } from "react"

import { Filter } from "@/components/Filter"
import { CreateTripModal } from "@/components/Modals"
import { TripsList } from "@/components/TripsList/TripsList"
import { WeatherByDayWidget } from "@/components/WeatherWidgets"
import trips from '@/shared/data/trips.json'
import { StickyContentLayout } from "@/shared/ui"


const MainPage = () => {
    const [tripsList, setTripsList] = useState(trips);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const onToggleModal = () => {
        setModalIsOpen(prev => !prev)
    }

    return (
        <StickyContentLayout content={<>
            <Filter list={trips} setList={setTripsList} />
            <TripsList list={tripsList} setModalIsOpen={onToggleModal} />
            {modalIsOpen && <CreateTripModal onClose={onToggleModal}/>}
        </>} right={<WeatherByDayWidget/>} />
    )
}

export default MainPage
