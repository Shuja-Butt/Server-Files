const register=async  (req,res,db,bcryptjs)=>
{
 // console.log("register");

 const {email,name,pass}=req.body;

  if(!email || !name  || !pass)
  {
   // console.log('hello')
    res.status(400).json("Fields Empty")

  }
  else
  {
console.log('hello7')
  db.transaction(trx=>{
    let salt = bcryptjs.genSaltSync(10);
    let hash = bcryptjs.hashSync(pass, salt);
       trx.insert({
        hash:hash,
        email:email
       })
       .into('login').returning('email')
       .then(loginemail=>
       {
       return trx.insert({
        email:loginemail[0],
        name:name,
        date:new Date()
       }).into('users').returning('*')
       .then(data=>res.json(data))
       })
       .then(trx.commit)
       .catch(trx.rollback)
  }).catch(err=>res.status(400).json("Something Ent Wrong"))

}
//   try{
//  let u= await db('users').returning('*')
//   .insert(
//     {name:req.body.name,
//     email:req.body.email,
//     date:new Date()
//   })
//    // console.log(u);
//   await res.json(u)
// }
// catch(Err)
// {
//  res.status(400).json("Error ocuured");
// }
  //.then((user=>res.json(user))).catch(res.status(400).json("Error ocuured"));
  //err=>res.status(400).json(err));
}
module.exports={
  register
}