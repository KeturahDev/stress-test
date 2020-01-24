$(document).ready(function () {
  $('#formy').submit(function (event) {
    event.preventDefault();
    $('#output').show();

    var symptoms = []
    var medicalSymptoms = []
    var copingMethods = []

    $('input:checkbox[name=symptom]:checked').each(function () {
      var symptom = $(this).val();
      symptoms.push(symptom);
    })
    $('input:checkbox[name=medical]:checked').each(function () {
      var medicalSymptom = $(this).val();
      medicalSymptoms.push(medicalSymptom);
    })
    $('input:checkbox[name=cope-method]:checked').each(function () {
      var copingMethod = $(this).val();
      copingMethods.push(copingMethod);
    })

    var allSymptoms = symptoms.concat(medicalSymptoms);


    console.log('all symptoms array length', allSymptoms.length);
    console.log('symptoms array length', symptoms.length);
    console.log('medical array length', medicalSymptoms.length);
    console.log('coping array length', copingMethods.length);


    // D E V E L O P E R S   N O T E 
    //----------------------------------------
    // bug @ high symptoms and high coping mechanisms. 

    if (allSymptoms.length > 6 && copingMethods.length < 3) {
      $('#output').text('Looks like your stressed, and you arent doing enough to conteract this. Lets get you some help. *insert links*')
    } else if (allSymptoms.length <= 6 && allSymptoms.length > 3 && copingMethods.length >= 3) {
      $('#output').text('Looks like you might be stressed here and there, but your handling it with some nice coping methods. Keep up the good work, and keep doing what you can to help your situation.')
    } else {
      $('#output').text('looks like your golden baby. keep it up!')
    }


    $('#formy').hide();
  })
})