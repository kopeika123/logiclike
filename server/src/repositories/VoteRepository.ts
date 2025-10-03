import Vote from "../models/Vote";

export class VoteRepository {
    async findByIpHash(ipHash: string): Promise<Vote[]> {
        return Vote.findAll({ where: { ip_hash: ipHash } });
    }

    async create(data: { ip_hash: string; idea_id: number }): Promise<Vote> {
        return Vote.create(data);
    }
}
