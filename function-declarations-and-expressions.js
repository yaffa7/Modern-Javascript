// Function Declarations

function greet(firstName = 'John', lastName = 'Doe') {
    //console.log('hello');
    return 'hello ' + firstName + ' ' + lastName
}

console.log(greet());


// Function Expressions

const square = function(x = 3) {
    return x*x
}

console.log(square(8));
console.log(square());

// Immediantly Invokable Function Expressions - IIFEs

(function(name) {
    console.log(`IFFE Ran.. hello ${name}`);
})('Brad')

// Property Methods

const todo = {
    add: function(){
        console.log('Add todo');
    },
    edit: function(id) {
        console.log(`Edit todo ${id}`);
        
    }
}

todo.delete = function() {
    console.log('Delete todo');
    
}

todo.add()
todo.edit(22)
todo.delete()


