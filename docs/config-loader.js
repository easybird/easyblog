import config from './config.json';

export const LAYOUT = config[process.env.NODE_ENV || "development"].layout;

export const REACT = config.react;

export const BASE_PATH = __dirname;