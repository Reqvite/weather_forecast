import '../styles/WeatherWidget.css'

import { Weather } from '@/shared/types/entities'
import { Loader, Text, WeatherIcon } from '@/shared/ui'

type Props = {
    data: Weather[];
    isLoading?: boolean;
}
export const WeatherByWeekWidget = ({ data, isLoading }: Props) => {
    if (!data[0]) {
        return <div className='WeatherWidget'>
            <div className='WeatherWidget__loader'><Text size='medium' bold>Data not found</Text></div>
        </div>  
    }
    const title = `${data[0].title} trip ${data[0].date} - ${data[data.length - 1].date}`

    return (
        <div className='WeatherWidget'>
            <Text size='medium' bold>{title}</Text>
            {isLoading ? <div className='WeatherWidget__loader'><Loader /></div> : <ul className='WeatherWidget__list'>
                {data.map(({date,tempMax, tempMin, dayOfTheWeek, icon }, index) => <li key={index}>
                    <Text size='medium'>{dayOfTheWeek}</Text>
                    <Text color='secondary'>{date}</Text>
                    <WeatherIcon weather={icon} />
                    <Text bold>{tempMax}° / {tempMin}°</Text>
                </li>)} 
            </ul>}
           
        </div>
    )
}

