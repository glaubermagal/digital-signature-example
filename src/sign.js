import * as crypto from 'crypto'
import * as fs from 'fs'
import * as path from 'path'

// Read the private key
const private_key = fs.readFileSync('keys/private_key.pem', 'utf-8');

// Read document to be signed
const document = fs.readFileSync(path.resolve(__dirname, 'document.txt'));

// Create sign
const signer = crypto.createSign('RSA-SHA256');
signer.write(document);
signer.end();

// Sign the document with the private key
const signature = signer.sign(private_key, 'base64')

// Write signature to a file
fs.writeFileSync(path.resolve(__dirname, 'signature.txt'), signature);

// Output Digital Signature
console.log(`Digital Signature: ${signature}`);