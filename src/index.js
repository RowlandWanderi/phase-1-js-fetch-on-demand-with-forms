
const init = () => {
    const inputForm = document.querySelector('form');
    inputForm.addEventListener("submit",(e) => {
        e.preventDefault()
        const enterId = document.querySelector('input#searchByID');

        fetch(`http://localhost:3000/movies/${enterId.value}`)
        .then(res => (res.json()))
        .then( ourArrayData => { 
            const title = document.querySelector('section#movieDetails h4');
            const summary = document.querySelector('section#movieDetails p');

            title.innerText = ourArrayData .title;
            summary.innerText = ourArrayData .summary;
        })
        
    })
}

document.addEventListener('DOMContentLoaded', init);