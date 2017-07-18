    function readURL(input) {
        var fileTypes = ['jpg', 'jpeg', 'png'];  //acceptable file types

            if (input.files && input.files[0]) {
                var extension = input.files[0].name.split('.').pop().toLowerCase(),  //file extension from input file
                    isSuccess = fileTypes.indexOf(extension) > -1;  //is extension in acceptable types

                if (isSuccess) { //yes
                    var reader = new FileReader();
                    reader.onload = function (e) {
                       $('#imagePreview').attr('src', e.target.result);
                    }

                    reader.readAsDataURL(input.files[0]);
                }
                else { 

                    var warning = '<span style="color:green;">Your file seems to be not an image format </br> we accept: .jpg, .png and .gif  </span>';
                    var markup = '<!-- Modal -->'+
                              '<div class="modal fade" id="myModal" role="dialog">'+
                                '<div class="modal-dialog">'+
                                  '<!-- Modal content-->'+
                                  '<div class="modal-content">'+
                                    '<div class="modal-header">'+
                                      '<button type="button" class="close" data-dismiss="modal">&times;</button>'+
                                      '<h4 class="modal-title">hmm I am sorry..</h4>'+
                                    '</div>'+
                                    '<div class="modal-body">'+
                                      '<p>'+warning+'</p>'+
                                    '</div>'+
                                    '<div class="modal-footer">'+
                                      '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>'+
                                    '</div>'+
                                  '</div>'+
                                '</div>'+
                              '</div>';

                              $('body').append(markup);

                            $('#myModal').modal({
                                        "backdrop":'static',
                                        "keyboard":true,
                                        "show":true
                            })
                    
                    


                    
                }
            }
    }
    
    $("#file-input").change(function(){
        readURL(this);
    });

