import express from 'express';
import cors from 'cors';
import { sequelize } from './config/database';
import voteRoutes from './routes/voteRoutes';
import { ipMiddleware } from './middleware/ipMiddleware';

const app = express();

app.use(cors());
app.use(express.json());
app.use(ipMiddleware);
app.set('trust proxy', true);
app.use('/api', voteRoutes);

sequelize
    .sync({ force: false })
    .then(() => {})
    .catch((err) => {
        console.error('Ошибка синхронизации базы данных:', err);
    });

export default app;
