// directly set on the html


// option 01

function makeGray(){
    document.body.style.background="gray";
   }

//    option 02
const mackOrangeButton =document.getElementById('makeOrange');
mackOrangeButton.onclick=makeOrange;
function makeOrange(){
 document.body.style.background=('orange');
}
// option 3
const purpleButton =document.getElementById('make-purple');
       purpleButton.onclick=function makePurple(){
        document.body.style.backgroundColor='purple'
       }
    //    option 04
    const makePink =document.getElementById('make-pink');
    makePink.addEventListener('click',pinkButton)

    function pinkButton(){
        document.body.style.background ='pink'
    }
    // option another 04
    const makeGreen =document.getElementById('make-green');
    makeGreen.addEventListener('click',function makeGreenButton(){
        document.body.style.background='green'
    })
    // option final 04
    document.getElementById('make-silver').addEventListener('click',function(){
        document.body.style.background='silver'
    })

