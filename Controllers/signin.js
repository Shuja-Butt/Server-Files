const signin=(db,bcryptjs)=>(req,res)=>
{
  // console.log("sign uo");
  // console.log(req.body.email);
  // console.log(req.body.pass);
  // Load hash from your password DB.
 const{email,pass}=req.body;
 db('login')
 .where({email})
 .returning('*')
 .then(data=>{
  if(bcryptjs.compareSync(pass, data[0].hash))
{
   db.select('*').from('users').where('email','=',data[0].email).then(user=>res.json(user));

} else
{
res.status(400).json("Wrong Credentilas");
 
}})
}

module.exports={
	signin
}