let persons = [
    {
        name: 'Fahadn',
        age: 30,
        location: 'Khulna',
        occupation: 'Teacher'
    },
    {
        name: 'Arafat',
        age: 30,
        location: 'Khulna',
        occupation: 'Student'
    },
    {
        name: 'Reyad',
        age: 30,
        location: 'Khulna',
        occupation: 'Student'
    },
    {
        name: 'Murad',
        age: 30,
        location: 'Khulna',
        occupation: 'Student'
    },
    {
        name: 'Reyan',
        age: 30,
        location: 'Khulna',
        occupation: 'Student'
    }
];

function showData(){
    document.getElementById('personList').innerHTML = '';
    let id = 0;
    for(item of persons){
        id += 1;
        document.getElementById('personList').innerHTML += '<tr><td>'+ id +'</td> <td>'+item.name+'</td><td>'+item.age+'</td><td>'+item.location+'</td><td>'+item.occupation+'</td></tr>'
    }
}


showData();

function getRandomName(len) {
    var text = "";
    var charset = "abcdefghijklmnopqrstuvwxyz23456789";
    for (var i = 0; i < len; i++)
    text += charset.charAt(Math.floor(Math.random() * charset.length));
    return text;
 }

function addNewData(){
    let formData = {
        name: getRandomName(10),
        age: 30,
        location: 'Khulna',
        occupation: 'Student'
    };

    persons.push(formData);

    showData();
}

function showMessage(){
    document.getElementById('message').innerText = "Mouse Entered";
}

function showLeaveMessage(){
    document.getElementById('message').innerText = "Mouse Left";
}

function showMovementMessage(){
    document.getElementById('movementMessage').innerText = "Mouse Moving";
}

function showStopMessage(){
    document.getElementById('movementMessage').innerText = "Mouse Stopped";
}

    
    
