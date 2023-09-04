export const dateFormat = (date: Date, format: DateFormat) => {
    let resData = null;
    switch(format) {
        case('dd.mm.yyyy'):
            let days = date.getDay().toString();
            if(days.length === 1) {
                days = `0${days}`;
            }

            let mounth = date.getMonth().toString();
            if(mounth.length === 1) {
                mounth = `0${mounth}`;
            }
            
            const year = date.getFullYear();
            resData = `${days}.${mounth}.${year}`;
            break;
    }
    console.log('resData',resData,format)
    return resData;
}
