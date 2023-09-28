import crypto from "crypto"
import { usersCollection } from "../database/Schema/UsersSchema.js";

function generateApiKey(length) {
    const apiKey = crypto
      .randomBytes(Math.ceil(length / 2))
      .toString('hex')
      .slice(0, length);
    return apiKey;
  }
export const generate_Api_key_Helper=async(req,res)=>{
try {
    const userId= req.userId
const apiKeyLength=17


    const  apiKey = generateApiKey(apiKeyLength)
// ! save the api key to the data base
const updateApiKey=await usersCollection.findByIdAndUpdate(userId,{
    secret_key:apiKey
})
if(updateApiKey){
    return res.status(201).json({
        apiKey:apiKey,
        message:"api key generated successfully"
    })
}


} catch (error) {
    
    res.status(500).json({errorMessage:"internal server error ,please try again !",error:error})
}

}