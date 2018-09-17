export class Planet {

    constructor(key: string, data: PlanetData){
        this.key = key;
        this.name = data.name;
        this.description = data.description;
    }
    
        key: string;
        name: string; 
        description: string;
    }

export class PlanetData {
    name: string;
    description: string;
}