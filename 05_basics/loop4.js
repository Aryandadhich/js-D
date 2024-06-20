const myObject = {
    js : 'javascript',
    cpp : 'c plus plus',
    rb : 'ruby'
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);   
    }