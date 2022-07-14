import express, { Request, Response } from "express";
import multer from 'multer';


  const imageFilter = async (req: Request, file: any, cb: any) => {
    if (
      file.mimetype.includes("jpeg") ||
      file.mimetype.includes("png")
    ) {
      cb(null, true);
    } else {
      cb("Please upload only images file.", false);
    }
  };
  

const fileStrogeEngine = multer.diskStorage({
  destination:(req,file,cb)=>{
      cb(null,'/home/manish/Practical_Programs/ts_crud/src/resource/images')
      //cb(null,'/home/Practical_Programs/ts_crud/src/controller/');
  },
  filename:(req,file,cb)=>{
       console.log(file.originalname)
       cb(null,`${file.originalname}`)
       
     // cb(null,Date.now()+ "--" + file.originalname)
  }
})

const imageUpload = multer({storage:fileStrogeEngine,fileFilter: imageFilter})


export default imageUpload;