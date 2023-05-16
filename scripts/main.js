const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/book-4155805_1280.webp") {
    myImage.setAttribute("src", "images/Buch-coloured.png");
  } else {
    myImage.setAttribute("src", "images/book-4155805_1280.webp");
  }
};
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Do you gots the red book blues, ${myName}?`;
    }
  }
  
  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Do you gots the red book blues, ${storedName}?`;
  }
  myButton.onclick = () => {
    setUserName();
  };
  