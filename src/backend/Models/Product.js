import mongoose from 'mongoose';

const reportSchema = mongoose.Schema({ //สร้าว model มาแล้ว เปรียบเสมือนสร้างตาราง
    name:String, //สร้าง field มาแล้ว
    location:{
        type:String
    },
    issue: {
        type:String
    },
    details:{
        type:String
    }
}, )
//ที่ detail กับ location มีปีกกา แล้วก็ type มันเป็นการสร้างให้สามารถตั้งค่าคุณสมบัติอื่นๆอีกได้ แต่ name ตั้งค่าได้แค่ชื่อ ที่เป็น string

export default mongoose.model('Report', reportSchema);
