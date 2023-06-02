/* eslint-disable no-console */
import chalk from 'chalk';
import * as dotenv from 'dotenv';
import moment from 'moment';

dotenv.config();

enum ELogLevels {
  error = '[ERROR]',
  warn = '[WARNING]',
  info = '[INFO]',
  http = '[HTTP]',
  debug = '[DEBUG]',
}

enum ELogStage {
  start = '[START]',
  end = '[END]',
}

const loggerConfig = (logLevel: ELogLevels, ...str: string[]) => {
  if (str.length > 0) {
    let fullStr = str[0];
    for (let i = 1; i < str.length; i++) {
      fullStr += ` - ${str[i]}`;
    }

    switch (logLevel) {
      case ELogLevels.info: {
        return console.log(chalk.green(`${ELogLevels.info}    | `), fullStr);
      }

      case ELogLevels.warn: {
        return console.log(chalk.yellow(`${ELogLevels.warn} | `), fullStr);
      }

      case ELogLevels.debug: {
        if (process.env.APP_DEBUG === 'true') {
          return console.log(
            chalk.magenta(`${ELogLevels.debug}   | `),
            fullStr
          );
        }
        break;
      }

      case ELogLevels.error: {
        return console.log(
          chalk.red(
            `${ELogLevels.error} - [${moment().format(
              'YYYY-MM-DD HH:mm:ss'
            )}] | `
          ),
          fullStr
        );
      }

      default: {
        return console.log(chalk.red('[ERROR] - [logLevel] - [NOT FOUND]'));
      }
    }
  }
};

const logger = () => {};

logger.info = (...str: string[]) => {
  return loggerConfig(ELogLevels.info, ...str);
};

logger.warn = (...str: string[]) => {
  return loggerConfig(ELogLevels.warn, ...str);
};

logger.error = (...str: string[]) => {
  return loggerConfig(ELogLevels.error, ...str);
};

logger.debug = (...str: string[]) => {
  return loggerConfig(ELogLevels.debug, ...str);
};

const log = (...str: string[]) => {
  if (str.length > 0) {
    let fullStr = str[0];
    for (let i = 1; i < str.length; i++) {
      fullStr += ` - ${str[i]}`;
    }
    console.log(fullStr);
  }
};

export {log, logger, ELogStage};
