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


export const getWithin15Date = () => {
    const today = new Date(); 
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1)
    const endDate = new Date(tomorrow); 
    endDate.setDate(tomorrow.getDate() + 14); 

    return { 
        startDate: tomorrow.toISOString().slice(0, 10), 
        endDate: endDate.toISOString().slice(0, 10),
    };
};