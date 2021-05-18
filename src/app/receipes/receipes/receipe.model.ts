import { ingredient } from "src/app/shared/ingredient.model";

export class receipe{
    public name: string;
    public description: string;
    public imagePath: string;
    public ingredient:ingredient[];

    constructor(name:string, desc:string, imagePath:string,ingredient:ingredient[]){
        this.name=name;
        this.description=desc;
        this.imagePath=imagePath;
        this.ingredient=ingredient;
    }
}