export class Quest {

    constructor(key: string, data: QuestData){
        this.key = key;
        this.title = data.title;
        this.description = data.description;
        this.level1 = data.level1;
        this.level2 = data.level2;
        this.max_xp = data.max_xp;
        this.order = data.order;
        this.prerequisites = data.prerequisites;
    }
    
        key: string;
        title: string; 
        description: string;
        level1: string;
        level2: string;
        max_xp: string;
        order: number;
        prerequisites: string;
    
    toData(): QuestData {
        return {
            title: this.title,
            description: this. description,
            level1: this.level1,
            level2: this.level2,
            max_xp: this.max_xp,
            order: this.order,
            prerequisites: this.prerequisites
        } as QuestData;    
    }

}

export class QuestData {
    title: string;
    description: string;
    level1: string;
    level2: string;
    max_xp: string;
    order: number;
    prerequisites: string;
}