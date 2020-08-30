const profile=(req,res)=>
{
 const {id}=req.params;
  db('users').where({id}).then(data=>

    {if(data.length){
      res.json(data[0])
    }else{
      res.status(404).json("Not fOund");    }

    })
}
module.exports={
	profile
}