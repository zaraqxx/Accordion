const data = [
  {
    id: "1",
    question: "What is Nextstep LMS, and how does it work?",
    answer:
      "Nextstep LMS is a Learning Management System designed to simplify online education for both students and instructors. It allows instructors to create and manage courses, assign tasks, and track progress.",
  },
  {
    id: "2",
    question: "Who can use Nextstep LMS?",
    answer:
      "Nextstep LMS is ideal for educational institutions, corporate trainers, and individual instructors. Whether you’re a teacher, student, or organization looking to manage training programs, Nextstep LMS provides all the tools needed to make learning accessible and efficient.",
  },
  {
    id: "3",
    question: "Is Nextstep LMS mobile-friendly?",
    answer:
      "Yes, Nextstep LMS is fully responsive and mobile-friendly. You can access your courses, assignments, and progress reports anytime and anywhere using your smartphone, tablet, or desktop.",
  },
  {
    id: "4",
    question: "How secure is my data on Nextstep LMS?",
    answer:
      "Nextstep LMS prioritizes the security of your data. We use robust encryption protocols and regular system updates to ensure your information remains private and protected from unauthorized access.",
  },
];

const accordionWrapper = document.querySelector(".accordion");

function createAccordionData() {
  accordionWrapper.innerHTML = data
    .map(
      (dataItem) => `
          <div class="accordion-item">
            <div class="accordion-title">
              <h3>${dataItem.question}</h3>
              <i class="fa-solid fa-arrow-up"></i>
            </div>
            <div class="accordion-content">
              <p>${dataItem.answer}</p>
            </div>
          </div>`
    )
    .join("");
}
createAccordionData();

const getAccordionTitles = document.querySelectorAll(".accordion-title");

getAccordionTitles.forEach((currentItem) => {
  currentItem.addEventListener("click", (event) => {
    const currentContent = currentItem.nextElementSibling;
    const currentIcon = currentItem.querySelector("i");

    if (currentContent.style.maxHeight) {
      currentContent.style.maxHeight = null;
      currentIcon.classList.remove("fa-arrow-down");
      currentIcon.classList.add("fa-arrow-up");
    } else {
      document.querySelectorAll(".accordion-content").forEach((content) => {
        content.style.maxHeight = null;
      });

      currentContent.style.maxHeight = currentContent.scrollHeight + "px";
      currentIcon.classList.remove("fa-arrow-up");
      currentIcon.classList.add("fa-arrow-down");
    }
  });
});
