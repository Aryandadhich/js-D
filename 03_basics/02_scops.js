//var c = 300
//outside if global scope
let a = 300
if (true)
{   //inside if local scope
    let a = 10 
    const b = 20 
    console.log("Inner:",a);
 }
//console.log(a);
//console.log(b);
//console.log(c);

function one(){
    const username = "Aryan"

    function two ()
    {
        const website = "youtube"
        console.log(username);
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
                console.log(username + website);
            }
    }

