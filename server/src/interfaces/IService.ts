export interface IVotingService {
    getIdeas(): Promise<any[]>;
    voteForIdea(ideaId: number, ip: string): Promise<void>;
}
