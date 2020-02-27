import * as crypto from 'crypto'
import * as fs from 'fs'
import * as path from 'path'

// Read the public key
const public_key = fs.readFileSync('keys/public_key.pem', 'utf-8');

// Get the signature
const signature = fs.readFileSync(path.resolve(__dirname, 'signature.txt'), 'utf-8');

// File to be verified
const document = fs.readFileSync(path.resolve(__dirname, 'document.txt'));

// Create a verification sign
const verifier = crypto.createVerify('RSA-SHA256');
verifier.write(document);
verifier.end();

// Match file signature with the public key against the signature provided
const result = verifier.verify(public_key, signature, 'base64');

// Shows if it worked or not!
console.log(`Digital Signature Verification: ${result}`);