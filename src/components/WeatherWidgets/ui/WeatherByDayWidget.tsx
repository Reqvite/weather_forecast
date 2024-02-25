import '../styles/WeatherWidget.css'

import { Weather } from '@/shared/types/entities';
import { Loader, Text, WeatherIcon } from '@/shared/ui';


type Props = {
    data: Weather[];
    isLoading?: boolean;
}

export const WeatherByDayWidget = ({ data, isLoading }: Props) => {

    if (!data[0]) {
        return <div className='WeatherWidget'>
            <div className='WeatherWidget__loader'><Text size='medium' bold>Data not found</Text></div>
        </div>  
    }
    
    const { dayOfTheWeek, icon, temp, title } = data[0]
    
    return (
        <div className='WeatherWidget WeatherWidgetByDay'>
            {isLoading ? <div className='WeatherWidget__loader'><Loader /></div> : <div className='WeatherWidget__ByDayContent'>
                <Text bold size='medium'>{dayOfTheWeek}</Text>
                <div className='WeatherWidget__ByDayContentBox '>
                    <WeatherIcon weather={icon} />
                    <Text size='large' bold>{temp}°</Text>
                </div>
                <Text size='medium'>{title}</Text>
            </div>}
            
        </div>
    )
}

