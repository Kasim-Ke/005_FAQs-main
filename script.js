document.addEventListener("DOMContentLoaded", function () {
  const questionBlocks = document.querySelectorAll(".question_block");

  questionBlocks.forEach(function (block) {
    const questionWrapper = block.querySelector(".question_wrapper");
    const icon = questionWrapper.querySelector(".icon");
    const answer = block.querySelector(".answer");

    questionWrapper.addEventListener("click", function () {
      if (answer.style.maxHeight) {
        answer.style.maxHeight = null;
        icon.src = "images/icon-plus.svg";
      } else {
        answer.style.maxHeight = answer.scrollHeight + "px";
        icon.src = "images/icon-minus.svg";
      }
    });
  });
});
