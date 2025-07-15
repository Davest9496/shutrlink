declare module 'winston-daily-rotate-file' {
  import { TransportStream } from 'winston';

  interface DailyRotateFileTransportOptions {
    filename?: string;
    dirname?: string;
    datePattern?: string;
    zippedArchive?: boolean;
    maxSize?: string | number;
    maxFiles?: string | number;
    createSymlink?: boolean;
    symlinkName?: string;
    auditFile?: string;
    frequency?: string;
    utc?: boolean;
    extension?: string;
    watchLog?: boolean;
    options?: object;
  }

  class DailyRotateFile extends TransportStream {
    constructor(options?: DailyRotateFileTransportOptions);
  }

  export = DailyRotateFile;
}
