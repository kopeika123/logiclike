import Idea from "../models/Idea";

export class IdeaRepository {
    async findAll(): Promise<Idea[]> {
        return Idea.findAll({ order: [['votes', 'DESC']] });
    }

    async findById(id: number): Promise<Idea | null> {
        return Idea.findByPk(id);
    }

    async create(data: { title: string }): Promise<Idea> {
        return Idea.create(data);
    }

    async update(id: number, data: Partial<Idea>): Promise<void> {
        await Idea.update(data, { where: { id } });
    }

    async incrementVotes(id: number): Promise<void> {
        await Idea.increment('votes', { where: { id } });
    }
}
