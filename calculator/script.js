var inputbox = document.querySelector(".calc")

function change(event){
    console.log(event.target.textContent)
    if(event.target.textContent == "0")
    {
        inputbox.value = inputbox.value+"0"
    }
    if(event.target.textContent == "1")
    {
        inputbox.value = inputbox.value+"1"
    }
    if(event.target.textContent == "2")
    {
        inputbox.value = inputbox.value+"2"
    }
    if(event.target.textContent == "3")
    {
        inputbox.value = inputbox.value+"3"
    }
    if(event.target.textContent == "4")
    {
        inputbox.value = inputbox.value+"4"
    }
    if(event.target.textContent == "5")
    {
        inputbox.value = inputbox.value+"5"
    }
    if(event.target.textContent == "6")
    {
        inputbox.value = inputbox.value+"6"
    }
    if(event.target.textContent == "7")
    {
        inputbox.value = inputbox.value+"7"
    }
    if(event.target.textContent == "8")
    {
        inputbox.value = inputbox.value+"8"
    }
    if(event.target.textContent == "9")
    {
        inputbox.value = inputbox.value+"9"
    }
    if(event.target.textContent == "00")
    {
        inputbox.value = inputbox.value+"00"
    }
    
    if(event.target.textContent == ".")
    {
        inputbox.value = inputbox.value+"."
    }
    if(event.target.textContent == "+")
    {
        inputbox.value = inputbox.value+"+"
    }
    if(event.target.textContent == "-")
    {
        inputbox.value = inputbox.value+"-"
    }
    if(event.target.textContent == "/")
    {
        inputbox.value = inputbox.value+"/"
    }
    if(event.target.textContent == "%")
    {
        inputbox.value = inputbox.value+"%"
    }
    if(event.target.textContent == "C")
    {
        inputbox.value = " "
    }
    if(event.target.textContent == "X")
    {
        inputbox.value = inputbox.value+"X"
    }
    if(event.target.textContent == "Del")
    {
        var textar = inputbox.value
        var l = textar.length
        l = l-1
        var temp=""
        for(i=0;i<l;i++){
            temp += textar[i]
        }
        inputbox.value=temp
    } 
   if(event.target.textContent == "=")
    {
        var texta = inputbox.value
        var len = texta.length
        var op = ' '
        var tempa =" "
        var tempb =" "
        var ans
        var a,b
        var j = 0
        for(i=0;i<len;i++)
            {
                if( texta[i] == "+" || texta[i] == "-" || texta[i] == "X" || texta[i] == "%" || texta[i] == "/" )
                {
                    op = texta[i]
                    j=i++
                    break
                }
                tempa += texta[i]
            }
            if(op == " ")
                {
                    texta.value=tempa
                }
            else{
                for(var s = j+1;s<len;s++)
                {
                    tempb += texta[s]
                }
            
             a = Number(tempa)
             b = Number(tempb)
             console.log(a)
             switch(op)
             {
                case '+':
                    ans =a+b
                    break
                case '-':
                    ans =a-b
                    break
                case 'X':
                    ans =a*b
                    break
                case '/':
                    ans =a/b
                    break
                case '%':
                    ans =a%b
                    break         
            }
            inputbox.value = ans  
        }
    }
}