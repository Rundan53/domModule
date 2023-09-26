let form=document.getElementById('addForm');
let item=document.getElementById('item1');
let itemList=document.getElementById('items');
form.addEventListener('submit',addItem=(e)=>{
    e.preventDefault();


    //CREATING ITEM

    //creating new li
    let li=document.createElement('li');
    li.className=item.className;
    let newItemName= document.getElementById('item').value;
    // appending textNode in li
    let itemTextNode=document.createTextNode(newItemName);
    li.appendChild(itemTextNode);

    
    //creating cancel button as li's child node 
    let deleteBtn= document.createElement('button');
    deleteBtn.className=item.firstElementChild.className;
    let newBtnName= 'X';
    let btnTextNode=document.createTextNode(newBtnName);
    //append textNode in delete button
    deleteBtn.appendChild(btnTextNode); 

    li.appendChild(deleteBtn);
    itemList.appendChild(li);

});

itemList.addEventListener('click',removeItem=(e)=>{
    if(e.target.classList.contains('delete')){
        if(confirm('Are You Sure')){
            let li=e.target.parentElement;
            itemList.removeChild(li);
        }
       
    }
});



  