//root directory  
var settings = require("web_settings");//root directory
var sharp = require('sharp');//library for resizing images
var fs = require('fs');


var imageProccesingObject = { callback:function(name){ return name; }};//object to hold image metadata (size,extension etc);

function processImg ( imageobject ) {
      
      /*
            to process images you need those information from the imageobject
            console.log(imageobject);
      */
      var image = sharp(imageobject['path']); //it takes url of the image;
      image
        .metadata()
        .then(function(metadata) {
          return image
            .resize(200,null)
            .toFile(imageobject['originalname'], function(err) {
              //rename and move file since .toFile('output.png') deosnt except paths only file name and extensio

              //rename and place converted image to its set destionation;
              //console.log('from processisng');
              //console.log(imageobject['originalname']);
              //console.log(imageobject['userNamePath']);
              fs.rename(imageobject['originalname'],imageobject['userNamePath'],function(err){  
                  imageProccesingObject.callback(imageobject['userNamePath']);
                  //remove old one from uploads
                  if( fs.statSync(imageobject['destination']).isDirectory()) {
                           fs.unlink(imageobject['path']);
                  };
                   

              }); 

             
          });
            
        });


        return image;
}
process.on('message', function (imageMetadata ) {
  console.log('Image processing started...');

 //this is has to be node stream in order to call events below !
 var stream = processImg(imageMetadata); //assign a function to a stream and add events to monitor the progress it has to return the value;



  //below only will worok for node stream so need to use pipe in order to work check plase 

  
  /*stream.on('end', function () {
    process.send('Image processing complete');
    process.exit();
  });
  stream.on('error', function (err) {
    process.send(err);
    process.exit(1);
  });*/


});
module.exports = imageProccesingObject;


  