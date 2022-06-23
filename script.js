const Number1= parseInt(prompt('Enter Number1:'));
const operator= prompt('Enter operator +. -, *, /)');
const Number2= parseInt(prompt('Enter Number2:'));

let result = 0;


    alert ('Incorrect Input. Refresh and try again')


if (operator=== '+'){
    result= Number1 + Number2;

 } else if (operator=== '-'){

        result- Number1 - Number2;

    }else if (operator=== '*'){
        result= Number1 * Number2;

    }else if (operator=== '/'){
        result= Number1 / Number2;
    }
    alert(Number1 + ' '+ operator + ' '+ Number2 + ' = ' + result)