fetch('/greeting')
  .then(res => res.json())
  .then(data => {
    console.log(data);
    let target = document.getElementById('message');
    target.innerHTML = data[0].message;
  })
  .catch(e => console.error(e));