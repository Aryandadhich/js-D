//var c = 300
//outside if global scope
let a = 300
if (true)
{   //inside if local scope
    let a = 10 
    const b = 20 
    //console.log("Inner:",a);
 }
//console.log(a);
//console.log(b);
//console.log(c);

function one(){
    const username = "Aryan"

    function two ()
    {
        const website = "youtube"
        //console.log(username);
    }
    //console.log(website);
    two()
}
//one()

if (true)
    {
        const username = "Aryan"
        if (username === "Aryan")
            {
                const website = "youtube"
                //console.log(username + website);
            }
            //console.log(website);
    }
    //console.log(username);

console.log(addone(5))
function addone(num)
{
    return num + 1
}

console.log(addone(5))
//in this addone work on both conditioin above function or after function

//console.log(addtwo(5)); //this will give error
const addtwo = function(num)
{
    return num + 2
}

console.log(addtwo(5));// this will work 

// in this addtwo work after only the code because we store the value in addtwo variable
