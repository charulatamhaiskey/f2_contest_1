let arr = [
    { id: 1, name: "John", age: "28", profession: "developer" },
    { id: 2, name: "Alice", age: "32", profession: "developer" },
    { id: 3, name: "Bob", age: "25", profession: "admin" }
];
  
function PrintDeveloperbyMap() {
    let developers = arr.filter(worker => worker.profession === "developer");
    let developerNames = developers.map(developer => developer.name);
    console.log(developerNames);
}
  
function PrintDeveloperbyForEach() {
    arr.forEach(function(worker){
      if (worker.profession === "developer") {
        console.log(worker.name);
      }
    });
}
  
function addData() {
    let newWorker = { id: 4, name: "susan", age: "20", profession: "intern" };
    arr.push(newWorker);
    console.log(arr);
}
  
function removeAdmin() {
    arr = arr.filter(worker => worker.profession !== "admin");
    console.log(arr);
}
  
function concatenateArray() {
    let newArray = [
      { id: 4, name: "Jane", age: "30", profession: "developer" },
      { id: 5, name: "Peter", age: "22", profession: "designer" },
      { id: 6, name: "Sarah", age: "27", profession: "developer" }
    ];
    let concatenatedArray = arr.concat(newArray);
    console.log(concatenatedArray);
};