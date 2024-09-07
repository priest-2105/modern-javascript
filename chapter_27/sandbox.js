// Object literal 

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
    bloglist: function(){
      console.log(user.blogs);    
    }
}


user.login();

const name = 'mario';
name.toUpperCase();

user.logout();

user.bloglist();


