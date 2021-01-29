const {MongoClient,ObjectID}=require('mongodb')
const url="mongodb://localhost:27017"
const database="family"
MongoClient.connect(url,(err,client)=>{
    if(err){
        console.log('unable to connet')
    }
    const db=client.db(database)
    // db.collection('family').insertOne({
    //     name:'vinod',
    //     brother:'manoj'
    // },(err,result)=>{
    //     if(err){
    //         console.log(err)
    //     }
    //     console.log(result.ops[0].name)
    // })
})
const id=new ObjectID()
console.log(id.)


const path=require('path')
const express=require('express')
const app=express()
const sataticPath=path.join(__dirname,"../public")
const hbsPath=path.join(__dirname,"../templates/views")
const hbsPatpath=path.join(__dirname,"../templates/partials")
const hbs=require('hbs')
const { rejects } = require('assert')
app.set('view engine','hbs')
app.set('views',hbsPath)
hbs.registerPartials(hbsPatpath)
app.use(express.static(sataticPath))
app.get('',(req,res)=>{
    res.render('index')
})
app.get('/mother',(req,res)=>{
    res.render('mother')
})
app.get('/father',(req,res)=>{
    res.render('father')
})
app.get('/brother',(req,res)=>{
    res.render('brother')
})


app.listen(3000,()=>{
    console.log('server is on')
})



const doPromise=new Promise(data,(resolve,reject)=>{
    const data=data
    setTimeout(() => {
        resolve(data)
        resolve('vinod')
        reject('erroeeeeeeeeeeee')

    }, 2000);
})

doPromise('dfgsfgsg').then((result)=>{
    console.log(result)
}).catch((err)=>{
    console.log(err)
})