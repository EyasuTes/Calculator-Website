function sum(first,next){
    let num=first +next
    return num.toFixed(2)
}
function sub(first, next){
    let num=first -next
    return num.toFixed(2)
}
function divide(first,next){
    let num=first /next
    return num.toFixed(2)
} 
function multiply(first, next){
    let num=first *next
    return num.toFixed(2)
}

function operate(first, oper, next){
    if(oper==='+'){
        return sum(first,next)
    }
    else if(oper==='-'){
        return sub(first,next)
    }
    else if(oper==='/'){
        if(next===0){
            return "Can't do that"
        }else{
            return divide(first,next)
        }
        
    }else if(oper==='x'){
        return multiply(first,next)
    }

}


const buttons = document.querySelectorAll('button');
const screen1 = document.querySelector('.screen1');
const screen2 = document.querySelector('.screen2');
let first=0;
let operator=0;
let second=0;
let result;
let count2=0;
let last;
buttons.forEach(function(button) {
  button.addEventListener('click', function(e) {
    const className = e.target.className;
    const parsedNumber = parseFloat(className, 10);
    let count=0;
    //console.log(e.target.className)
    if (!isNaN(parsedNumber) ) {
        if(count2>0){
            screen2.textContent=parsedNumber
            count2--
        }else {
            screen2.textContent += parsedNumber;
        }
      
    }
    
    else if((className === '/' || className === '+' || className === '-' || className === 'x') ){
        count=count+1
        operator =className
        
        if(last==='x'||last==='/'||last==='+'||last==='-'){
          
        }
        else if(screen1.textContent.slice(-1)==='='){
            screen1.textContent=screen2.textContent + className
            screen2.textContent=''
            
        }
        else if(screen1.textContent!=='' && screen2.textContent!==''){
            let sc1=screen1.textContent
            let sc2=screen2.textContent
            
            let sc1n = sc1.slice(0, -1);
            let sc1o = sc1.slice(-1)
            sc1n = parseFloat(sc1n, 10);
            
            sc2 =parseFloat(sc2, 10);
            
            const val =operate(sc1n, sc1o,sc2)
            screen2.textContent=val
            screen1.textContent=screen2.textContent +className
            count--
            count2++
            console.log(val)

        }else if(screen2.textContent==='' && (screen1.textContent.slice(-1)==='x'||screen1.textContent.slice(-1)==='/'||screen1.textContent.slice(-1)==='-'||screen1.textContent.slice(-1)==='+')){

        }
        
        
        else{
            screen1.textContent=screen2.textContent +className
        }
        
        
    }
    else if(className==='.'){
        if(screen2.textContent.includes('.')){}
        else{
            screen2.textContent += className
        }
    }   
    
    if(count>0){
        
        screen2.textContent=''
    }
    if(className==="=" ){
        if(last==='x'||last==='/'||last==='+'||last==='-'||last==='='){
            screen1.textContent=screen2.textContent+' ='
            //screen2.textContent=''
        }
        else{
            let sc1=screen1.textContent
            let sc2=screen2.textContent
                
            let sc1n = sc1.slice(0, -1);
            let sc1o = sc1.slice(-1)
            sc1n = parseFloat(sc1n, 10);
                
            sc2 =parseFloat(sc2, 10);
            count2++;
            screen1.textContent=sc1n+' '+sc1o+' '+sc2+' =';
            const val =operate(sc1n, sc1o,sc2)
            
            screen2.textContent = val;
        }

    }
    if(className==='cle'){
        screen1.textContent=''
        screen2.textContent=''
    }
    if(className==='del' ){
        let num = screen2.textContent;
        let str = num.toString();
        let newStr = str.slice(0, -1);
        
        let newNum = parseFloat(newStr, 10);
        screen2.textContent=newNum
        if(screen2.textContent==='NaN'){
            screen2.textContent=''
        }
        
        
        
        
        
    }
    last= className
  });
});
