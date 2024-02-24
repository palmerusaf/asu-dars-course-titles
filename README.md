# Directions
Nav to DARS screen hit f12 then copy paste the following line in the dev console
```javascript

function replaceCourseCodes() {
  document.body.innerHTML += `<script type="module" crossorigin src="https://github.com/palmerusaf/asu-dars-course-titles/raw/main/main.js"></script>`;
}
replaceCourseCodes();

```
