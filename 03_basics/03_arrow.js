const user = {
    username : "Aryan",
    price : 999,
    
    welcomeMessage : function()
    {
        console.log(`${this.username} , welcome to website`)
    }
}
user.welcomeMessage()
user.username = "Nikhil"
user.welcomeMessage()
//this keyword refer to current context 
//context means normal values (variables what are they holding)