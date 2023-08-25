const express = require('express');
const app = express();

// Config
app.set('view engine', 'pug');//bah utuliszer pug
app.set('views', './views');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
// Routes

const list =[
   {
      id:1,
      description:'task1',
  },
   {
      id:2, 
      description:'task2',
   }
];
app.get('/',(req,res)=>{
   return res.render('page',{
      data: list,
   })
}) 
    
   

app.post('/add/:id',(req,res)=>{
   const { description } = req.body;
   const id = Math.floor(Math.random() * 1000);
   list.push({
      id,
      description,
  });
  return res.redirect('/');
});

app.post("/delet/:id",(req,res)=>{
   const { id } = req.params;
   const index = list.findIndex(post => post.id == id);
   list.splice(index, 1);
   return res.redirect('/');
});
// Start
const PORT=5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
