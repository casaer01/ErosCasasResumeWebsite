function copyemailfunc(inputfield) {
    /* Get the text field */
    var copyText = document.getElementById(inputfield);
  
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/
  
    /* Copy the text inside the text field */
    document.execCommand("copy");
  } 