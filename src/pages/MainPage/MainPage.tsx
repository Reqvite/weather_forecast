import { useState } from "react"

import { Filter } from "@/components/Filter"
import { TripsList } from "@/components/TripsList/TripsList"
import { WeatherByDayWidget } from "@/components/WeatherWidgets"
import trips from '@/shared/data/trips.json'
import { StickyContentLayout } from "@/shared/ui"


const MainPage = () => {
    const [tripsList, setTripsList] = useState(trips);

    return (
        <StickyContentLayout content={<>
            <Filter list={trips} setList={setTripsList} />
            <TripsList list={tripsList}/>
        </>} right={<WeatherByDayWidget/>} />
    )
}

export default MainPage
