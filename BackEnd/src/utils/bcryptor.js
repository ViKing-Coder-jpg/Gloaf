const bcrypt=require('bcrypt')

const hashing=async (password)=>{
    const hashedPassword=await bcrypt.hash(password,10)
    return hashedPassword
}

const dehashing=async (password,hashcode)=>{
    const res =await bcrypt.compare(password,hashcode)
    if(!res){
        return false
    }
    return true
}
module.exports={
    hashing,
    dehashing
}
