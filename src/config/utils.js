import { prop }  from 'ramda';

const getEnv = env => env || process.env.NODE_ENV || 'development';
const getConfig = config => env => prop(getEnv(env), config);

export {
  getEnv,
  getConfig,
}

