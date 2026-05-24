export interface Task{
    _id : string,
   
   /*
    user : {
        nombre : string,
        email : string, 
    }
        
    */
    header: string,
    body: string,
    footer: string,
    createdAt : Date,
    status : "pending" | "attended" | "completed"
}