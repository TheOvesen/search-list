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

// searchList(exampleList, "name", "bing");
searchListMulti(exampleList, ["name", "prop"], ["bing", "ding"])

// Searches an array of objects (a list) with a given property for matches with a given search prompts
// Returns an array with the matches; empty if no matches
function searchList(list, property, searchPrompt) {
  let filteredList = [];

  for (let object of list) {
    if (object[`${property}`].includes(searchPrompt.trim())) {
      filteredList.push(object);
    }
  }

  console.log(filteredList);
  return filteredList;
}

// Searches a list for elements that match all given properties (array) with all search prompts (array);
// Comparisons are done in the order of input, so index 0 in propertyArray is searched for index 0 in searchPromptArray
// Returns an array with the matches; empty if no matches
function searchListMulti(list, propertyArray, searchPromptArray) {
  let filteredList = [];

  for (let object of list) {
    let matches = 0;

    for (let i = 0; i < propertyArray.length; i++) {
      if (object[`${propertyArray[i]}`].includes(searchPromptArray[i].trim())) {
        matches++;
      }
    }

    if (matches === propertyArray.length) {
      filteredList.push(object);
    }
  }

  console.log(filteredList);
  return filteredList;
}

// Searches an array of objects (a list) with any number of properties for any match with one search prompt
// Returns an array with the matches; empty if no matches
function searchListAny(list, searchPrompt) {
  let filteredList = [];

  for (let object of list) {
    for (let prop in object)
    {
      if (prop.includes(searchPrompt.trim())) {
        filteredList.push(object);
        break;
      }
    }
  }

  console.log(filteredList);
  return filteredList;
}
