const express = require('express');
const bodyParser = require('body-parser');

const promoRouter = express.Router();
promoRouter.use(bodyParser.json())
promoRouter.route('/')
    .all((req,res,next)=>{
        req.statusCode=200;
        res.setHeader('Content-Type','text/plain');
        next();
    })
    .get((req,res,next)=>{
        res.end(`Will send you promotions!`)
    })
    .post((req,res,next)=>{
        res.end(`Will add the promotion ${req.body.name} with details ${req.body.description}`);
    })
    .put((req,res,next)=>{
        res.statusCode=403;
        res.end(`PUT not supported on /promotions`);
    })
    .delete((req,res,next)=>{
        res.end(`Deleting all the promotions`);
    });

promoRouter.route('/:promoId')
    .all((req,res,next)=>{
        req.statusCode=200;
        res.setHeader('Content-Type','text/plain');
        next();
    })
    .get((req,res,next)=>{
        res.end(`Will send you promotions with id: ${req.params.promoId}`)
    })
    .post((req,res,next)=>{
        res.statusCode=403;
        res.end(`POST not supported on /:promoId`);
    })
    .put((req,res,next)=>{
        res.end(`Will update the promotion ${req.params.promoId} with details ${req.body.name} ${req.body.description}`);
    })
    .delete((req,res,next)=>{
        res.end(`Deleting promotion with id: ${req.params.promoId}`);
    });

module.exports = promoRouter;