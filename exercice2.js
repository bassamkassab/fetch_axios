// https://reqres.in/api/users?page=2
function dataOfPage() {
    fetch('https://reqres.in/api/users?page=2')
        .then(response => response.json())
        .then(data => {
            const page1 = data.page;
            document.getElementById('page').value = page1;
            const perPage = data.per_page;
            document.getElementById('per_page').value = perPage;
            const total1 = data.total;
            document.getElementById('total').value = total1;
            const pagesTotal = data.total_pages;
            document.getElementById('total_pages').value = pagesTotal;


        })


}

function displayAllFirstNames() {
    axios.get('https://reqres.in/api/users?page=2')
        .then(result => {
            console.log(result.data.data); // awal chi bntba3 l result wba3den bnchuf l array b alba
            const divList = result.data.data;
            const postListElement = document.getElementById('div1');

            divList.forEach(kaka => {
                const div2List = document.createElement('h2');
                div2List.innerHTML = kaka.first_name + ' ' + kaka.last_name;
                postListElement.appendChild(div2List);
            });
        })
        .catch(error => console.error(error));
}