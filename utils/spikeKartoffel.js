const getTokenCreator = require("spike-get-token");
const config = require('../config/config');
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';


var options = {
    ClientId: config.ClientId,
    ClientSecret: config.ClientSecret,
    spikeURL: config.spikeURL,
    spikePublicKeyFullPath: './publickey.pem',
    useRedis: false
};
const getToken = getTokenCreator(options);

module.exports = getToken;

