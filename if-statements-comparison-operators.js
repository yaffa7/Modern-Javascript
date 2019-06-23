const id = 100

if(id == 101) {
    console.log('correct');
} else { 
    console.log('incorrect');
}

// Not equal to

if(id != 101) {
    console.log('correct');
} else { 
    console.log('incorrect');
}

if(id === '100') {
    console.log('equal to string 100');    
} else if (id == '100') {
    console.log('equal to 100 string with ==');    
}

id1 = 200

if(typeof id1 !== 'undefined') {
    console.log(`The id is ${id1}`);    
} else {
    console.log('no ID');
}

