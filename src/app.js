const express=require("express")
const mongoose=require("mongoose")
const path=require("path");
const hbs=require("hbs");
// const partials=require("partials");

const port=process.env.PORT || 8000;

const app=express();
// app.use(express.json());


app.set("view engine","hbs");
app.set("views",path.join(__dirname,"/templates/views/"));
hbs.registerPartials(path.join(__dirname,"/templates/partials/"));

app.use(express.static(path.join(__dirname,'/public')));
app.get("/",(req,res)=>{
    res.render("index");
})
app.get("/about",(req,res)=>{
    res.render("about");
})
app.get("/service",(req,res)=>{
    res.render("service");
})
app.get("/portfolio",(req,res)=>{
    res.render("portfolio");
})
app.get("/contact",(req,res)=>{
    res.render("contact");
})
app.get("*",(req,res)=>{
    res.send("OOPS, Page not found. Its 404 PAGE NOT FOUND ERROR")
})

app.listen(port, ()=>{
    console.log("Ho gaya challu server");
})