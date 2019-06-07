export class PetSize {
    public id: string;
    public name: string;

    constructor(
        petSize ?: PetSize
    ) {
        Object.assign(this, petSize);
    }
}