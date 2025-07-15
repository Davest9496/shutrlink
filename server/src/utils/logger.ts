const winston = require('winston');
import DailyRotateFile from 'winston-daily-rotate-file';

const { combine, timestamp, errors, json, colorize, simple } = winston.format;

const logFormat = combine(timestamp(), errors({ stack: true }), json());

export const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: logFormat,
  transports: [
    new winston.transports.Console({
      format: combine(colorize(), simple()),
    }),
    new DailyRotateFile({
      filename: 'logs/application-%DATE%.log',
      datePattern: 'YYYY-MM-DD',
      maxSize: '20m',
      maxFiles: '14d',
    }),
  ],
});
