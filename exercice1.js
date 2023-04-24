
// function fetchData() {
//     var data;
//   fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(res => data=res)
// // return data;
// }

function fetchData() {
fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(response => response.json())
.then(data => {
  // Update the content of the h1 element with the post title
  const userID = data.userId;
  document.getElementById('userId').value=userID;
  const i_d = data.id;
  document.getElementById('i_d').value=i_d;
  const title1 = data.title;
  document.getElementById('title1').value=title1;
  const completed = data.completed;
  document.getElementById('completed').value=completed;
  //change the text  of the label 


//   const labelEdit = document.getElementById('labelUser');
//   labelEdit.textContent = 'bassam';


  console.log(data);
})
.catch(error => console.error(error));
}

// in fetch
function displayAllItems(){
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
          // Update the content of the ul element with the list of posts
          const postList = data; // array
          const postListElement = document.getElementById('post-list'); // ul yali bl
          postList.forEach(post => {
            const listItem = document.createElement('li');
            listItem.innerHTML =post.title;
            postListElement.appendChild(listItem);
          });
        })
        .catch(error => console.error(error));
}

// in axios
function displayItemsInAxios(){
    axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(result => {
          // Update the content of the ul element with the list of posts
          const postList = result.data; // array
          const postListElement = document.getElementById('post-list'); // ul yali bl html
          postList.forEach(post => {
            const listItem = document.createElement('li');
            listItem.innerHTML =post.title;
            postListElement.appendChild(listItem);
          });
        })
        .catch(error => console.error(error));
}