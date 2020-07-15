module.exports = (req,res,next)=>{
  if(!req.user){
   return   res.send({err:'please authenticate'})
  }
     next()
}