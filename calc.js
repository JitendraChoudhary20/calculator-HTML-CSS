let ele = document.querySelectorAll('.btn');
let string ='';
Array.from(ele).forEach((button)=>{
    button.addEventListener('click',(event)=>{
    if(event.target.innerHTML=='='){
        string = eval(string);
        document.querySelector('input').value = string;
    }
    else if(event.target.innerHTML=='clr'){
        string = '';
        document.querySelector('input').value = string;

    }
    else{
        string = string + event.target.innerHTML;
        document.querySelector('input').value = string;
    }
    })
})
