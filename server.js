
const express=require('express');
const app=express();
const cors=require('cors')
app.use(cors());
const data=require("./data");
const {StatusCodes}=require("http-status-codes")


app.use(express.json())


app.get("/products",(req,res)=>{
    res.status(200).send(data.products);
})

app.get("/products/slug/:id",(req,res)=>{
    const {id}=req.params;
    const product=data.products.find(product=>product.slug===id);
    if(product) {
        return res.status(StatusCodes.OK).send(product);
    }else{
        return res.status(StatusCodes.NOT_FOUND).send({message:"Product not found"})
    }
})

app.get("/products/:id",(req,res)=>{
    const {id}=req.params;
    const product=data.products.find(product=>product._id===id);
    if(product) {
        return res.status(StatusCodes.OK).send(product);
    }else{
        return res.status(StatusCodes.NOT_FOUND).send({message:"Product not found"})
    }
})



app.listen(4000,console.log('app running at http://localhost:4000'))