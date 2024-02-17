import { Schema, model, models } from "mongoose";


export interface IImage extends Document {
    title: string;
    transformationtype: string;
    publicId: string;
    secureUrl: URL;
    width?: number;
    height?: number;
    config?: Object;
    transformationUrl?: URL;
    aspectRatio?: string;
    color?: string;
    prompt?: string;
    author?: {
        _id:string;
        firstName:string;
        lastName:string;
    }
    createdAt?: Date;
    UpdatedAt?: Date;
  }
  


const ImageSchema= new Schema({
    title:{type:String,required:true},
    transformationtype:{type:String,required:true},
    publicId:{type:String,required:true},
    secureUrl:{type:URL,required:true},
    width:{type:Number},
    height:{type:Number},
    config:{type:Object},
    transformationUrl:{type:URL},
    aspectRatio:{type:String},
    color:{type:String},
    prompt:{type:String},
    author:{type:Schema.Types.ObjectId,ref:'Usr'},
    createdAt:{type:Date,default:Date.now},
    UpdatedAt:{type:Date,default:Date.now},

})

const Image= models?.Image || model('Image',ImageSchema);

export default Image;