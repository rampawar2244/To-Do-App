const submitBtn = document.querySelector('#submit-btn')

submitBtn.addEventListener('click', e => {
    e.preventDefault()
    // console.log('clicked')

    const name = document.querySelector('#task-name').value
    // console.log(name);

    const time = document.querySelector('#task-time').value
    // console.log(time);
    const newLi = document.createElement('li')
    // Adding the CSS style class as same as the other li
    newLi.setAttribute('class', 'list-group-item')
    // Appending the text value to the created li
    newLi.textContent = name
    // Appending the created li to the ul in DOM
    // document.querySelector('ul').appendChild(newLi)
    console.log(newLi)

    


})