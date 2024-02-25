import './WeatherIcon.css'
type Props = {
    weather: string;
}

export const WeatherIcon = ({weather}: Props) => {
    return (
        <img className="WeatherIcon" src={`${import.meta.env.VITE_WEATHER_IMG_URL}${weather}.png`} />   
    )
}

