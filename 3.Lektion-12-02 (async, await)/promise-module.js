const crypto = require('crypto');
let cryptoObject = {
    "title": "6 Secure Randoms",
    "randoms": []
};

//<editor-fold desc="never do this again">
crypto.randomBytes(48, function (err, buffer) {
    if (err) throw err;
    cryptoObject.randoms.push({length: 48, random: buffer.toString('hex')});
    crypto.randomBytes(40, function (err, buffer) {
        cryptoObject.randoms.push({length: 40, random: buffer.toString('hex')});
        crypto.randomBytes(32, function (err, buffer) {
            cryptoObject.randoms.push({length: 24, random: buffer.toString('hex')});
            crypto.randomBytes(24, function (err, buffer) {
                cryptoObject.randoms.push({length: 24, random: buffer.toString('hex')});
                crypto.randomBytes(16, function (err, buffer) {
                    cryptoObject.randoms.push({length: 16, random: buffer.toString('hex')});
                    crypto.randomBytes(8, function (err, buffer) {
                        cryptoObject.randoms.push({length: 8, random: buffer.toString('hex')});
                        console.log(JSON.stringify(cryptoObject))
                    });
                })
            });
        });
    });
});
//</editor-fold>

function makeSecureRandom(size) {
    return new Promise((resolve, reject) => {
        crypto.randomBytes(size, function (err, buffer) {
            resolve(buffer.toString('hex'))
        });
    });
}

async function makeSecureRandomVariable(list) {
    let cryptoObject = {
        "title": "6 Secure Randoms",
        "randoms": []
    };
    let calls = [];
    for (let value of list) {
        calls.push(makeSecureRandom(value))
    }
    await Promise.all(calls).then(values => {
        for (let value of values) {
            cryptoObject.randoms.push({length: value.length / 2, value: value});
        }
    });
    return JSON.stringify(cryptoObject);
}


module.exports = {makeSecureRandomVariable};



