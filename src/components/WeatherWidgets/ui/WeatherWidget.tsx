import '../styles/WeatherWidget.css'

import { classNames } from '@/shared/lib/helpers';
import { Weather } from '@/shared/types/entities';
import { Loader, Text, Timer, WeatherIcon } from '@/shared/ui';

type WidgetVariants = 'byDay' | 'byWeek'

type Props = {
    data: Weather[];
    isLoading?: boolean;
    variant?: WidgetVariants;
}

export const WeatherWidget = (props: Props) => {
    const { data, isLoading, variant = 'byDay' } = props

    const isByDay = variant === 'byDay'

    if (isLoading) {
        return <div className={classNames('WeatherWidget', {WeatherWidgetByDay: isByDay}, [])}>
            <div className='WeatherWidget__loader'><Loader /></div>
        </div>  
    }

    if (!data[0]) {
        return <div className='WeatherWidget'>
            <div className='WeatherWidget__loader'><Text size='medium' bold>Data not found</Text></div>
        </div>  
    }
    
    const { dayOfTheWeek, icon, temp, title, startDate } = data[0]

    if (isByDay) {
        return <div className='WeatherWidget WeatherWidgetByDay'>
            <Text size='medium' bold>Today's weather</Text>
            <div className='WeatherWidget__ByDayContent'>
                <Text bold size='medium'>{dayOfTheWeek}</Text>
                <div className='WeatherWidget__ByDayContentBox '>
                    <WeatherIcon weather={icon} />
                    <Text size='large' bold>{temp}°C</Text>
                </div>
                <Text size='medium'>{title}</Text>
                {startDate && <Timer classnames='WeatherWidget__timer' startDate={startDate} />}
            </div>
        </div>
    }

    if (variant === 'byWeek') {
        const title = `${data[0].title} weather by ${data[0].date} - ${data[data.length - 1].date}`

        return <div className='WeatherWidget'>
            <Text size='medium' bold>{title}</Text>
            <ul className='WeatherWidget__list'>
                {data.map(({date,tempMax, tempMin, dayOfTheWeek, icon }, index) => <li key={index}>
                    <Text size='medium'>{dayOfTheWeek}</Text>
                    <Text color='secondary'>{date}</Text>
                    <WeatherIcon weather={icon} />
                    <Text bold>{tempMax}°C / {tempMin}°C</Text>
                </li>)} 
            </ul>
        </div>
    } 
}

