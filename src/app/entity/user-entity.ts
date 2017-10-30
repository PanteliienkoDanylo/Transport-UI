import { Transaction } from './transaction-entity';
import { Comment } from './comment-entity';

export enum Role {
    ADMIN,
    USER,
    MODERATOR,
    GUEST
}

export class User {

    constructor(
        public id: number,
        public login: string,
        public password: string,
        public email: string,
        public balance: number,
        public role: Role,
        public firstName: string,
        public lastName: string,
        public birtday: Date,
        public transactions: Array<Transaction>,
        public comments: Array<Comment>) {
    }
}