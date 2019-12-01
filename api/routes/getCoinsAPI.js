var express = require('express');
var request = require('request');
var router = express.Router();

router.get('/', function(req, res) {
    const requestOptions = {
        method: 'GET',
        uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
        qs: req.query,
        headers: {
            'X-CMC_PRO_API_KEY': '55b3d02d-9345-443b-8b23-f33efb1700a2'
        },
        json: true,
        gzip: true
    };
    request(requestOptions).pipe(res);
});

module.exports = router;
