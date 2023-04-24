// https://reqres.in/api/users
function saveUser() {
    const postData = {
        name: document.getElementById('name').value,
        job: document.getElementById('job').value
    };

    axios.post('https://reqres.in/api/users', postData)
        .then(response => console.log(response))
        .catch(error => console.error(error));

}


// with fetch
function saveUserUsingFetch() {
    const postData = {
        name: document.getElementById('name').value,
        job: document.getElementById('job').value
    };
    fetch('https://reqres.in/api/users', {
        method: 'POST',
        body: JSON.stringify(postData),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    .then(response => response.json())
    .then(data => {
        console.log(data);
        const resultElm = document.getElementById('result');
        const name=data.name;
       const returnedName=  document.createElement('h2');
       returnedName.innerHTML=name;
        const job=data.job;
        const returnedJob= document.createElement('h2');
returnedJob.innerHTML=job;

resultElm.appendChild(returnedName);
resultElm.appendChild(returnedJob);
    })

    .catch(error => console.error(error));

}