import { IVotingService } from '../interfaces/IService';
import { IdeaRepository } from '../repositories/IdeaRepository';
import { VoteRepository } from '../repositories/VoteRepository';
import crypto from 'crypto';

export class VotingService implements IVotingService {
    constructor(
        private ideaRepo: IdeaRepository,
        private voteRepo: VoteRepository
    ) {}

    async getIdeas() {
        return this.ideaRepo.findAll();
    }

    async voteForIdea(ideaId: number, ip: string): Promise<void> {
        const ipHash = crypto.createHash('sha256').update(ip).digest('hex');

        const idea = await this.ideaRepo.findById(ideaId);
        if (!idea) throw new Error('Идея не найдена');

        const userVotes = await this.voteRepo.findByIpHash(ipHash);
        const votedIdeaIds = userVotes.map(v => v.idea_id);
        const uniqueIdeas = new Set(votedIdeaIds);

        if (uniqueIdeas.has(ideaId)) {
            throw new Error('Уже проголосовали за эту идею');
        }

        if (uniqueIdeas.size >= 10) {
            throw new Error('Превышен лимит голосов');
        }

        await this.voteRepo.create({ ip_hash: ipHash, idea_id: ideaId });
        await this.ideaRepo.incrementVotes(ideaId);
    }
}
