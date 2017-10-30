import { User } from './user-entity';
import { Transport } from './transport-entity';

export class Transaction {

    constructor(
        public id: number, 
        public user: User, 
        public transport: Transport, 
        public dateTime: Date) {
    }

}