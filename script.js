
// copy the Email add
  
// function copyTextToClipboard(text) {
//     navigator.clipboard.writeText(text)
//       .then(function() {
//         console.log('Text copied to clipboard: ' + text);
//         alert(' copied to clipboard: \n ' + text);
//       })
//       .catch(function(error) {
//         console.error('Unable to copy text: ', error);
//       });
//   }
  
//   // Usage example
//   var copyButton = document.querySelector('.contact-email');
//   var textToCopy = 'dev.avinashjat@gmail.com';
  
//   copyButton.addEventListener('click', function() {
//     copyTextToClipboard(textToCopy);
//   });
  




  /*
  copy email to clipboard onclick
 */

document.querySelector(".contact-email").onclick = function(){
    copyStringToClipboard(".contact-email", "dev.avinash@gmail.com");
};




/**
 * copy text to clipboard
 */
function copyStringToClipboard(element, str, copyHtml=null, sleepTime=null) {
    var originalString = document.querySelector(element).innerHTML;
    var el = document.createElement('textarea');
    el.value = str;
    el.setAttribute('readonly', '');
    el.style = {position: 'absolute', left: '-9999px'};
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);

    if(copyHtml == null){
        copyHtml = "copied&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"
    }
    document.querySelector(element).innerHTML = copyHtml;
    if(sleepTime == null){
        sleepTime = 500
    }
    sleep(sleepTime).then(() => {
        document.querySelector(element).innerHTML = originalString;
    })
    console.log("done");
}

/**
 * delay execution of statement for some milliseconds
 */

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}