export function formatDate(dateString:string) {
    const date = new Date(dateString); 
    if (isNaN(date.getTime())) { 
        return 'Invalid Date';
    }
    
    const day = String(date.getDate()).padStart(2, '0'); 
    const month = String(date.getMonth() + 1).padStart(2, '0'); 
    const year = date.getFullYear(); 

    return `${day}.${month}.${year}`;
}


export const getWithin15Date = (today: Date) => {
    const endDate = new Date(today); 
    endDate.setDate(today.getDate() + 14); 

    return { 
        startDate: today.toISOString().slice(0, 10), 
    };
};