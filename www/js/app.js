// Dom7
var $ = Dom7;

// Theme
var theme = 'auto';
if (document.location.search.indexOf('theme=') >= 0) {
  theme = document.location.search.split('theme=')[1].split('&')[0];
}

// Init App
var app = new Framework7({
  id: 'io.framework7.testapp',
  root: '#app',
  theme: theme,
  data: function () {
    return {
      user: {
        firstName: 'John',
        lastName: 'Doe',
      },
    };
  },
  methods: {
    helloWorld: function () {
      app.dialog.alert('Hello World!');
    },
  },
  routes: routes,
  vi: {
    placementId: 'pltd4o7ibb9rc653x14',
  },
});



$(document).on("click","#TakePhoto",function() {
	navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
	destinationType: Camera.DestinationType.FILE_URI, // iOS and Android
	correctOrientation: true });
});

$(document).on("click","#TakeGal",function() {
 navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
                    sourceType: Camera.PictureSourceType.PHOTOLIBRARY, 
                    allowEdit: true,
                    destinationType: Camera.DestinationType.FILE_URI
                });
});



function onSuccess(imageURI) {
  	var image = document.getElementById('myImage');
    	image.src = imageURI;
	localStorage.imageURI=imageURI;
}

function onFail(message) {
    alert('Failed because: ' + message);
}

$(document).on("click","#upload",function() {
	
	fileee=localStorage.imageURI;
	
	alert('upload'+fileee);

                var options = new FileUploadOptions();
                options.fileKey = "file";
                options.fileName = fileee.substr(fileee.lastIndexOf('/') + 1);
                options.mimeType = "image/jpeg";

                var params = {};
                params.value1 = "test";
                params.value2 = "param";

                options.params = params;
                options.chunkedMode = false;

                var ft = new FileTransfer();
                ft.upload(fileee, "http://oblozhka.mirada.kz/upl.php", function(result){
                    alert('successfully uploaded ' + result);
                }, function(error){
                    alert('error : ' + JSON.stringify(error));
                }, options);
});


