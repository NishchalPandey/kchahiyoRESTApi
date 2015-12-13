var app = require('./app');
var postModel = require('./models/post');

var post = new postModel({
  title: "HEllo",
  content: "this is the content",
  owner: "nishchal"
});

post.save(
  function(err){
      if(err) {
        console.log("error created");
        throw err;
      }
      console.log("awesome post created");
      }
    );



app.listen(8000);
