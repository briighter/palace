import { User } from './user';

export interface GameHistory {
    gameId?: number;
    gameNumber?: number;
    game: string;
    numberOfItems: number;
    numberOfSeconds: number;
    gameResult: string;
    user?: User;
}
