### Create a private key
```
openssl genpkey -algorithm RSA -pkeyopt rsa_keygen_bits:4096 -pkeyopt rsa_keygen_pubexp:3 -out private_key.pem

```

### Create a public key
```
openssl pkey -in private_key.pem -out public_key.pem -pubout
```
