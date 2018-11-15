export class Message{
    event: string;
    data: Object;

    constructor(event, data){
        this.event = event;
        this.data = data
    }
}