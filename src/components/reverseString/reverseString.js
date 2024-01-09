import React from 'react';

const ReverseString = () => {

    // METHOD 1
    // let string = "Mohsin";
    // // console.log(string);
    
    // let newString = "";
    
    // for (var i = string.length - 1; i >= 0; i--) {
        //     // console.log(string[i]);
        //     newString += string[i];
        // }
        // console.log(newString);
        
        // METHOD 2

        let string2 = "Mohsin";
        console.log("One line code===>", string2.split("").reverse().join(""))
        let splitString = string2.split("");
        console.log(splitString);

        let reverseString = splitString.reverse();
        console.log(reverseString);

        let arrayToString = reverseString.join("");
        console.log(arrayToString);




    return (
        <>
            <div>Reverse String Component</div>

            <div>
               {/* New String : {newString} */}
               Array to String  Method 2 :{arrayToString}
            </div>


        </>
    )
}

export default ReverseString;