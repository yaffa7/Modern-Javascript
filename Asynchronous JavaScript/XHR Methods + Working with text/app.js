document.getElementById('button')
  .addEventListener('click', loadData)

function loadData() {
  //Create an XHR Object
  const xhr = new XMLHttpRequest()

  //Open
  xhr.open('GET', 'data.txt', true)

  //OPTIONAL
  xhr.onprogress = function () {
    console.log('ONPROGRESS', this.readyState)
  }

  xhr.onload = function () {
    if (this.status === 200) {
      console.log(this.responseText)
      document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`
    }
  }

  //   xhr.onreadystatechange = function() {
  //     if (this.status === 200 && this.readyState === 4) {
  //       console.log(this.responseText)
  //       console.log('READYSTATE',xhr.readyState)
  // }
  xhr.send();
}