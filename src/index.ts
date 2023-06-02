import app from './app';
import * as dotenv from 'dotenv';
import {logger} from './app/utils/log_util';
import chalk from 'chalk';

dotenv.config();

const port = process.env.APP_PORT || 8094;
app.listen(port, () => {
  logger.info(
    `${chalk.yellow('⚡️')}[server]: Server is running at`,
    chalk.underline(`http://localhost:${port}`)
  );
});

export default app;
