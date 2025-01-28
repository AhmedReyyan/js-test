let str1 = "dcba";

function stringReverse(string) {
  let reversedString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reversedString += string[i];
  }
  return reversedString;
}

console.log(stringReverse(str1));

let btn = document.querySelector(".sec-btn");
btn.addEventListener("click", () => {
  let text;
  let word = document.querySelector(".file-data");
  let file = word.files[0];

  let readWords = new FileReader();

  readWords.onload = function (event) {
    text = event.target.result;
    console.log(event.target.result);
    let words = text.split(" ");
    console.log(words.length);
  };
  readWords.onerror = (err) => {
    return console.log(err);
  };

  let readtextIS = readWords.readAsText(file);
});

//convert json file into csv
