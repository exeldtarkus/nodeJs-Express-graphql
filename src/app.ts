import express, {Express} from 'express';
import bodyParser from 'body-parser';
import {indexRouter} from './routers/index_router';

const app: Express = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text({type: '*/*'}));

app.use(indexRouter);

export default app;
