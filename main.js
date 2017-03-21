$(document).ready(function(){
  $.getJSON('http://json-data.herokuapp.com/forms', function(data){
    // ALL CODE GOES IN HERE
    // the formData variable includes all of the form information you need
    var formHTML = ""
    
    data.forEach(function(input){
      if (input.type === 'text' || input.type === 'email' || input.type === 'tel') {
        formHTML +=`<div class="box"><input type="${input.type}" placeholder="${input.label}" id="${input.id}"/></div>`          
      }

      if (input.type === 'select') {
        formHTML += `<select id="${input.id}">
          <option value=''>${input.label}</option>`

          input.options.forEach(function(option){
            formHTML += `<option value="${option.value}">${option.label}</option>`
          })

        formHTML +=  `</select>`
      }

      if (input.type === 'textarea') {
        formHTML += `<div class="box2"><textarea id="${input.id}" placeholder="${input.label}"></textarea></div>`
      }
    })

    $("#application").html(formHTML)
  })
})