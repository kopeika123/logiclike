import { Request, Response } from 'express';
import { IVotingService } from '../interfaces/IService';

export class IdeaController {
    constructor(private votingService: IVotingService) {}

    async getIdeas(req: Request, res: Response): Promise<void> {
        const ideas = await this.votingService.getIdeas();
        res.json(ideas);
    }
}
