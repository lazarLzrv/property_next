// async function fetchData() {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//         if (!response.ok) {
//             throw new Error("Network response was not ok");
//         }
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.error("There was a problem with the fetch operation:", error);
//     }
// }

// fetchData();
// console.log("log");

function fetchData() {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then((response) => response.json())
        .then((data) => console.log(data));
}

fetchData();
console.log("log");
