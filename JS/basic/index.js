const num = 9
      let interestRate = 0.3;
      let name = 'Mosh';
      let age = 30;
      let isApproved = false;
      let firstName = undefined;
      let selectedColor = null;
    //   Object, includes properties(key/value pairs)
    let person = {
        name: 'Mosh',
        age: 30
    };
    //Dot Notation 
    person.age = 'John';
    //Bracket Notation 
    person[age] ='Mary';
    //dynamic array
    let selectedColors = ['red', 'blue'];
    selectedColors[2] = 1
    console.log(selectedColors.log);
    // function
    // parameter and argument difference
    // function can have multiple function 
    //default value of variable is undefined 
    function greet(name){
        console.log('Hello ' + name)
    }// name is the parameter
    greet('John'); // John is a argument 
    //Strict Equality (Same type and value)
    let x= 1
    console.log(x === 1)
    console.log(x !== 1)
    // Lose Equality
    console.log(1 == 1)
    // Ternary Operater
    let points = 110;
    let type = points > 100 ? 'A' : 'B';
    // Logical AND (&&) return true both are TRUE
    console.log(true && true)
    let applicationRefused = !x;

    let users = 'Blue'; //undefined
    let defaults = 'Black';
    let current = users||defaults;

    // Bitewise Operator
    //Read Write Excecute
    // 00000100/00000010/00000001
    const readPermission = 4
    const writePermission = 2
    const executePermission = 1
    let myPermission = 0
    myPermission = myPermission | readPermission | writePermission 
    console.log(myPermission)
    let message = (myPermission & readPermission) ? 'write avaliable':'permission denied'
    console.log(myPermission)

    let role;
    switch(role){
        case 'guest': 
        console.log('Guest User');
        break;// jump out this case
        case 'moderator':
            console.log('Moderator User');
            break;
        default:
            console.log('Unkown')
    }
    
    for (let i = 0; i < 5; i ++){
        console.log('Hello', i)
    }

    let i = 0;
    while (i <= 5) {
        if (i % 2 !== 0) console.log(i);
        i++;
    }
    
    function MaxofTwo(a, b){
        if (isNaN(a) && isNaN(b)){
           return (a > b) ? a: b
        }
       return 'Not Number'
    }
    let test1 = MaxofTwo('news', 8)
    console.log("test1", test1)

    function isLandscape(width, height){
        
        return (width > height) ;

    }
    // divisible by 3/5 get fizz/buzz
    const output = fizzbuzz(4);
    function fizzbuzz( input ){
        if ( typeof input !== 'number')
        return  NaN;
        let res= "";
        res += input % 3? "":"fizz"
        res += input % 5? "":"buzz"
        return (res == "")? input:res;
    }
    console.log('fizzbuzz', output)

    // max 70mph, 5mph extra get 1point, 12 pts license suspended
    // always use constant to describe
    function checkSpeed(speed){
        const speedlimit = 70;
        const pointrange = 5
        if (speed < speedlimit + pointrange)
            return "OK";
        else {
            let pts = Math.floor((speed - speedlimit)/5)
            if (pts >= 12)
                return "Lisence Suspended"
            return pts + " point(s)"
        }
    }
    console.log(checkSpeed(80), checkSpeed(74),checkSpeed(170))

    // display number type when you enter limit
    function showNumbers(limit) {
        const pair = Math.floor((limit + 1) / 2)
     for (let i = 0; i < pair ; i++){
        console.log(i*2, 'Even')
        console.log(i*2 + 1, 'Odd')
     }
     limit % 2 ? "": console.log(limit, "Even")
     
    }
    showNumbers(0)

    // Falsy values: undefined null '' false 0 NaN
    const array = [0, 1, 12, 3]
    console.log(countTruthy(array))
    function countTruthy(array){
        let count = 0;
        
        for (let value of array){
            if (value)
                count ++;
            
        }
        return count
    } 

    // display all the string  property of the input 
    const movie = {
        title: 'a',
        releaseYear: 2019,
        rating: 4,
        director: 'b'
    }
    showProperties(movie)
    function showProperties(obj){
        for (let key in obj)
            if (typeof obj[key] === 'string')
                console.log(obj[key])
    }
    
    // Print out star rows
    const  rows = 10
    showStars(rows)
    function showStars(rows){
        let row = ""
        for (let i = 0; i < rows; i++){
            row += "*"
            console.log(row)
        }
    }
    // showPrimeNumber
    function showPrimes(limit){
        for (let number = 2; number <= limit; number ++){
           
            if (isPrime(number))  console.log(number)
        }
    }
    function isPrime(number){
        for (let factor = 2; factor < number; factor ++){
            if (number % factor === 0){
                isPrime = false;
                break;
            }
                
        }
    }
    

    // Objects, anything can be elements in object
    const circle = {
        radius: 1,
        location:{
            x: 1,
            y: 1
        },
        isVisible: true,
        draw: function(){
            console.log('draw')
        }
    }

    // Create multiple objects
    // Factory Function
    function createCircle(radius){
        return  {
            radius, // variable name same as parameter name
            draw() {
                console.log('draw');
            }
        }
    }
    const circle1 = createCircle(1)
    console.log(circle1)

    //Constructor Function
    function Circle(radius){
        this.radius = radius;
        this.draw = function(){
            console.log('draw')
        }
    }
    const circle2 = new Circle(1)

    // dynamic nature of objects
    const circle3 = {
        radius: 1
    };
    circle3.color = 'yellow';
    circle3.draw = function(){}

    delete circle3.color;
    delete circle3.draw;

    console.log(circle3);
    //Every object has a constructor, functions are also object


    // Type and reference type 
    // type includes number  string boolean symbol undefined null
    //refernece types includes object function and array
    let x1 = 10;
    let y1 = x1;

    x1 = 20;
    // x =20 , y = 10 primitives are copied by their value

    let xx = {value: 10};
    let yy = xx;

    yy = 20;
    //xx = 20 , yy = 20 objects are copied by their reference

    for (let key in circle)
        console.log(key, circle[key])
    
    for (let key of Object.keys(circle))
        console.log(key)

    //clone object
    const anotherr = {}
    for (let key in circle)
        anotherr[key] = circle[key]
    //equals
    const anotherrr = Object.assign({}, circle)
    //equals
    const anotherrrr = {...circle };
    console.log(anotherrrr)

    //string primitive
    const message1 = 'hi';
    //String object
    const another1 = new String('Hi');


    // Template literals, format the string 
    const message2 = 
    `This is my 
    'first' message`;
    //equals 
    const another2 = 'This is my  \n' + 
    '\'first\' message';
    // vaiable add into template
    const firstname = 'Harvey';
    const another = 
    `Hi, ${firstname},
    
Thank you for choosing us
    
Best,
Yilun `;
    console.log(another)