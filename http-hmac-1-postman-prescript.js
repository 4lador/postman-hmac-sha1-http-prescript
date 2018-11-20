// Set Date
pm.environment.set("date", new Date().toUTCString());
var date = pm.environment.get("date");

// Get Environment variables
var publicKey = pm.environment.get("public_key");
var privateKey = pm.environment.get("private_key");

// Set your headers here
var headersMap = new Map();
headersMap.set('date', date);
headersMap.set('content-type', 'application/json');

// iterate over the headers map and create the header string
var headersArr = [];
var headersNames = [];
headersMap.forEach(function(value, key) {
    headersArr.push(key + ': ' + value);
    headersNames.push(key);
});
var sHeaders = headersArr.join('\n');
var headersLabel = headersNames.join(' ');

// sign the header string
var signature = generateSignature(sHeaders, privateKey);

// generate authorization string
var authorization = 'Signature keyid="' + publicKey + '",algorithm="hmac-sha1",headers="' + headersLabel + '",signature="' + signature + '"';

// log results for debugging
console.log('signature: ' + signature);
console.log('authorization: ' + authorization);

// finally, set the authorization signature
pm.environment.set("authString", authorization);

// functions
function generateSignature(message, key) {
    console.log('generateSignature("' + message + '", ' + key + ');');
    var enc = CryptoJS.HmacSHA1(message, key).toString(CryptoJS.enc.Base64);
    return enc;
}
