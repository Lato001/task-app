export interface Task{
    _id : string,
    header: string,
    body: string,
    footer?: string,
    createdAt : Date,
    status : "pending" | "attended" | "completed"
}