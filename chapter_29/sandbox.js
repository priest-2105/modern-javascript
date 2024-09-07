// This Key word

// const blogs = [

//     {title: 'why mac rules', likes: 30},
//     {title: '10 things to make', likes: 50},
// ]

// console.log(blogs);



let user = {
    name: 'crystal',
    age: 30,
    email: 'crystal@gmail.com',
    location: 'berlin',
    blogs: [
        {title: 'why mac rules', likes: 30},
        {title: '10 things to make', likes: 50},
    ],
    login: function(){
        console.log('user is Logged in');        
    },
    logout: function(){
        console.log('user Logged out');
        
    },
    bloglist(){
        
    this.blogs.forEach(blog => {
        console.log(blog.title);
        console.log(blog['likes']);
        
    })

    }
}


user.bloglist();
// console.log(this);
 

