    let button=document.querySelector(".start");
    let container=document.querySelector(".container")
    let Q=document.querySelector(".question");
    let options=document.querySelectorAll(".option");
    let choices=document.querySelector(".choices");
    let score=0;
    let no=0;




    let collection=[
        {
            Question:"Which keyword is used to declare a variable in JavaScript?",
            option:["int","var","define","letvar"],
            correct:1
        },
        {
            Question:"Which symbol is used for single-line commands in JavaScript?",
            option:["::","#","//","**"],
            correct:2
        },
        {
            Question:"Which method is used to print something in browser?",
            option:["print()","console.log()","echo()","display"],
            correct:1
        },
        {
            Question:"Which data type is NOT permitive in Js?",
            option:["Number","String","Boolean","Object"],
            correct:3
        },
        {
            Question:"How do you write an if condition in JavaScript?",
            option:["if x=5","if(x==5)","ifx==5 then","check(x==5)"],
            correct:1
        },{
            Question:"Which loop runs at least one time even if condition is false?",
            option:["for loop","whie loop","do-while loop","foreach"],
            correct:2
        },{
            Question:"How do you create a function in JavaScript?",
            option:["create myFunc()","function myFunc()","def myFunc()","fun myFunc()"],
            correct:1
        },{
            Question:"Which method is used to select an element by ID?",
            option:["getElement()","query","getElementById()","selectById"],
            correct:2
        },{
            Question:"Which operator is used for strcit checking?",
            option:["==","=","===","!="],
            correct:2
        },{
            Question:"Which event occurs when a button is clicked?",
            option:["onchange","ommouseover","onclick","onload"],
            correct:2
        }
    ]
    

    if(no==0){
        choices.classList.add('visible');
    }
    button.addEventListener("click",()=>{
        for(let opt of options){
            opt.classList.remove("green");
            opt.classList.remove("red");
            opt.disabled = false; 
        }
        choices.classList.remove('visible');
        button.innerText="Next";
        button.classList.remove("btnStyle");
        options.forEach(btn => btn.style.pointerEvents = "auto");
        addText();
    });


    function addText(){
        Q.innerText=`Qno${no+1}:     ${collection[no].Question}`;
        options.forEach((btn,index)=>{
            btn.innerText=collection[no].option[index];
        })

    }

    function checkAns(){
        
        let option=this.innerText;
        let idx=collection[no].option.indexOf(option);
        if(idx==collection[no].correct){
            console.log("Correct Ans");
            this.classList.add("green");
            score+=1;
            disableall();
            next();
        }else{
            console.log("Wrong Ans")
        this.classList.add("red");
            idx=collection[no].correct;
        // let elem=collection[no].option[indx1];
            options[idx].classList.add("green");        
            disableall();
            next();
            // setTimeout(()=>{
            //     options[idx].classList.remove("green");
            //     this.classList.remove("red");
            // },2000);
        }
    }


    function next(){
        
        no+=1;
    if(no==collection.length){
        setTimeout(()=>{
        alert(`You Got ${score} out of ${no}`);
        window.location.reload();
        },1000);
    }
        return;
    }

    for(let btns of options){
        btns.addEventListener("click",checkAns);

    }

// function btndisable(){
//     options.forEach(btn => btn.disabled = true);
// }


function disableall(){
options.forEach(btn => btn.style.pointerEvents = "none");
  console.log("Function Called");
}
