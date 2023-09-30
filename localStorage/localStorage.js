let getACall= document.getElementById('call');
let name= document.getElementById('fname');
let email= document.getElementById('email1');
let phoneNo= document.getElementById('phone');
let date= document.getElementById('date');
let time= document.getElementById('time');


getACall.addEventListener('click',(e)=>{
    let userDetails={
        userName: name.value,
        userEmail: email.value,
        userPhoneNo: phoneNo.value,
        dateOfApp: date.value,
        timeOfApp: time.value, 
    }

    let userDetailsSerialized= JSON.stringify(userDetails);

    localStorage.setItem('userDetails',userDetailsSerialized);

});

