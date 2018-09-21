export class Quest {

    constructor(key: string, data: QuestData){
        this.key = key;
        this.title = data.title;
        this.description = data.description;
    }
    
        key: string;
        title: string; 
        description: string;
    
    toData(): QuestData {
        return {
            title: this.title,
            description: this. description
        } as QuestData;    
    }

}

export class QuestData {
    title: string;
    description: string;
}