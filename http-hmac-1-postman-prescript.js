/**
 * @Author: 4lador
 * date: 10/22/2018
 * description: Postman Pre-Request Script that Generate HMAC-SHA1 valid 'Authorization' header following HTTP signature scheme.
 *              details: https://github.com/arkerone/api-key-auth/blob/HEAD/signature.md
 *              ex: 'Signature keyid="123456789",algorithm="hmac-sha1",headers="date",signature="X+DG+jRFd/4C+81XmUXQoimry7c="'
 *              Useful for app authentication combined with this package: https://github.com/arkerone/api-key-auth#readme
 */ 

// definitions
function encode(message, key) {
    console.log('generateSignature("' + message + '", ' + key + ');');
    var enc = CryptoJS.HmacSHA1(message, key).toString(CryptoJS.enc.Base64);
    return enc;
}

// Set Date
pm.environment.set("date", new Date().toUTCString());
var date = pm.environment.get("date");

// Get Environment variables
var publicKey = pm.environment.get("public_key");
var privateKey = pm.environment.get("private_key");

// Get all needed strings
var message = 'date: ' + date;
var signature = encode(message, privateKey);

// Generate authorization string
var authorization = 'Signature keyid="' + publicKey + '",algorithm="hmac-sha1",headers="date",signature="' + signature + '"';

console.log('signature: ' + signature);
console.log('authorization: ' + authorization);

pm.environment.set("authString", authorization);