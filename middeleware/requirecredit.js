
module.exports =(req, res,next)=>{
    if(req.user.credits<1){
    return res.send({err:'please add credits'})
    }
    next()
}