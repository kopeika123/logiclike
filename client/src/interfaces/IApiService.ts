import {Idea} from "./Idea";

export interface IApiService {
    fetchIdeas(): Promise<Idea[]>;
    voteForIdea(ideaId: number): Promise<void>;
}