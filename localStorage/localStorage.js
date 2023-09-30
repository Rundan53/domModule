let getACall= document.getElementById('call');
let name= document.getElementById('fname');
let email= document.getElementById('email1');
let phoneNo= document.getElementById('phone');
let date= document.getElementById('date');
let time= document.getElementById('time');

console.log(name.value);
getACall.addEventListener('click',(e)=>{
    e.preventDefault();

    let userDetails={
        userName: name.value,
        userEmail: email.value,
        userPhoneNo: phoneNo.value,
        dateOfApp: date.value,
        timeOfApp: time.value, 
    }

    let userDetailsSerialized= JSON.stringify(userDetails);
    localStorage.setItem(userDetails.userName,userDetailsSerialized);

    let ul= document.createElement('ul');
    let body=document.querySelector('.bg-img');
    let li=document.createElement('li');
    let details=document.createTextNode(name.value +'-'+ email.value +'-'+ phoneNo.value +'-'+ date.value +'-'+ time.value);
    li.appendChild(details);
    ul.appendChild(li);
    body.appendChild(ul);


});

