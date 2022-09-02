import express from 'express';
import 'dotenv/config';
import router from './src/routes/router';

const app = express();

app.use(express.json());
app.use(router);
app.listen(3000);

// npm run dev
