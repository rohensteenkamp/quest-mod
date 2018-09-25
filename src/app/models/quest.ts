export class Quest {

    constructor(key: string, data: QuestData){
        this.key = key;
        this.title = data.title;
        this.description = data.description;
        this.max_xp = data.max_xp;
        this.order = data.order;
        this.prerequisites = data.prerequisites;
    }
    
        key: string;
        title: string; 
        description: string;
        max_xp: string;
        order: number;
        prerequisites: string;
    
    toData(): QuestData {
        return {
            title: this.title,
            description: this. description,
            max_xp: this.max_xp,
            order: this.order,
            prerequisites: this.prerequisites
        } as QuestData;    
    }

}

export class QuestData {
    title: string;
    description: string;
    max_xp: string;
    order: number;
    prerequisites: string;
}