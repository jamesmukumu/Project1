import axios from "axios"
import dotenv from "dotenv"
dotenv.config()

const clientId=process.env .CLIENT_ID
const clientSecret=process.env.CLIENT_SECRET
export const Login_with_gitHub_helper=async(req,res)=>{

const urlParams=`?client_id=${clientId}&client_secret=${clientSecret}&code=${req.query.code}`
    await axios.post(`https://github.com/login/oauth/access_token${urlParams}`,{
        headers:{
            'Content-Type':'application/json',

        }
    }).then((data)=>{
       

// make an array at the & 
const resultsArray=data.data.split('&')

// loop through the pairs
for(const single of resultsArray){
    const [key,value]=single.split("=")
    if(key==='access_token'){
        res.status(200).json({token:value})
    }

}


    }).catch(err=>{
        res.status(401).json({error:err.message})
    })

    // ! get user data from 


}

// ! get user data function
export const Get_user_data_helper=async(req,res)=>{
try {
    const header= req.get("Authorization")
    console.log(header)
     await axios.get(`https://api.github.com/user`,{
         headers:{
             "Authorization":header
         }
     }).then(data=>{
         const{id,name,login,avatar_url}=data.data
         res.status(200).json({info:data.data})

     }).catch(err=>{
         res.status(401).json({errorMessage:"Bad credentials please try again",error:err.message})
         console.log(err)
     })
} catch (error) {
    res.status(500).json({errorMessage:"internal server error ,please try again !",error:error})
}
}