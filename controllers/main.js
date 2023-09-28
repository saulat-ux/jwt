const {BadRequest} = require("../errors/");
const jwt =require('jsonwebtoken')



const login = async (req, res) =>{
    const {username , password} =req.body


    if(!username || !password){
        throw new BadRequest('Please prvide email and password')
    }

    const id = new Date().getDate()
    // never send password here
    const token = jwt.sign({id,username},process.env.JWT_SECRET,{
        expiresIn:'30d'
    })
    res.status(200).json({msg:'user created',token})

    console.log(username,password,req.body)
    res.send('fake login/register/signup route')
}

const dashboard = async (req, res) =>{
    console.log(req.user)

    const luckyNumber = Math.floor(Math.random()*100)
    res.status(200).json({msg:`hello ,${req.user.username}` ,
     secret: `here is you authorize data, you lukcy number is ${luckyNumber}`})
    
}

module.exports = {
    login,dashboard
}