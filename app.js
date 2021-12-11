// we get the elements
const textSpan = document.querySelector('.text');
const dialogBox = document.querySelector('.dialog-box');
const span = document.querySelector('.dialog-text');
const btnContainer = document.querySelector(".btns");
const yesBtn = document.getElementById('yes');
const noBtn = document.getElementById('no');
const closeBtn = document.getElementById('close');
const restoreBtn = document.getElementById('restore');
const minimize = document.getElementById('minimize');
const minRestore = document.getElementById('min-restore');


// a dynamically generated click counter; the values will always be between 2 and 10
let clickCount = Math.trunc(Math.random() * (10 - 2) + 2);

// an array of possible replies when the user closes the dialog box
const replyArr = ["you have to refresh now you absolute retard",
    "what did you think was going to happen?",
    "you are indeed a nigger, aren't you?",
    "you must be feeling stupid right now",
    "just refresh you silly goose"
]


// we get a click listener for the yes button
yesBtn.addEventListener('click', () => {
    // the span text gets changed to "i knew it"
    span.textContent = "I knew it."
    // the buttons go pfff
    btnContainer.classList.toggle("hidden");
})

// we get the click listener for the no button
noBtn.addEventListener('click', () => {
    // randomly change the position of the no btn

    // this changes the horizantal postition
    noBtn.style.left = `${Math.trunc(Math.random() * (100 - -100) + -100)}px`
    // this changes the vertical postition
    noBtn.style.top = `${Math.trunc(Math.random() * (50 - -50) + -50)}px`

    // change the value of the variable clickCount defined above each time the button is clicked
    clickCount -= 1;
    // if the clickCount is 0 then the no btn goes pfff
    if (clickCount === 0) noBtn.classList.toggle('hidden');
})

// a click event for the close button
closeBtn.addEventListener('click', () => {
    // the dialog box goes pfff
    dialogBox.classList.toggle('hidden');
    // a random reply is chosen from the array defined above and placed as a text content for the span
    textSpan.textContent = replyArr[Math.trunc(Math.random() * (replyArr.length - 1) + 1)];
})

// minimize click listener
minimize.addEventListener('click', () => {
    // dialog  box goes pfff
    dialogBox.classList.toggle('hidden');
    // minRestore goes brrr
    minRestore.classList.toggle('min-restore')
})


// minRestore event listener
minRestore.addEventListener('click', () => {
    // dialog  box goes brrr
    dialogBox.classList.toggle('hidden');
    // minRestore goes pfff
    minRestore.classList.toggle('min-restore')
})

// restoreBtn event listener

restoreBtn.addEventListener('click', () => {
    dialogBox.classList.toggle('big');
})