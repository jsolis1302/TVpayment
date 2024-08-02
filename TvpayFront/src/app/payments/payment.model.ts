export class Payment{
    constructor(public payId:number, public payDate:Date, public url:string, public amount:number,
        public userId:number
     ){}
}