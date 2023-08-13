const option1=document.getElementById("option1");
const option2=document.getElementById("option2");
const celci=document.querySelector(".celci");
const faren=document.querySelector(".faren");
// const faren=document.getElementsByClassName("faren");
const cel=document.getElementById("c_v");
const far=document.getElementById("f_v");
// console.log(option1);
// console.log(option1);
// console.log(typeof(option2));
// console.log(option1.value);
// console.log(option1.value);
// console.log(option2.value);
// console.log(cel.value);
// console.log(far.value);

function display(){
    console.log(option1.value);
    console.log(option2.value);
    // if(option1.value===option2.value){
    //     option1.value="Celcius";
    //     option2.value="Farhenheight";
    // }
    // else{
        if(option1.value=="Celcius"){
            option2.value="Farhenheight";
            faren.style.order='2';
            celci.style.order='1';
        }
        if(option1.value=="Farhenheight"){
            option2.value="Celcius";
            // row.style.flexDirection='row-reverse';
            console.dir(celci);
            console.dir(faren);
            faren.style.order='1';
            celci.style.order='2';
        }
        // if(option2.value=="Celcius"){
        //     option1.value="Farhenheight";
        // }
        // if(option2.value=="Farhenheight"){
        //     option1.value="Celcius";
        // }
    // }

    console.log(option1.value);
    console.log(option2.value);
}


function ctof(){
    let c=cel.value;
    let f=9/5*c+32;
    console.log(c);
    console.log(f);
    console.log(cel.value);
    console.log(far.value);

    if(c==''){
        far.val='';
    }
    else{
        // document.write("Hello");
        far.value=f;
    }
    console.log(cel.value);
    console.log(far.value);
}

function ftoc(){
    let f=far.value;
    let c=5/9*(f-32);
    console.log(c);
    console.log(f);
    console.log(cel.value);
    console.log(far.value);

    if(f==''){
        cel.val='';
    }
    else{
        // document.write("Hello");
        cel.value=c;
    }
    console.log(cel.value);
    console.log(far.value);
}