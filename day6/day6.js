console.log("new here");
function isarrayn(a1)
{
    console.log(Array.isArray(a1));
}
q1='w3 school';
w1=[1,2,4,0];
isarrayn(q1);
isarrayn(w1);
function clonen(aq)
{
    let s1=aq.slice(0);

    console.log(s1);
}
w2=[1,2,[4,0]];
clonen(w1);
clonen(w2);
function first(a,b)
{if(a==null)
    return [];
 else if (b==null)
   return a[0];
   else if (b<0)
   return [];
   else
   return a.slice(0,b);
    
}
console.log(first([7,9,0,-2]));
console.log(first([],3));
console.log(first([7,9,0,-2],3));
console.log(first([7,9,0,-2],6));
console.log(first([7,9,0,-2],-3));
function joina(z,m)
{
    console.log(z.join(m));
}
joina(["Red","Green","White","Black"],',');
joina(["Red","Green","White","Black"],'+');
function most(ar)
{
    max=0
    for(i=0;i<ar.length;i++)
    {m=0
        for(j=0;j<ar.length;j++)
        {
            if(ar[i]==ar[j])
            {
              m=m+1;
            }
        }
        if(m>max)
        {
            max=m;
            item=ar[i];
        }
    }
    console.log(item+"("+max+" times )");
}
most([3,'a','a','a',2,3,'a',3,'a',2,4,9,3]);