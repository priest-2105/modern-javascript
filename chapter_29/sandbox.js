// This Key word

let user = {
    name: 'crystal',
    age: 30,
    email: 'crystal@gmail.com',
    location: 'berlin',
    blogs: ['why mac and cheese rules', '10 things to mae with marmite'],
    login: function(){
        console.log('user is Logged in');        
    },
    logout: function(){
        console.log('user Logged out');
        
    },
    bloglist(){
     console.log('this user has written the following');
    this.blogs.forEach(blog => {
    console.log(blog);     
    }) 
        
    }
}


user.bloglist();
// console.log(this);
 

