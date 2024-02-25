export interface WeatherDataResponse {
    address: string;
    days: {
        datetime: string;
        icon: string;
        tempmax: number;
        tempmin: number;
    }
}