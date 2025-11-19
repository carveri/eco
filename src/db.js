import pg from "pg";



// Use this code snippet in your app.
// If you need more information about configurations or implementing the sample code, visit the AWS docs:
// https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/getting-started.html

import {
  SecretsManagerClient,
  GetSecretValueCommand,
} from "@aws-sdk/client-secrets-manager";

const secret_name = "ECO_SECRET";

const client = new SecretsManagerClient({
  region: "us-east-1",
});

let response;

try {
  response = await client.send(
    new GetSecretValueCommand({
      SecretId: secret_name,
      VersionStage: "AWSCURRENT", // VersionStage defaults to AWSCURRENT if unspecified
    })
  );
} catch (error) {
  // For a list of exceptions thrown, see
  // https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_GetSecretValue.html
  throw error;
}

const secret = response.SecretString;

// Your code goes here
console.log('secretito:', secret);

















// Your code goes here

export const pool = new pg.Pool({
    user: process.env.USER_PG,
    host: process.env.HOST_PG,
    password: process.env.PASSWORD_PG,
    database: process.env.DATABASE_PG,
    port: process.env.PORT_PG
})

pool.query('SELECT NOW()').then(result =>{
    //console.log('resultado de la db:', result);}
})