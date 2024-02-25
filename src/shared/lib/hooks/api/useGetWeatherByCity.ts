import { useEffect, useState } from "react";

import { $api } from "@/shared/api";
import { Trip } from "@/shared/types/entities";

import { weatherNormalizer } from "../../normalizers";

export const useGetWeatherByCity = ({ title, startDate, endDate }: Trip) => {
    const [isLoading, setIsLoading] = useState(false);
    const [weatherPeriodData, setWeatherPeriodData] = useState([]);
    const [weatherTodayData, setWeatherTodayData] = useState([]);

    useEffect(() => {
        const fetchWeatherData = async () => {
            setIsLoading(true);
            try {
                const {data} = await $api(`timeline/${title}/${startDate}/${endDate}?unitGroup=metric&include=days`);
                const {data: today} = await $api(`timeline/${title}/today?unitGroup=metric&include=days`);
                setWeatherPeriodData(weatherNormalizer(data));
                setWeatherTodayData(weatherNormalizer(today, startDate, endDate))
            } catch (error) {
                console.error("error:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchWeatherData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [title]);

    return { isLoading, weatherPeriodData, weatherTodayData };
};