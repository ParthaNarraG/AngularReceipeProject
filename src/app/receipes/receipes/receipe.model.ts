import { ingredient } from "src/app/shared/ingredient.model";

export class receipe{
    public name: string;
    public description: string;
    public imagePath: string;
    public ingredient:ingredient[];
    public type:string;
    public id?:number;

    constructor(name:string,desc:string,imagePath:string,ingredient:ingredient[],type:string){
        this.name=name;
        this.description=desc;
        this.imagePath=imagePath;
        this.ingredient=ingredient;
        this.type=type;
    }
}