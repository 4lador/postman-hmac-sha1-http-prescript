# Postman HMAC-SHA1 HTTP Pre-request Script

Postman Pre-Request Script that Generate HMAC-SHA1 valid 'Authorization' header following HTTP signature scheme.

details: https://github.com/arkerone/api-key-auth/blob/HEAD/signature.md

ex: 'Signature keyid="123456789",algorithm="hmac-sha1",headers="date",signature="X+DG+jRFd/4C+81XmUXQoimry7c="'

Useful for app authentication combined with this package: https://github.com/arkerone/api-key-auth#readme
