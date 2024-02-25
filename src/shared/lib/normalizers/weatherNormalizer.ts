/* eslint-disable @typescript-eslint/no-explicit-any */

import { formatDate } from "../helpers";

export const weatherNormalizer = (data: any, startDate?:string | undefined, endDate?:string | undefined) => {
    return data.days.map((day:any) => ({
        title: data.address,
        date: formatDate(day.datetime) ,
        dayOfTheWeek: new Date(day.datetime).toLocaleDateString('en-US', { weekday: 'long' }),
        icon: day.icon,
        tempMax: day.tempmax,
        tempMin: day.tempmin,
        temp: day.temp,
        startDate,
        endDate,
    }));
};
