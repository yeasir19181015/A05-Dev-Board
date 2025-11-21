// alert()

let date = new Date();
let newDate = date.toDateString();
console.log(newDate);

document.getElementById("dateToday").innerText = newDate;


// console.log("eije ami asi");

document.getElementById("btn-post-comment").addEventListener("click", function () {

    const fixedComment = "This is a fixed comment!";

    document.getElementById("comment-text-box").innerHTML += `${fixedComment}`;
});
