//Change title by variable
const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";

// //eventlistener 
// document.querySelector("html").addEventListener("click", () => {
//     alert("Click action detected")
// })

const myImage = document.querySelector('img')// Store a reference in variable

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === 'images/2022 Happy-New-Year-横版.jpg') {
        myImage.setAttribute("src", "images/Jubilee-Black-Friday-Carnival--横版.jpg")
    }
    else {
        myImage.setAttribute("src", "images/2022 Happy-New-Year-横版.jpg")
    }
}

let myButton = document.querySelector('button');
function setUserName() {
    const myName = prompt("Please enter your name")
    localStorage.setItem("name", myName)
    myHeading.textContent = `This is Cool, ${myName}`
    
}

myButton.onclick = () => {
    setUserName();
};
  
if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
  }