// for 

for (let index = 0; index < 10; index++) {
    const element = index;
    console.log(element);
    
}

for (let i = 0; i < 10; i++) {
    console.log(`outer loop value : ${i}`);
    for (let j = 0; j < 10; j++) {
        //console.log(`inner loop value : ${j}`);
        console.log(i + '*' + j + '=' + i*j )
        
    }

    }