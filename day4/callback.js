console.log('Before');
getUser(1,"birendra")

setTimeout(()=>{
    console.log('after 2 second')
},2000)

function getUser(id,name){
setTimeout(()=>{
    console.log("after 3 second")
console.log(id, name)
return ({id:"id",name:"birendra"})

},3000)

}

//**********calling function after every 3 second **********

function showname(){
console.log("print this line after 3 second again and again")
setTimeout(showname,3000)}

showname()

// **********display time every 3 seconds **********
function updateTimeafter3second() {
  let time = new Date().toLocaleTimeString();

  console.log(time);

  setTimeout(updateTimeafter3second, 3000);
}
updateTimeafter3second();

///normal callback function

function getUser(id,callback){
    setTimeout(()=>{
        console.log(id,callback)
        return ({id:id,callback:"birendra"})
    },2000)
}
getUser(1, "")

function getUser(id, name) {
  setTimeout(() => {
    console.log(id, "name");
    console.log("after 3 second ");

    return { id: id, name: "name" };
  }, 3000);

}
console.log("after");
getUser(1, "any");

// ***********************callbackhell-*******************

const mainFunction = () => {
  setTimeout(() => {
    console.log("getting all roll_no after 2 second");
    let roll_no = [1, 2, 3, 4, 5, 6];
    console.log(roll_no);

    setTimeout(
      (rollno) => {
        const biodata = {
          name: "birendra",
          age: 22,
        };

        console.log(
          `my rollno is ${rollno} and name :${biodata.name} and age :${biodata.age}`
        );

        setTimeout(
          (gen) => {
            biodata.gender = "male";
            console.log(`and Gender: ${biodata.gender}`);
          },
          2000,
          biodata.gen
        );
      },
      2000,
      roll_no[1]
    );
  }, 2000);
};

mainFunction();
