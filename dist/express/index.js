//const express = require('express');
import express from 'express';
//const bodyParser = require('body-parser');
import bodyParser from 'body-parser';
//const cors = require('cors');
import cors from 'cors';
//const mongodb = require('mongodb');
import mongodb from 'mongodb';
import path from 'path';
import { fileURLToPath } from 'url';
const app = express()
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(bodyParser.json())
app.use(cors())

import posts from './routes/api/posts.js'
app.use('/api/posts', posts)

app.use(express.static(__dirname + '/../'))
app.get('/.*/', (req,res) => res.sendFile(path.join(__dirname, '/../index.html')))


const port = process.env.PORT || 3000;
    
app.listen(port, () => console.log('Server started on port '+port))