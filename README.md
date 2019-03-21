# StCloudAptss
This is my individual proejct, which is to create website inorder to easy access all the apartments and rooms available near campus. This is for everybody to use but mainly focus to those who really have hard time finding apartments, or roommates or rooms. 

**Initial Setup**
```
* Add Landing Page
* Add Apartment Page that lists all apartments
```

**Each Apartment has:**
```
   * Name
   * Image
```

**Layout and Basic Styling**
```
* Create our header and footer partials
* Add in Bootstrap
```

**Creating New Apartment**
```
* Setup new apartment POST route
* Add in body-parser
* Setup route to show form
* Add basic unstyled form
```

**Style the apartment page**
```
* Add a better header/title
* Make apartment display in a grid
```

**Style the Navbar and Form**
```
* Add a navbar to all templates
* Style the new apartment form
```

**Add Mongoose**
```
* Install and configure Mongoose
* Setup apartment model
* Use campground model inside of our routes
```

**Show Page**
```
* following the same routings
* Add description to our apartment model
* Show db.collection.drop()
* Add a show route/template
```

**Refactor Mongoose Code**
```
* Create a models directory
* Use module.exports
* Require everything correctly!
```

**Add Seeds File**
```
* Add a seeds.js file
* Run the seeds file every time the server starts
```

**Add the Comment model!**
```
* Make our errors go away!
* Display comments on apartment show page
```
**Comment New/Create**
```
* Discuss nested routes
* Add the comment new and create routes
* Add the new comment form
```

**Style Show Page**
```
* Add sidebar to show page
* Display comments nicely
```

**Finish Styling Show Page**
```
* Add public directory
* Add custom stylesheet
```

**Auth Pt. 1 - Add User Model**
```
* Install all packages needed for auth
* Define User model 
```

**Auth Pt. 2 - Register**
```
* Configure Passport
* Add register routes
* Add register template
```

**Auth Pt. 3 - Login**
```
* Add login routes
* Add login template
```

**Auth Pt. 4 - Logout/Navbar**
```
* Add logout route
* Prevent user from adding a comment if not signed in
* Add links to navbar
```

**Auth Pt. 5 - Show/Hide Links**
```
* Show/hide auth links in navbar 
```

**Refactor The Routes**
```
* Use Express router to reoragnize all routes
```

**Users + Comments**
```
* Associate users and comments
* Save author's name to a comment automatically
```

**Users + Apartments**
```
* Prevent an unauthenticated user from creating a apartment
* Save username+id to newly created apartment
```

**Editing Apartments**
```
* Add Method-Override
* Add Edit Route for Apartments
* Add Link to Edit Page
* Add Update Route
```

**Deleting Apartments**
```
* Add Destroy Route
* Add Delete button
```
**Authorization Part 1: apartments**
```
* User can only edit his/her apartments
* User can only delete his/her apartments
* Hide/Show edit and delete buttons
```

**Editing Comments**
```
* Add Edit route for comments
* Add Edit button
* Add Update route
```
```
<!--/apartments/:id/edit-->
<!--/apartments/:id/comments/:comment_id/edit-->
```
**Deleting Comments**
```
* Add Destroy route
* Add Delete button
```

**Authorization Part 2: Comments**
```
* User can only edit his/her comments
* User can only delete his/her comments
* Hide/Show edit and delete buttons
* Refactor Middleware
```

**Adding in Flash!**
```
* Demo working version
* Install and configure connect-flash
* Add bootstrap alerts to header
```

**RESTFUL ROUTES**
```

name      url      verb    desc.
===============================================
INDEX   /dogs      GET   Display a list of all dog
NEW     /dogs/new  GET   Displays form to make a new dog
CREATE  /dogs      POST  Add new dog to DB
SHOW    /dogs/:id  GET   Shows info about one dog
```
```
INDEX   /apartments
NEW     /apartments/new
CREATE  /apartments
SHOW    /apartments/:id
```

```
NEW     apartments/:id/comments/new    GET
CREATE  apartments/:id/comments      POST
This this how it looks. 
```

**Landing Page**
![ScreenShot](https://github.com/XKushal/StCloudAptss/blob/master/landing.png)

**Your Before Login navbar**
![ScreenShot](https://github.com/XKushal/StCloudAptss/blob/master/imgs/beforeLoginNav.png)

**Login Page**
![ScreenShot](https://github.com/XKushal/StCloudAptss/blob/master/imgs/Login.png)

**SignUp Page**
![ScreenShot](https://github.com/XKushal/StCloudAptss/blob/master/imgs/SignUp.png)

**Forgot Pswd Page**
![ScreenShot](https://github.com/XKushal/StCloudAptss/blob/master/imgs/Forgot.png)

**Home Page**
![ScreenShot](https://github.com/XKushal/StCloudAptss/blob/master/imgs/Screen%20Shot%202019-03-21%20at%201.10.18%20PM.png)
