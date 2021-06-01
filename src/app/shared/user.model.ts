export class user
{
    email:string;
    id:string;
    token:string;
     expiryDate:string;

     constructor(mail:string,localId:string,token:string,expiryDate:string){
        this.email=mail;
        this.id=localId;
        this.token=token;
        this.expiryDate=expiryDate;
     }

   
}