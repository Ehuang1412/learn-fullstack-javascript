module.exports = {
    //This configuration instructs babel to use the two presets that we're interested in,
    //one to transform the jsx, and the other for us to safely use modern JavaScript
    //features and not worry about browsers that do not understand them. 
    presets: ['@babel/preset-env', '@babel/preset-react'],
    // presets: ['@babel/react', '@babel/env'],

    //This plug-in here is needed to enable the use of the new class fields syntax in 
    //classes
    plugins: ['@babel/plugin-proposal-class-properties'],
};