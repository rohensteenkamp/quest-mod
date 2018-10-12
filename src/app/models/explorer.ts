export class Explorer {

    constructor(key: string, data: ExplorerData) {
        this.key = key;
        this.name = data.name;
        this.surname = data.surname;
        this.xp = data.xp;
    }

    key: string;
    name: string;
    surname: string;
    xp: number;

    toData(): ExplorerData {
        return {
            name: this.name,
            surname: this.surname,
            xp: this.xp
        } as ExplorerData
    }

}

export class ExplorerData {
    name: string;
    surname: string;
    xp: number;
}