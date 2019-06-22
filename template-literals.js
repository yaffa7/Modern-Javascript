const name = 'john'
const age = 34
const job = 'Web developer'
const city = 'Miami'

// Without template strings (es5)
html = '<ul><li>Name: '+ name + '</li><li>Age: '+ age +'</li></ul>'
+ '<li>job: '+ job + '</li>'


console.log(html);

// With template strings (es6)

function hello() {
    return 'hello'
}

html2 = `
<ul>
    <li>Name: ${name}</li>
    <li>Age: ${age}</li>
    <li>Job: ${job}</li>
    <li>City: ${city}</li>
    <li>${2 + 2}</li>
    <li>${hello()}</li>
    <li>${age > 30 ? 'bigger' : 'lower'}</li>
</ul>
`
console.log(html2);
