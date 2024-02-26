
export interface Trip {
    title?: string;
    id?: string;
    image?: string;
    startDate?: string;
    endDate?: string;  
}


export type City = Omit<Trip, 'startDate' | 'endDate'>;

export interface Weather {
    title: string;
    date: string;
    dayOfTheWeek: string;
    icon: string;
    tempMax: number;
    tempMin: number;
    temp: number;
    startDate: string | undefined
    endDate: string | undefined
}


export interface ItemWithTitle {
    title: string;
    id?: string;
    value?:string
}