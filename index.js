let returnObject = document.querySelector('body');

function submitData(personName, personEmail) {
    
  
    const configurationObject = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            name: personName,
            email: personEmail,
        }
        ),
    }
    return fetch('http://localhost:3000/users', configurationObject)
    .then(function (response) {
        return response.json();
      })
      .then(function (object) {
        returnObject.innerHTML = object.id;
      })
      .catch(function (error) {
        alert("Bad things! Ragnarők!");
        returnObject.innerHTML = error.message;
      });
      
}

