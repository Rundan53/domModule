let getACall= document.getElementById('call');
let name= document.getElementById('fname');
let email= document.getElementById('email1');
let phoneNo= document.getElementById('phone');
let date= document.getElementById('date');
let time= document.getElementById('time');


getACall.addEventListener('click',(e)=>{
    localStorage.setItem('userName',name.value);
    localStorage.setItem('userEmail',email.value);
    localStorage.setItem('userPhoneNo',phoneNo.value);
    localStorage.setItem('dateOfAppointment',date.value);
    localStorage.setItem('timeOfAppointment',time.value);
});

