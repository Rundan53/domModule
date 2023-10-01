let getACall= document.getElementById('call');
let name= document.getElementById('fname');
let email= document.getElementById('email1');
let phoneNo= document.getElementById('phone');
let date= document.getElementById('date');
let time= document.getElementById('time');


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


    //adding details as list
    let ul= document.createElement('ul');
    let body=document.querySelector('.bg-img');
    let li=document.createElement('li');
    li.className='list-group-item';
    let details=document.createTextNode(name.value +'-'+ email.value +'-'+ phoneNo.value +'-'+ date.value +'-'+ time.value);
    li.appendChild(details);
    ul.appendChild(li);
    body.appendChild(ul);

    //adding delete button
    let deleteBtn=document.createElement('button');
    deleteBtn.className= 'btn btn-danger btn-sm float-right delete';
    let delBtnName=document.createTextNode('delete');
    deleteBtn.appendChild(delBtnName);
    li.appendChild(deleteBtn);

    //adding edit button
    let editBtn= document.createElement('button');
    editBtn.classList='btn btn-danger btn-sm float-right delete'
   
    let editBtnName=document.createTextNode('edit');
    editBtn.appendChild(editBtnName);
    li.appendChild(editBtn);

    //event for delete button
    deleteBtn.addEventListener('click',deleteDetails);

    //event for edit button
    editBtn.addEventListener('click',addToInput);
    editBtn.addEventListener('click',deleteDetails);


    function deleteDetails(e){
        localStorage.removeItem(userDetails.userName);
        ul.remove(li);
    }

    function addToInput(e){
        e.preventDefault();
        name.value= userDetails.userName;
        email.value=userDetails.userEmail;
        phoneNo.value=userDetails.userPhoneNo;
        date.value=userDetails.dateOfApp;
        time.value=userDetails.timeOfApp;
    }


});

