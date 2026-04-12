# JS Quiz App

A simple and interactive JavaScript Quiz Application built with vanilla HTML, CSS, and JavaScript. This project was created to practice DOM manipulation, event handling, and basic JavaScript logic.

---

## Preview

![JS Quiz App Screenshot](./screenshot.png)

---

## Features

- 10 JavaScript-based multiple choice questions
- Instant feedback — correct answer highlights green, wrong answer highlights red
- Score tracking throughout the quiz
- Final score displayed at the end
- Auto-restarts after quiz completion
- Clean and minimal UI

---

## Built With

- **HTML5** — Structure and layout
- **CSS3** — Styling and visual feedback
- **JavaScript (Vanilla)** — Logic, DOM manipulation, event handling

---

## Project Structure

```
JS-Quiz-App/
│
├── index.html       # Main HTML file
├── style.css        # Stylesheet
└── script.js        # Quiz logic and functionality
```

---

## How to Run

1. Clone this repository:
   ```bash
   git clone https://github.com/IshtiaqueDev/JS-Quiz-App.git
   ```

2. Navigate into the project folder:
   ```bash
   cd JS-Quiz-App
   ```

3. Open `index.html` in your browser — just double click it or use Live Server in VS Code.

No installations, no dependencies, no build tools needed.

---

## How to Play

1. Click the **Start** button to begin the quiz
2. Read the question and click on your answer
3. Green means correct, Red means wrong
4. The correct answer is always highlighted if you get it wrong
5. Click **Next** to move to the next question
6. At the end, your final score is displayed

---

## What I Learned

- Selecting and manipulating DOM elements using `querySelector` and `querySelectorAll`
- Using `addEventListener` for click events
- Dynamically updating text content with `innerText`
- Managing state with variables like `score`, `currentQ`, and `no`
- Adding and removing CSS classes with `classList`
- Using `setTimeout` for delayed actions

---

## Known Issues

- App reloads the page after quiz ends instead of showing a proper results screen
- No timer per question
- Questions always appear in the same order

---

## Future Improvements

- [ ] Add a timer for each question
- [ ] Shuffle questions randomly
- [ ] Show a proper results screen instead of alert
- [ ] Add more question categories
- [ ] Make it fully mobile responsive

---

## Author

**Ishtiaque Ali**
- GitHub: [@IshtiaqueDev](https://github.com/IshtiaqueDev)

---

## License

This project is open source and available under the [MIT License](LICENSE).

---

> Made while learning JavaScript
