import express from 'express';
import { createHandler } from 'graphql-http/lib/use/express';
import { schema, root } from './src/schema.js';
import 'dotenv/config'
import DB from "./src/dbConfig.js"
const app = express();

await DB()

app.all('/getweather', createHandler({ schema, rootValue: root }));

app.listen({ port: 4000 });
console.log('Listening to port 4000');
