import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/database';

class Idea extends Model {
    public id!: number;
    public title!: string;
    public description!: string;
    public votes!: number;
    public readonly voteRecords?: any[];
}

Idea.init({
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: false },
    votes: { type: DataTypes.INTEGER, defaultValue: 0 },
}, { sequelize, modelName: 'idea' });

export default Idea;
