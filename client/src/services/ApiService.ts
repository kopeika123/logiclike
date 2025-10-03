import axios from 'axios';
import {IApiService} from "../interfaces/IApiService";
import {Idea} from "../interfaces/Idea";


export class ApiService implements IApiService {
    private apiUrl: string;

    constructor(apiUrl: string) {
        this.apiUrl = apiUrl;
    }

    async fetchIdeas(): Promise<Idea[]> {
        const response = await axios.get(`${this.apiUrl}/ideas`);
        return response.data;
    }

    async voteForIdea(ideaId: number): Promise<void> {
        await axios.post(`${this.apiUrl}/vote`, { ideaId });
    }
}
