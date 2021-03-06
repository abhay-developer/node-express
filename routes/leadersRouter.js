const express = require('express');
const bodyParser = require('body-parser');

const leaderRouter = express.Router();
leaderRouter.use(bodyParser.json())
leaderRouter.route('/')
    .all((req,res,next)=>{
        req.statusCode=200;
        res.setHeader('Content-Type','text/plain');
        next();
    })
    .get((req,res,next)=>{
        res.end(`Will send you leaders!`)
    })
    .post((req,res,next)=>{
        res.end(`Will add the leader ${req.body.name} with details ${req.body.description}`);
    })
    .put((req,res,next)=>{
        res.statusCode=403;
        res.end(`PUT not supported on /leaders`);
    })
    .delete((req,res,next)=>{
        res.end(`Deleting all the leaders`);
    });

leaderRouter.route('/:leaderId')
    .all((req,res,next)=>{
        req.statusCode=200;
        res.setHeader('Content-Type','text/plain');
        next();
    })
    .get((req,res,next)=>{
        res.end(`Will send you leader with id: ${req.params.leaderId}`)
    })
    .post((req,res,next)=>{
        res.statusCode=403;
        res.end(`POST not supported on /:leaderId`);
    })
    .put((req,res,next)=>{
        res.end(`Will update the leader ${req.params.leaderId} with details ${req.body.name} ${req.body.description}`);
    })
    .delete((req,res,next)=>{
        res.end(`Deleting leader with id: ${req.params.leaderId}`);
    });

module.exports = leaderRouter;