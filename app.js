var express=require('express');
var app=express();
app.use(express.json())
// middleware
// app.use(express.urlencoded({extented:true}))

app.use(express.static('./public'))
app.set('view engine','ejs')
    app.set('views',__dirname+'/src/views')
var details=[
    {
        img:"/images/landscap.jfif",
        title:"Gardening and Landscaping",
        rate:"$65",
        star:"5",
        category:"romance",
        Tags:"new,sale,smart",
        id:0,
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ut placeat expedita saepe doloremque, delectus itaque accusantium ullam fuga impedit hic quae vero ipsum? Esse ex pariatur facere facilis possimus!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque saepe architecto aliquam atque harum ab et sequi omnis doloremque quas, laboriosam officiis expedita vitae. Reiciendis sequi beatae natus impedit culpa."
    },
    {
        img:"/images/fool.jfif",
        title:"Everybody's Fool",
        rate:"$89",
        star:"4",
        category:"romance",
        Tags:"new,sale,smart",
       id:1,
         desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ut placeat expedita saepe doloremque, delectus itaque accusantium ullam fuga impedit hic quae vero ipsum? Esse ex pariatur facere facilis possimus!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque saepe architecto aliquam atque harum ab et sequi omnis doloremque quas, laboriosam officiis expedita vitae. Reiciendis sequi beatae natus impedit culpa."
    

    },
    {
        img:"/images/cookbook.jfif",
        title:"Everybody's Fool",
        rate:"$89",
        star:"4",
        category:"romance",
        Tags:"new,sale,smart",
        id:2,
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ut placeat expedita saepe doloremque, delectus itaque accusantium ullam fuga impedit hic quae vero ipsum? Esse ex pariatur facere facilis possimus!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque saepe architecto aliquam atque harum ab et sequi omnis doloremque quas, laboriosam officiis expedita vitae. Reiciendis sequi beatae natus impedit culpa."
    
    },
    {
        img:"/images/naked.jpg",
        title:"Everybody's Fool",
        rate:"$89",
        star:"4",
        category:"romance",
        Tags:"new,sale,smart",
        id:3,
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ut placeat expedita saepe doloremque, delectus itaque accusantium ullam fuga impedit hic quae vero ipsum? Esse ex pariatur facere facilis possimus!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque saepe architecto aliquam atque harum ab et sequi omnis doloremque quas, laboriosam officiis expedita vitae. Reiciendis sequi beatae natus impedit culpa."
    
    },
]



app.get('/',(req,res)=>{
    res.render("index",{
        Books:'english',
        courses:"msc",
        nav:[{link:"/",name:"Home"},
             {link:"/second",name:"Pages"},
            {link:"/",name:"Blog"},
            {link:"/",name:"Shop"},
            {link:"/",name:"Contact"}]
            })
    // res.send("hello")
    // var filename="index.html";
    // res.sendFile(filename)
})
app.get('/singleview/:i',(req,res)=>{
    const i=req.params.i;
    console.log(i)
    if(details[i].id==i){
       book=details[i]
        console.log(book)

    }else{
        book=[];
    }

    res.render("singleview",{book})
    console.log(book);
    // res.render("singleview",{details})
})
//routing
app.get('/second',(req,res)=>{
    res.render("second",{details})
}) 
//routes
app.listen(7000,()=>{
    console.log("sucess");
})