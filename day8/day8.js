var student={
    name:"David Ray",
    sclass:"VI",
    rollno:12,
};

//Q2

console.log(Object.keys(student));
u=Object.keys(student);

delete student.rollno;

console.log(student);
////Q3 processing above output below
console.log(u.length);

//Q4
var library = [ { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true }, { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true }, { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }];
for(var i=0;i<library.length;i++)
{
console.log(library[i].readingStatus);}

//Q5 
var vol={
    radius:4,
    height:5,
}
var vv=2*3.14*vol.radius*vol.height;
console.log(vv.toFixed(4));
//Q6

var libraryy = [
    { 
        title: 'The Road Ahead', 
        author: 'Bill Gates',
        libraryID: 1254 
    }, 

    {
       title: 'Walter Isaacson', 
       author: 'Steve Jobs', 
       libraryID: 4264,
    },

    { 
        title: 'Mockingjay: The Final Book of The Hunger Games', 
        author: 'Suzanne Collins', 
        libraryID: 3245,
   }

  ]



console.log(Object.entries(libraryy).sort((a,b)=>a[0]-b[0]));