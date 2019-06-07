import { PetSize } from './PetSize';
import { PetType } from './PetType';
import { User } from './User';

export class MedicalRecord {
    public id: string;
    public name: string;
    public user: User;
    public pet_type: PetType;
    public pet_size: PetSize;

    constructor(
        medicalRecord ?: MedicalRecord
    ) {
        Object.assign(this, medicalRecord);
    }
}