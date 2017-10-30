import { User } from './user-entity';
import { Transport } from './transport-entity';

export class Comment {

    constructor(
        public id: number, 
        public user: User, 
        public transport: Transport, 
        public text: string) {
        
    }
}