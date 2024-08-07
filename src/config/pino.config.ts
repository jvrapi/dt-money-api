import { Params } from 'nestjs-pino';

const pinoPrettyConfig = {
  target: 'pino-pretty',
  options: { singleLine: true },
};

export const PinoFactory = (): Params => {
  return {
    pinoHttp: {
      name: 'TRANSCATION API',
      transport: process.env.NODE_ENV !== 'production' && pinoPrettyConfig,
    },
  };
};
