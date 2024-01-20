let data =  [
    { id: 1, name: 'john', age: 18, profession: 'developer' },
    { id: 2, name: 'jack', age: 20, profession: 'developer' },
    { id: 3, name: 'karen', age: 19, profession: 'admin' },
  ];
  
  // 1. Print Developers
  let first = document.querySelector(".b1");
  function printDeveloper() {
    first.innerText = "";
    first= data.filter(dev=>dev.profession == "developer");
    console.log(first);
    let element = JSON.stringify(first);
    document.getElementById("developer").innerHTML =element;
  }
  
  // 2. Add Data
  function addData() {
    let id = prompt("Enter id:");
    let name = prompt("Enter name:");
    let age = prompt("Enter age:");
    let profession = prompt("Enter profession:");
    
    let newData = { id:id, name: name, age: parseInt(age), profession: profession };
    data.push(newData);
    let newObj = JSON.stringify(data);
    document.querySelector(".b2").innerHTML ="New Array after addition : " + newObj;
  
  }
  
  // 3. Remove Admins
  function removeAdmin() {
    let admins = data.filter(dev => dev.profession.toLowerCase() === 'admin');
    data = data.filter(dev => dev.profession.toLowerCase() !== 'admin');
    console.log("Removed Admins:", admins);
    let newData = JSON.stringify(data);
    document.querySelector(".b3").innerHTML ="New Array : " + newData;
  }
  
  // 4. Concatenate Array
  function concatenateArray() {
    let dummyArray = [
      { name: "dummy1", age: 30, profession: "designer" },
      { name: "dummy2", age: 25, profession: "developer" },
  ];
  let resultArray = data.concat(dummyArray);
  console.log("Concatenated Array:", resultArray);
  let newArray = JSON.stringify(resultArray);
    document.querySelector(".b4").innerHTML ="New Array after concatination: " + newArray;
  }
  
  
  