import { Router } from 'express';
import { VoteController } from '../controllers/voteController';
import {IdeaRepository} from "../repositories/IdeaRepository";
import {VoteRepository} from "../repositories/VoteRepository";
import {VotingService} from "../services/VotingService";
import {IdeaController} from "../controllers/IdeaController";

const router = Router();

// Инициализация зависимостей
const ideaRepo = new IdeaRepository();
const voteRepo = new VoteRepository();
const votingService = new VotingService(ideaRepo, voteRepo);
const ideaController = new IdeaController(votingService);
const voteController = new VoteController(votingService);

// Роуты
router.get('/ideas', ideaController.getIdeas.bind(ideaController));
router.post('/vote', voteController.vote.bind(voteController));


export default router;
