// javascript code


const colorName = document.querySelector("#colorName");
const colorChangerButton = document.querySelector("#colorChangerButton");
const mainSection = document.querySelector("#mainContainer");

const listOfColors = [
    "#FF0000", // Red
    "#00FF00", // Green
    "#0000FF", // Blue
    "#FFFF00", // Yellow
    "#00FFFF", // Cyan
    "#FF00FF", // Magenta
    "#FFA500", // Orange
    "#800080", // Purple
    "#FFC0CB", // Pink
    "#008080", // Teal
  ];

let colorNumber = 0;

    colorChangerButton.addEventListener("click" , () => {
        mainSection.style.backgroundColor = listOfColors[colorNumber];
        colorName.innerText = listOfColors[colorNumber];
        colorNumber = (colorNumber + 1) % listOfColors.length;      // the modulo operator will help to return the iterator back to 0 when it reaches to the max length of the colors array
    
        //when colorNumber = 0; (0+1)%10 = 1
        //when colorNumber = 0; (1+1)%10 = 2
        //when colorNumber = 0; (2+1)%10 = 3
        //            .
        //            .
        //            .
        //when colorNumber = 10; (9+1)%10 = 0;             it returns the colorNumber again to 0
    })
    
    

  
  
  
  
  
  
  
  