let screen=document.getElementById('screen');
buttons=document.querySelectorAll('button');
let ScreenValue='';
for(item of buttons){
    item.addEventListener('click',(e)=>{
    
        buttonText=e.target.innerText;
        if(buttonText=='X')
        {
            buttonText='*';
            ScreenValue+=buttonText;
            screen.value= ScreenValue;
        }
        else if(buttonText=='C')
        {ScreenValue='';
            screen.value= ScreenValue;
            
        
        }
        else if(buttonText=='=')
        {
            // buttonText=' ';
            screen.value=eval(ScreenValue);
        }
        else{
            ScreenValue+=buttonText;
            screen.value= ScreenValue;
        }

    })
}