//Question 1
const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

function complain() {
    var cat = "meow";
    console. log (cat)
}
    complain();

//Question 2
document.querySelector("h3").innerHTML = "Updated Heading";

//Question 3
document.querySelector("h3").style.fontSize = "2em";

//Question 4
const heading = document.querySelectorAll("h3");
console.log(heading);

for (let i = 0; i < heading.length; i += 1) {
    
   heading[i].className = "Subheading";
};

//Question 5
const p = document.querySelectorAll('p');

for (i = 0; i < p.length; i += 1) {
  p[i].style.color = 'red';
};

//Question 6
const resultsContainer = document.querySelectorAll(".results");
console.log(resultsContainer);

for (let i = 0; i < resultsContainer.length; i += 1) {
    
   resultsContainer[i].innerHTML = "<p>New paragraph</p>";
   resultsContainer[i].style.background = "yellow";
};

//Question 7 
function listFunction(list) {
    for (i = 0; i < list.length; i ++) {
        console.log (list);
      };
    };
    
    listFunction(cats);

//Question 8
function createCats() {
    let html = "";
    for (let i = 0; i < cats.length; i++) {
    
    let missingAge = "Age unknown";
    if(cats[i].age){
        missingAge = cats[i].age
    };

    html += `
    <div>
    <h5> name: ${cats[i].name} </h5>
    <p> age: ${missingAge}
    </div>
    `;
    };
    return html;
};

const returnCats = createCats(cats);
const catContainer = document.querySelector(".cat-container");
catContainer.innerHTML = returnCats;

