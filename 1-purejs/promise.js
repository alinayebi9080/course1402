console.log("ali");

// Web Api
//fetch,setTimout,setInterval

const handleLog = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("eli");
    }, 1000);
  });
};

handleLog().then((res) => console.log(res));

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((json) => console.log(json));

console.log("hassan");
