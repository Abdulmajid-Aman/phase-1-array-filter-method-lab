// Code your solution here
const drivers = ["Bobby" , "Sammy", "Sally", "Annette", "Sarah", "bobby"]

function findMatching(array, string) {
    let result = [];
    string = string.toLowerCase(); // Convert search string to lowercase
    for (let driver of array) {
        if (driver.toLowerCase() === string) { // Compare in lowercase
            result.push(driver);
        } else if (driver.toLowerCase().includes(string)) { // Compare in lowercase
            result.push(driver);
        }
    }
    return result; // Return the result array at the end
}

function fuzzyMatch(array, string) {
    let result = [];
    string = string.toLowerCase(); // Convert search string to lowercase
    for (let driver of array) {
        if (driver.toLowerCase().startsWith(string)) {
            result.push(driver);
        } else if (driver.toLowerCase().endsWith(string)) {
            return result
        } else if (driver.toLowerCase().includes(string)) {
            return result
        }
    }
    return result;
}
const driver = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

function matchName(drivers , string) {
    let result = [];
    for (let drive of drivers) {
        if(drive.name === string) {
            result.push(drive);
        }
    }
    return result
}




