const Product = require('../Models/Product')
const fs = require('fs');

exports.create = async (req,res) =>{
    try{
        var data = req.body;
        if (req.file){ //ถ้ามีไฟล์เข้ามา ก็เข้าเงื่อนไข เก็บ key แต่ถ้าไม่มีก็ไม่เป็นไร
            data.file = req.file.filename //สร้าง key 
        }
        
        console.log(data);
        const producted = await Product(data).save() //ส่งข้อมูลที่บันทึกเรียบร้อยแล้ว ไปให้หน้าบ้าน
        res.send(producted);
    }
    catch(err){
        console.log(err)
        res.status(500).send("Server error")
    }
    
}