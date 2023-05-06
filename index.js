// Add your code here
function submitData(userName, userEmail) {
	const userData = {
        name: `${userName}`,
        email: `${userEmail}`
    }
    const configObj = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(userData)
    }

    return fetch('http://localhost:3000/users', configObj)
    .then(function (resp) {
        return resp.json()
    })
    .then(function (data) {
        const newDiv = document.createElement('div')
        document.querySelector('body').appendChild(newDiv)
        document.querySelector('div').innerHTML = data.id
    })
    .catch(error => {
        const errorMessage= error.message;
        document.body.append(errorMessage)
    })
}
