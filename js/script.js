(function() {
  "use strict";

  function copyToClipboard(elem) {
    var target = elem;

    // select the content
    var currentFocus = document.activeElement;

    target.focus();
    target.setSelectionRange(0, target.value.length);

    // copy the selection
    var succeed;
    execCommand
    try {
      succeed = document.execCommand("copy");
    } catch (e) {
      console.warn(e);

      succeed = false;
    }

    // Restore original focus
    if (currentFocus && typeof currentFocus.focus === "function") {
      currentFocus.focus();
    }

    if (succeed) {
      $(".copied").animate({ top: -25, opacity: 0 }, 700, function() {
        $(this).css({ top: 0, opacity: 1 });
      });
    }

    return succeed;
  }

  $("#copyButton, #copyTarget").on("click", function() {
    copyToClipboard(document.getElementById("copyTarget"));
   
  });
})();
     // script.js
     const showCountriesBtn = document.getElementById('showCountriesBtn');
     const countriesList = document.getElementById('countriesList');
     
     showCountriesBtn.addEventListener('click', function() {
       countriesList.classList.toggle('visible');
     });
// script.js
const showCountriesBtn1 = document.getElementById('showCountriesBtns');
const countriesList1  = document.getElementById('countriesLists');

showCountriesBtn1.addEventListener('click', function () {
  countriesList1.classList.toggle('visible');
});