/* select */
const selectedAll = document.querySelectorAll('.selected');

selectedAll.forEach((selected) => {
  const optionsContainer = selected.previousElementSibling;
  const optionsList = optionsContainer.querySelectorAll('.option');
  
  selected.addEventListener('click', function() {
    if (optionsContainer.classList.contains('active')) {
      optionsContainer.classList.remove('active');
    } else {
      let currentActive = document.querySelector('.options-container.active');

      if (currentActive) {
        currentActive.classList.remove('active');
      }
      optionsContainer.classList.add('active');
    }
  });
  
  optionsList.forEach( o => {
    o.addEventListener('click', function() {
      selected.innerHTML = o.querySelector('label').innerHTML;
      optionsContainer.classList.remove('active');
    });
  });
});

/* Select - 오늘 날짜 default 값으로 넣기 */
var dateControl = document.querySelector('input[type="date"]');
dateControl.value = new Date().toISOString().slice(0, 10);
