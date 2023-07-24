//yarn tsc
import express from 'express';
import mongoose from 'mongoose';
import { router } from './router';

mongoose.connect('mongodb://localhost:27017').then(() => {
    const app = express();
    app.listen( 3001, () => {
        console.log('server is running')
    })

    app.use(express.json())
    app.use(router);
    
    app.use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', '*');
        res.setHeader('Access-Control-Allow-Headers', '*');
  
        next();
      })
    console.log('conectado ao mongo')
}).catch(() => {
    console.log('Erro ao conectado ao mongo')
})

