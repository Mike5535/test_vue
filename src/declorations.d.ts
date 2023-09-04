interface Task {
    id: number,
    value: string,
}

interface EventDate {
    id: number,
    value: string,
}

interface Status {
    id: number,
    value: string,
}

interface Event {
    dateId: number,
    taskId: number,
}

enum DateFormat { 
    dd_mm_yyyy = 'dd.mm.yyyy', 
}
