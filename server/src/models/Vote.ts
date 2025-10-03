import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/database';
import Idea from './Idea';

class Vote extends Model {
    public id!: number;
    public ip_hash!: string;
    public idea_id!: number;
    public readonly idea?: Idea;
}

Vote.init({
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    ip_hash: { type: DataTypes.STRING, allowNull: false },
    idea_id: { type: DataTypes.INTEGER, allowNull: false },
}, { sequelize, modelName: 'vote', indexes: [{ unique: true, fields: ['ip_hash', 'idea_id'] }] });

Vote.belongsTo(Idea, { as: 'idea', foreignKey: 'idea_id' });
Idea.hasMany(Vote, { as: 'voteRecords', foreignKey: 'idea_id' });

export default Vote;
