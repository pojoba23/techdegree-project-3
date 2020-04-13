'use strict';

var jobRoleSelect = document.getElementById('title');
var basicSection = document.getElementsByClassName('basic')[0];

document.getElementById("title").addEventListener("change", function(){
  var jobSelected = jobRoleSelect.options[jobRoleSelect.selectedIndex].value;
  console.log(jobSelected);
  
  if(jobSelected === 'other') {
    var otherText = document.createElement('input');
    // Add an text input field. Use the id of "other-title" 
    
    otherText.setAttribute('id', 'other-title');
    otherText.setAttribute('type', 'text');
    otherText.setAttribute('name', 'other_field');
    otherText.setAttribute('placeholder', 'Your Title');
    
    var otherLabel = document.createElement('label');
    otherLabel.setAttribute('for', 'other_field');
    otherLabel.innerHTML = 'Other:';

    basicSection.appendChild(otherLabel);
    basicSection.appendChild(otherText);
  }
});