var add= document.getElementById("addTodo");
var input= document.getElementById("inputField");
var todoContainer = document.getElementById("todoContainers");

add.addEventListener('click',addItem);
input.addEventListener('keypress',function(e){
    if(e.key=="Enter")
    {
        addItem();
    }
})

function addItem(e){
    const item_value= input.value ;
   // console.log(item_value)
   const item = document.createElement('div')// creating a div in html through js ;
   item.classList.add('item');//made a class named item

   const item_content = document.createElement('div');
   item_content.classList.add('content');//made a class named content .
   item.appendChild(item_content)//<div class="item"><div class="content"></div></div> item ar moddhe child .. ache .

   const input_item= document.createElement('input');
   input_item.classList.add('text');
   input_item.value= item_value;
   input.type='text';
   input_item.setAttribute('readonly','readonly');//buttons red only
   input_item.addEventListener('dblclick', function(){
    input_item.style.textDecoration = "line-through";
     }) // when we double click on the item it will strike through out.

   item_content.appendChild(input_item);

    const item_action= document.createElement('div');
    item_action.classList.add('actions');

   const edit_item = document.createElement('button');
    edit_item.classList.add('edit','btn','btn-success');
    edit_item.type="button";
    edit_item.innerText='Edit'; // text of the btn will be editt.

    const delete_item = document.createElement('button');
    delete_item.classList.add('delete','btn','btn-danger','fa','fa-trash');
    //delete_item.type="button";
    //delete_item.innerText='Delete';

     item_action.appendChild(edit_item);
     item_action.appendChild(delete_item);

     item.appendChild(item_action);

   todoContainer.appendChild(item);

     //input value that remains in the input box even afte add it in the list ..so to remove that 

     input.value='';


     edit_item.addEventListener('click',(e)=>{   //when we click on edit box a function will be triggered... function is parameter e it ta a arrw function 
        if(edit_item.innerText.toLowerCase()=="edit"){
            edit_item.innerText="save";
            input_item.removeAttribute('readonly');
            input_item.focus();
        }
        else
        {
            edit_item.innerText='Edit';
            input_item.setAttribute('readonly','readonly');

        }

     });

    delete_item.addEventListener('click',(e)=>{
        todoContainer.removeChild(item);
    })     
     

}