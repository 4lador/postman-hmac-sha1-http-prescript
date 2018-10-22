# Postman HMAC-SHA1 HTTP Pre-request Script

## Description

Postman Pre-Request Script that Generate HMAC-SHA1 valid 'Authorization' header following HTTP signature scheme.
Useful for Node.js / Express.js app authentication combined with this package: [api-key-auth](ttps://github.com/arkerone/api-key-auth)

## HTTP scheme signatures
[HTTP scheme signatures](https://github.com/arkerone/api-key-auth/blob/HEAD/signature.md)

## Exemple Authorization output
Signature keyid="123456789",algorithm="hmac-sha1",headers="date",signature="X+DG+jRFd/4C+81XmUXQoimry7c="