
const env = process.env;
//|| is default
//For example, let's export a constant, nodeEnv. Set that to env.NODE_ENV and default
//to development.
export const nodeEnv = env.NODE_ENV || 'development';

export const logStars = function(message) {
    console.info('**********');
    console.info(message);
    console.info('**********');
};
//When we import with this syntax, we're importing the default exported object in the
//config module. 
//For example, let's export default object with a port property, and let's
//make this property reads from env.PORT and default to 8080. This way we can control the
//port from the process, but we don't have to

export default {
    port: env.PORT || 8080
};