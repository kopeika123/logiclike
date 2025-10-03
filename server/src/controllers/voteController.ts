import { Request, Response } from 'express';
import {IVotingService} from "../interfaces/IService";


export class VoteController {
    constructor(private votingService: IVotingService) {}

    async vote(req: Request, res: Response): Promise<void> {
        const { ideaId } = req.body;
        const ip = req.clientIP;
        console.log(ip)
        if (!ip) {
            res.status(400).json({ error: 'Не удается определить IP-адрес' });
            return;
        }

        try {
            await this.votingService.voteForIdea(ideaId, ip);
            res.json({ success: true });
        } catch (error: any) {
            res.status(409).json({ error: error.message });
        }
    }
}
