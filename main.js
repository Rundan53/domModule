let form=document.getElementById('addForm');
let item=document.getElementById('item1');
let itemList=document.getElementById('items');
let filter= document.getElementById('filter');
form.addEventListener('submit',addItem=(e)=>{
    e.preventDefault();


    //CREATING ITEM

    //creating new li
    let li=document.createElement('li');
    li.className=item.className;
    let newItemName= document.getElementById('item').value;
    let description= document.getElementById('description').value;
    
    // appending textNode in li
    let itemTextNode=document.createTextNode(newItemName + " " +description);
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

filter.addEventListener('keyup',search);

function search(e){
    let text=filter.value.toLowerCase();
    let li= itemList.getElementsByTagName('li');

    Array.from(li).forEach((listNo)=>{
        let itemName=listNo.childNodes[0].textContent;
        if(itemName.toLowerCase().includes(text)){
            listNo.style.display='block';
        }
        else{
            listNo.style.display='none';
        }
    });
        
    
}


  