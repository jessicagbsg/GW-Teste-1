let numbersList = [];
let biggestNum = 0;
let numList = document.getElementById("num-list");
const addNum = document.getElementById("add-num");
const biggestNumBtn = document.getElementById("biggest-num-btn");
const biggestNumText = document.getElementById("biggest-num");
const clrList = document.getElementById("clear-list");

function randomNum() {
  numbersList.push(Math.floor(Math.random() * 100));
  numList.textContent = "Lista de números: " + numbersList;
}

function biggestNumber() {
  numbersList.forEach((element) => {
    if (element > biggestNum) {
      biggestNum = element;
    }
  });
  biggestNumText.textContent = "O maior número dessa lista é: " + biggestNum;
}

function clearList() {
  numbersList = [];
  biggestNum = 0;
  numList.textContent = "Lista de números: ";
  biggestNumText.textContent = "O maior número dessa lista é: ";
}

addNum.addEventListener("click", randomNum);
biggestNumBtn.addEventListener("click", biggestNumber);
clrList.addEventListener("click", clearList);
