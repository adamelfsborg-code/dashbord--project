// thumbnail 


    var dropZone = document.getElementById('drop-zone');

    // var startUpload = function (files) {
    //     console.log(files)
    // }
    

    dropZone.ondrop = function (e) {
        e.preventDefault();
        this.className = 'upload-console-drop check';
        $('#info').addClass('hidden')
        $('#text').removeClass('hidden')
        // console.log(e.dataTransfer.files)
        var startUpload = e.dataTransfer.files[0].path;
        return startUpload
    }

    dropZone.ondragover = function() {
       this.className = 'upload-console-drop drop';
       return false;
    };
    dropZone.ondragleave = function() {
        this.className = 'upload-console-drop';
        return false;
     }


// time

(function(){
   
    "use strict";
    // var startDate = document.getElementById('picker-start').val;
    
    $('#submit-project').on("click", function() {
        var startDate = $('#picker-start').val()
        var endDate = $('#picker-end').val()
    
        console.log(`startDate: ${startDate}`);
        console.log(`DueDate: ${endDate}`);
    });
}());

// price 

(function () {
    "use strict";

    $('#submit-project').on('click', function() {
        var price = $('#price').val()
        console.log(`price of the project: ${price}`)
    });

}());

// name of project and overwiew 

(function(){
    "use strict";
    $('#submit-project').on('click', function () {
        var name = $('#name').val()
        var overview = $('#overview').val()
        console.log(`name of the project: ${name}`)
        console.log(`overview of the project: ${overview} `)
    });


}());



// navigation

$(function() {

    $(".nav-link").on("click", function() {
        console.log('hello')
      //hide all sections
      $(".content-section").hide();
      $('.section-analytics').hide()
      //show the section depending on which button was clicked
      $("#" + $(this).attr("data-section")).show();
    });
  
  });

