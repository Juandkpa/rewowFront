export class PetType {
    public id: string;
    public name: string;

    constructor(
        petType ?: PetType
    ) {
        Object.assign(this, petType);
    }
}