var firstname= "Joyce"
var secondname="Adhiambo" 
var password=1234

var newFirstname= prompt(`enter firstname:`)
var newSecondname= prompt(`enter secondname:`)
var newpassword=prompt(`enter password:`)

if(newFirstname==firstname)alert(`firstname:correct`)
if (newSecondname==Secondname)alert(`Secondname :correct`)
if (password ==newpassword)alert(`Password:correct`)

if (newFirstname!=firstname)alert(`firstname:incorrect`)
if (newSecondname!=Secondname)alert(`Secondname :incorrect`)
if (password !=newpassword)alert(`Password:incorrect`)
VM7502:10 Uncaught ReferenceError: Secondname is not defined
    at <anonymous>:10:20
(anonymous) @ VM7502:10
var firstname= "Joyce"
var secondname="Adhiambo" 
var password=1234

var newFirstname= prompt(`enter firstname:`)
var newSecondname= prompt(`enter secondname:`)
var newpassword=prompt(`enter password:`)

if(newFirstname==firstname)alert(`firstname:correct`)
if (newSecondname==secondname)alert(`Secondname :correct`)
if (password ==newpassword)alert(`Password:correct`)

if (newFirstname!=firstname)alert(`firstname:incorrect`)
if (newSecondname!=Secondname)alert(`Secondname :incorrect`)
if (password !=newpassword)alert(`Password:incorrect`)
VM7520:14 Uncaught ReferenceError: Secondname is not defined
    at <anonymous>:14:20
(anonymous) @ VM7520:14
var firstname= "Joyce"
var secondname="Adhiambo" 
var password=1234

var newFirstname= prompt(`enter firstname:`)
var newSecondname= prompt(`enter secondname:`)
var newpassword=prompt(`enter password:`)

if(newFirstname==firstname)alert(`firstname:correct`)
if (newSecondname==secondname)alert(`Secondname :correct`)
if (password ==newpassword)alert(`Password:correct`)

if (newFirstname!=firstname)alert(`firstname:incorrect`)
if (newSecondname!=secondname)alert(`Secondname :incorrect`)
if (password !=newpassword)alert(`Password:incorrect`)
undefined
var firstname= "Joyce"
var secondname="Adhiambo" 
var password=1234

var newFirstname= prompt(`enter firstname:`)
var newSecondname= prompt(`enter secondname:`)
var newpassword=prompt(`enter password:`)
var item=prompt('item:' )
var checkitem= Number(item)
if (item == checkitem) {alert(`${item}this is a number`)}
    else alert( `${item}this is not a number`)
if(newFirstname==firstname)alert(`firstname:correct`)
if (newSecondname==secondname)alert(`secondname :correct`)
if (password ==newpassword)alert(`password:correct`)

if (newFirstname!=firstname)alert(`firstname:incorrect`)
if (newSecondname!=secondname)alert(`secondname :incorrect`)
if (password !=newpassword)alert(`password:incorrect`)
undefined
assignment
num1=(prompt('enter num1:'))
num2= (prompt('enter num2:')) 
operator=(prompt('enter operation:'))

var operand1= Number(num1)
var operand2= Number(num2)
if (operator=='*')
alert(num1*num2)
if(operator== '-')
    alert(num1-num2)
if(operator== '/')
    alert(num1/num2)
if (operator==='+')
    alert(num1+num2)
if (operand1==NaN) console.log(`invalid`)
if (operand2==NaN) console.log(`invalid`)
var browser=prompt('Enter a browser:')


switch(browser){
    case 'Edge':
  alert('You have got the Edge')
        break;
    case 'Chrome'&& 'Firefox'&&'safari'&&'opera':
    alert('okay we support these browsers too')
        break;
     default:
           alert('We hope that this page looks ok')}

var a=+prompt('a?:');


switch(a){
case 0:
 alert(0);
    break;
case 1:
 alert(1);
        break;
case 2:

case 3:
    alert('2,3')}

code using while
    var password=prompt('Enter pasword:')

while(password!=='qacy')
  password=prompt('Name incorrect enter correct password:')

alert('valid')
