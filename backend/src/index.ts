import express, { Request, Response } from 'express'
import cors from 'cors'
import winston from 'winston'
import db from '../Database/db'

const app = express()
const port = 8080

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' })
    ]
});

interface User {
    user_id: number,
    username: string,
    email: string,
    password_hash: string,
    created_at: string,
    updated_at: string
}

app.use(cors());
app.use(express.json());

app.get('/getUser', async (req: Request, res: Response) => {
    logger.info('GET /getUser');
    try {
        const userId = req.query.user_id as string;
        if (!userId) {
            logger.error('Missing user_id parameter')
            return res.status(400).json({ message: 'Missing user_id parameter' })
        }
        const { rows: users }: { rows: User[] } = await db.query('SELECT * FROM users WHERE user_id = $1', [userId])
        logger.info('Data fetched successfully, responding with 200 status')
        res.status(200).json(users)
    } catch (err) {
        logger.error('Error fetching data:', err)
        res.status(500).json({ message: 'Internal server error' })
    }
});

app.get('/', (req: Request, res: Response) => {
    res.send('Server is live');
});
    
app.listen(port, () => {
    logger.info(`Server running at http://localhost:${port}`);
});