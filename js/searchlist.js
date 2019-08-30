// These are all string searches for now!
// Property names are case sensitive, search prompt is not

let exampleList = [{
    name: "dild",
    prop: "something",
    moreprop: "dingus",
    poop: "blube"
  },
  {
    name: "monk",
    prop: "yes",
    moreprop: "lyuf",
    poop: "boobe"
  },
  {
    name: "nunk",
    prop: "more thing",
    moreprop: "lube",
    poop: "arf"
  },
  {
    name: "bing",
    prop: "ding",
    moreprop: "dong",
    poop: "kong"
  }
];

searchListAny(exampleList, "i");
searchListSpecific(exampleList, "name", "bing");
searchListAnyMulti(exampleList, ["bing", "arf", "boobe"])
searchListSpecificMulti(exampleList, ["name", "prop"], ["MONK", "yes"])

// Searches an array of objects (a list) for any match between all properties and one search prompt
// Returns an array with the matching objects; empty if no matches
function searchListAny(list, searchPrompt) {
  let filteredList = [];

  for (let object of list) {
    for (let prop in object) {
      if (object[prop].toLowerCase().includes(searchPrompt.trim().toLowerCase())) {
        filteredList.push(object);
        break;
      }
    }
  }

  console.log(`Objects containing "${searchPrompt}":`);
  console.log(filteredList);
  return filteredList;
}

// Searches an array of objects (a list) for a match between a given property and a given search prompt
// Returns an array with the matching objects; empty if no matches
function searchListSpecific(list, property, searchPrompt) {
  let filteredList = [];

  for (let object of list) {
    if (object[`${property}`].toLowerCase().includes(searchPrompt.trim().toLowerCase())) {
      filteredList.push(object);
    }
  }

  console.log(`Objects where "${property}" matches "${searchPrompt}":`);
  console.log(filteredList);
  return filteredList;
}

// Searches an array of objects for any match between any of its properties and any of the search prompts
// Returns an array with the matching objects; empty if no matches
function searchListAnyMulti(list, searchPromptArray) {
  let filteredList = [];

  for (let object of list) {  // Loop through all objects in the list
    for (let prop in object) {  // Loop through all properties in the object
      let matched = false;

      for (let search of searchPromptArray) { // Loop through all search prompts
        if (object[prop].toLowerCase().includes(search.trim().toLowerCase())) { // If there is a match...
          filteredList.push(object);  // Push object to new array
          matched = true; // A match has been made
          break;  // Break out of the search prompt loop, we only need one match
        }
      }

      if (matched) {
        break;  // Stop looping through properties if a match has been made
      }
    }
  }

  console.log(`Objects containing any of "${searchPromptArray}":`);
  console.log(filteredList);
  return filteredList;
}

// Searches an array of objects for matches between all given properties and all given search prompts
// Comparisons are done in the order of input, so index 0 in propertyArray is searched for index 0 in searchPromptArray
// Returns an array with the matching objects; empty if no matches
function searchListSpecificMulti(list, propertyArray, searchPromptArray) {
  let filteredList = [];

  for (let object of list) {
    let matches = 0;

    for (let i = 0; i < propertyArray.length; i++) {
      if (object[`${propertyArray[i]}`].toLowerCase().includes(searchPromptArray[i].trim().toLowerCase())) {
        matches++;
      }
    }

    if (matches === propertyArray.length) {
      filteredList.push(object);
    }
  }

  console.log(`Objects where "${propertyArray}" respectively match "${searchPromptArray}":`);
  console.log(filteredList);
  return filteredList;
}
