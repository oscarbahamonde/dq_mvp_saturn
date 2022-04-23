import express from 'express';
import { json } from 'body-parser';

const app = express();

app.use(json());
app.use(express.static('public'));

app.listen(8000,()=> console.log('http://localhost:8000'));