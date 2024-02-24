import { useState } from "react"

import { Filter } from "@/components/Filter"
import { WeatherByDayWidget } from "@/components/WeatherWidgets"
import trips from '@/shared/data/trips.json'
import { StickyContentLayout } from "@/shared/ui"


const MainPage = () => {
    const [tripsList, setTripsList] = useState(trips);

    return (
        <StickyContentLayout content={<>
            <Filter list={tripsList} setList={setTripsList} />
        </>} right={<WeatherByDayWidget/>} />
    )
}

export default MainPage
