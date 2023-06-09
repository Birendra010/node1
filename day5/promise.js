const p1= Promise.resolve("resolve promise")
p1.then(result1=>{
    console.log(result1)
})

const p4= Promise.reject("reject promise")
p1.catch(err=>{
    console.log(err)
})

const p = new Promise((resole, reject) => {
  setTimeout(() => {
    resole(1);
    // reject(Error)
  }, 2000);
});
p.then((result) => {
  console.log(result);
}).catch((err) => {
  console.log("promise reject ");
});



const p2 = new Promise((resole, reject) => {
  setTimeout(() => {
    //   resole('resolve 2nd  promise ');
    reject(new Error("reject 2nd  promise"));
  }, 2000);
});

const p3 = new Promise((resole, reject) => {
  setTimeout(() => {
    resole("resove 3rd promise");
    // reject(new Error("reject 3rd promise"))
  }, 2000);
});

Promise.race([p2, p3])
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
