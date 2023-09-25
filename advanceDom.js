let itemList = document.querySelector('#items');
console.log(itemList.parentNode);

//prentNode
// let itemListParent= itemList.parentNode;

// itemListParent.style.backgroundColor= '#D3D3D3'
// console.log(itemListParent.parentNode);

//parentElement
// let itemListParent= itemList.parentElement;

// itemListParent.style.backgroundColor= '#D3D3D3'
// console.log(itemListParent.parentElement);


//childNodes (includes line-breaks (whitespaces as nodes) as 'text')
//  console.log(itemList.childNodes);

//firstChild & lastChild (includes linebreaks i.e whitespcaes as well)
// console.log(itemList.firstChild);
console.log(itemList.lastChild);  

//Children
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.color='purple'

//elementChild (exclude the white  spaces)
console.log(itemList.firstElementChild);   
console.log(itemList.lastElementChild);

  //nextSibling & previousSibling (includes whiteSpaces as #text)
  //console.log(itemList.nextSibling);
  //console.log(itemList.previousSibling);

  //nextElementSibling & previousElementSibling (excludes #text)
  console.log(itemList.nextElementSibling);
  console.log(itemList.previousElementSibling);
  itemList.previousElementSibling.style.color='red'

  //creating domElements

  let newDiv= document.createElement('div');
  newDiv.className='hello';
  newDiv.id='hello1';
  newDiv.setAttribute('title','Welcome');
  let newDivText=document.createTextNode('Hello world');
  newDiv.appendChild(newDivText);

  let container= document.querySelector('header .container');
  let h1=document.querySelector('header h1');
  container.insertBefore(newDiv,h1);

  newDiv.style.fontSize= '35px'
  newDiv.style.color='#D3D3D3'
  console.log(newDiv);