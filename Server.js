

// //Server using  built-in htttp module
// // const server=require('http');
// // console.log("ServerFle");
// // const j={
// //  'start':456,
// //  'end ':6.98,
// // }


// //  let fserver=server.createServer((req,res)=>
// // {

// //    console.log('Headers',req.headers);
// //    console.log('URLS',req.url);
// //   console.log('Methods',req.method);
// //    res.setHeader('Content-Type','application/json');//text/html
// //    res.end(JSON.stringify(j));
// // }
// //  );
// // fserver.listen(3000);


// //Server using Express.js
//const bd=require('body-parser');

const server=require('express');
const BodyParser=require('body-parser');
const cors=require('cors');
const clarifai=require('clarifai');
//const bcrypt=require('bcrypt');
const  bcryptjs = require('bcryptjs');
const signin=require('./Controllers/signin.js');
const register=require('./Controllers/register.js');
const image=require('./Controllers/image.js');
const profile=require('./Controllers/profile.js');
const db=require('knex')({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'postgres',
    password : 'butt07023',
    database : 'smart'
  }
});


//console.log(db.select('*').from('users'));



let app=server();
app.use(BodyParser.json());
app.use(cors());




// const database={
//  Mercury: {
//   id:12,
//   name:"Mercury",
//   email:"mer@gmail.com",
//   pass:"1234",
//   rank:0,

//   },
//  Satrun:{
//  	id:11,
//   name:"Satrun",
//   email:"sat@gmail.com",
//   pass:"12346",
//   rank:0,

// },
// Jupiter:{
// id:10,
//   name:"Jupiter",
//   email:"Jup@gmail.com",
//   pass:"12384",
//   rank:0,
// }

// }


app.post("/signin",signin.signin(db,bcryptjs));
app.get("/",(req,res)=>{res.json("It is working")});
//bcrypt.compareSync("not_bacon", hash); // false

 // db('users').insert(
 // {
 //    name:req.body.email,
 //    email:req.body.pass,
 //    date:new Date()

 // }).catch(console.log)


 //  res.json("Helo user");


  // //console.log("sign up called");
  // if(req.body.email===database.Satrun.email && req.body.pass===database.Satrun.pass)
  // {
  // 	 //res.send("signup Successful")//.json();
  // 	 res.json("Signup Successfull")
  // }else
  // {
  // 	res.status(400).json("Failed")
  // }
// });

app.post("/clarifai",(req,res)=>{
 
const app = new Clarifai.App({
 apiKey: '6aa8b1d6466343cc9e1a35da614ffc41'
});
app.models.predict(Clarifai.FACE_DETECT_MODEL, req.body.input).then(data=>res.json(data)).catch(Err=>res.status(400).json("Error Occured"))


})


app.post("/register",(req,res)=>register.register(req,res,db,bcryptjs));



app.put("/image",(req,res)=>image.image(req,res,db));
 //   let array=Object.entries(database);
	// console.log(req.body.id);
	// let found=false;
 //   array.forEach(items=>
 //   { 
 //   	//console.log(items[1].id)
 //   	//console.log(typeof(items[1].id),typeof(req.body.id));
	// if(items[1].id==req.body.id)
	// {
 //     console.log("true");
 //     found=true;
 //     items[1].rank++;
 //      res.json(items); 
 //    return;
	// }
 //    // items.forEach(mini=>
 //    // {
 //       })
 //  if(!found)
 //  {
 //  	res.status(404).json("Nothing found");
 //  }
   

//     //    mini

//     // })
// } 	
// )





app.get("/profile/:id",(req,res)=>profile.profile(req,res));







// app.post("/login",(req,res)=>
// {
//    let array=Object.values(database);   
// let y=false;
//   array.forEach(item=>
//   {
//      if(item.email===req.body.email && item.pass===req.body.pass)
//      {
//        y=true;
//       // res.json("Login successful");
//        res.json(item);
//       return;
//      }



//   })
//  if(!y)
//  {
//  	res.json("Aythenitification Failed");
    
//  }






 














// })
















































app.listen(process.env.PORT || 3000,()=>console.log("Server is listenig to post"));
//middleware
// let j=bd.json();
// let uen=bd.urlencoded({extended:false})
//  mySever.use(bd.json());
// mySever.use(bd.urlencoded({ extended: false }));


//mySever.use(a.static(__dirname+'/Public'));
// mySever.use((req,res,next)=>
// {

// console.log('Every res must pass through me first before routing');
// next();


// })




// const fun=(req,res)=>{
// 	//req.body;//The body of the request Remember the middle ware used with urlencoded and json
// console.log("Query",req.query);//The query string with the url starting with a ?
// console.log('Params',req.params);//To get the parameters of the url
// console.log('Headers',req.headers);//Remember the request and Response headers


// let r={
// 6:'typo',
// 7:'hypo'
// };

// //res.send("Hello Pakistan");
// console.log(req.body);
// res.send(r);

// console.log('Hello I m express GET route');

// }
// mySever.get('/:op:pl',fun);



// mySever.post('/',(req,res)=>{





// console.log(req.body);
// console.log('Post request');
// res.send('Hello');

// });






// //Public name used for the folder having static files




















