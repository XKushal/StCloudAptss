var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var Apartments = require("./models/apartments");
var seedDB = require("./seeds");
var Comment  = require("./models/comment");
// var User  = require("./models/user");
mongoose.connect('mongodb://localhost:27017/Apts_4', { useNewUrlParser: true });

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
seedDB();

app.get("/", function(req, res){
   res.render("landing"); 
});

//INDEX - show all apartments
app.get("/apartments", function(req, res){
    // Get all apartments from DB
    Apartments.find({}, function(err, allApartments){
       if(err){
           console.log("Error Detected");
           console.log(err);
       } else {
          res.render("apartments/index",{apartments:allApartments});
       }
    });
});

//CREATE:Add new Apartments to DB
app.post("/apartments",function(req, res){
    var name = req.body.name;
    var image = req.body.image;
    var description = req.body.description;
    var newApartment = {name: name, image: image, description:description}
    //apartments.push(newApartment);
    //create a new apartment and save to DB
    Apartments.create(newApartment, function(err, newApt){
        if(err){
            console.log("Error.");
            console.log(err);
        }else{
            //redirect back to apartments
            res.redirect("/apartments");
        }
    })
});

//NEW: show form to create new apartments
app.get("/apartments/new", function(req, res) {
    res.render("apartments/new");
});

//SHOW: Shows the detail info about one apartment
app.get("/apartments/:id", function(req, res) {
    //find the apartment with provoded id
    Apartments.findById(req.params.id).populate("comments").exec(function(err, foundApt){
        if(err){
            console.log("error detected.");
            console.log(err);
        }else{
            //render show templete with that apartment
            res.render("apartments/show", {apartments:foundApt});
        }
    });
});

//=================
//comments routes
//=================
app.get("/apartments/:id/comments/new", function(req, res) {
    //find apartment by id
    Apartments.findById(req.params.id, function(err, apartment){
        if(err){
            console.log(err);
        }else{
            res.render("comments/new",{apartment: apartment});
        }
    });
});

app.post("/apartments/:id/comments", function(req, res){
    //look apartment by id
    Apartments.findById(req.params.id,function(err, apartment) {
        if(err){
            console.log(err);
            res.redirect("/apartments");
        }else{
            Comment.create(req.body.comment, function(err, comment){
                if(err){
                    console.log(err);
                }else{
                    apartment.comments.push(comment);
                    apartment.save();
                    res.redirect('/apartments/' + apartment._id);
                }
            });
        }
    });
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started.")
});