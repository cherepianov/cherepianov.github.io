document.addEventListener("DOMContentLoaded", function() {
  let comment = document.getElementById("comment");
  let howMuchLeft = document.getElementById("how-much-left");

  comment.addEventListener("input", function(event) {
    let val = comment.value;
    let size = val.length;

    if (size >= 10) {
      let newVal = val.slice(0, 9)
      comment.value = newVal;
      event.stopPropagation()
    } else {
      console.log(size)
    }

    howMuchLeft.innerHTML = "Nabrano " + size + "/10";
  });
});

