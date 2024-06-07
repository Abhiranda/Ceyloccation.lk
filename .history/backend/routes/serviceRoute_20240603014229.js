import express from "express"
import { addService,listService,removeService} from "../controllers/serviceController.js"
import multer from "multer"

const serviceRouter = express.Router();

//image storage engine
const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})

const upload = multer({storage:storage})

foodRouter.post("/add",upload.single("image"),addFood) 
foodRouter.get("/list",listFood)
foodRouter.post("/remove",removeFood);









export default foodRouter;