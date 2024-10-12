function caculate(){
    document.getElementById('notification').innerHTML = ''
    const radioButtons = document.querySelectorAll('input[type="radio"]')

    var selectedValue = ''
    for(let radioButton of radioButtons){
        if(radioButton.checked) selectedValue = radioButton.getAttribute('value')
    }
        
 
    var num2 = parseFloat(document.getElementById('inputBox_number2').value)
    var num1 = parseFloat(document.getElementById('inputBox_number1').value)

    if(isNaN(num1) || isNaN(num2)){
        document.getElementById('notification').innerHTML = 'Please enter valid numbers.'
        return
    }

    var result = 0
    switch(selectedValue){
        case 'add':
            result = num1 + num2
            break
        case 'subtract':
            result = num1 - num2
            break
        case 'multiply':
            result = num1 * num2
            break
        case 'divide':
            if(num2 === 0){
                document.getElementById('notification').innerHTML = 'Cannot divide by zero.'
                return
            }
            result = num1 / num2
            break
        default:
            return
    }   

    console.log(result)
    console.log(selectedValue)
    document.getElementById('result_box').innerHTML = result
}


document.getElementById('caculate')