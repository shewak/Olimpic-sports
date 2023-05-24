const express = require("express")
const path = require("path")
const {exec} = require("child_process")

router = express.Router()

router.get("/estimate-form.html",(req,res)=>{
    res.sendFile(path.join(__dirname,"template","html","estimate-form.html"))
})

router.get("/dashboard.html",(req,res)=>{
    res.sendFile(path.join(__dirname,'template','html','dashboard.html'))
})

router.get("/report.html",(req,res)=>{
    res.sendFile(path.join(__dirname,"template","html","report.html"))
})
router.post("/get-cost",(req,res)=>{
    var age = req.body.age
    var gender = req.body.gender
    var bmi = req.body.bmi
    var child = req.body.child
    var smoker = req.body.smoker
    var region = req.body.region

    exec("python main.py "+age+" "+gender+" "+bmi+" "+child+" "+smoker+" "+region,(error,stdout,stderr)=>{
        if(error){
            console.log(error)
        } 
        res.send(stdout)
        res.end()
        

    })
})

router.get("/",(req,res) =>{
    res.sendFile(path.join(__dirname,"template","html","home.html"))
})

module.exports = router;
