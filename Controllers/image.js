const image=(req,res,db)=>
{


   




  const{id}=req.body;
  db('users').where({id}).increment('entries',1).returning('entries').then(rank=>res.json(rank)); // db('users')
  // .where('id', '=',id ).update({entries:})
  // .increment('entries',1).then(data=>res.json(data));
  // .update({
  //   entries:increment('entries',1)
  // }).then(r=>res.json(r)).then(console.log);
}

module.exports={
	image
}