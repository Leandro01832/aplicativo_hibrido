// Wait for Cordova to load
    //
   // document.addEventListener("deviceready", onDeviceReady, false);
    document.addEventListener('deviceready', function(){ 
        onDeviceReady();
        var btn = document.getElementById('show'); 
        var btn2 = document.getElementById('show2');
        var btn3 = document.getElementById('show3');
        var btn4 = document.getElementById('Beep');

        
        btn.addEventListener('click', showAlert, false);

        btn2.addEventListener('click', Alert2, false);

        btn3.addEventListener('click', Alert3, false);
        
        btn4.addEventListener('click', playBeep, false);
    });

    
    window.onload = function(){
        
        
    }

    function onDeviceReady() {
        startWatch();
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }    

    // Show a custom alert
    //document.getElementById('demo').innerHTML
    function showAlert() {
        navigator.notification.alert(
            'Você esta usando o aplicativo da PIB Cataguases!',  // message
            'MSG',            // title
            'Mensagem'                  // buttonName
        );
    }

     function Alert2() {
        navigator.notification.confirm(
            'Você esta usando o aplicativo da PIB Cataguases!',  // message
            onConfirm,
            'MSG',            // title
            ['Restart', 'Exit', 'Outra Opção']                  // buttonName
        );
    }

    function onConfirm(buttonindex){
        alert("O botao selecionado foi: " + buttonindex)
    }

    function Alert3() {
        navigator.notification.prompt(
            'Escreva seu nome',  // message
            onPrompt,
            'registro',            // title
            ['ok', 'Exit'],                  // buttonName
            'Ex: leandro'
        );
    }

    function onPrompt(resultado){
        alert("O texto inscrito foi: " + resultado.input1 + "\n O botão apertado foi: " + resultado.buttonIndex)
    }

    // Beep three times
    //
    function playBeep() {
        navigator.notification.beep(2);
    }

    // Vibrate for 2 seconds
    //
    function vibrate() {
       navigator.notification.vibrate(2000);
    }

     function checkConnection () { 
        alert("entrou na função");
        var networkState = navigator . connection . type ;
         var states = {};
        states [ Connection . UNKNOWN ] = "Unknown connection" ;
        states [ Connection . ETHERNET ] = "Ethernet connection" ;
        states [ Connection . WIFI ] = "WiFi connection" ;
        states [ Connection . CELL_2G ] = "Cell 2G connection" ;
        states [ Connection . CELL_3G ] = "Cell 3G connection" ; 
        states [ Connection . CELL_4G ] = "Cell 4G connection" ;
        states [ Connection . CELL ] = "Cell generic connection" ;
        states [ Connection . NONE ] = "No network connection" ;
        alert ( "Connection type: \n " + networkState);

        return networkState;
    }

       alert( "Connection type: \n " + checkConnection());

       function startWatch() {

        // Update acceleration every 3 seconds
        var options = { frequency: 10000 };

        watchID = navigator.accelerometer.watchAcceleration(Success, onError, options);
    }

     function stopWatch() {
        if (watchID) {
            navigator.accelerometer.clearWatch(watchID);
            watchID = null;
        }
    }

    // onSuccess: Get a snapshot of the current acceleration
    //
    function Success(acceleration) {
        var element = document.getElementById('accelerometer');
        element.innerHTML = 'Acceleration X: ' + acceleration.x + '<br />' +
                            'Acceleration Y: ' + acceleration.y + '<br />' +
                            'Acceleration Z: ' + acceleration.z + '<br />' +
                            'Timestamp: '      + acceleration.timestamp + '<br />';
    }

    // onError: Failed to get the acceleration
    //
    function onError() {
        alert('onError!');
    }

   

    // PhoneGap is ready
    //
   

    // onSuccess Geolocation
    //
    function onSuccess(position) {
        var element = document.getElementById('geolocation');
        element.innerHTML = 'Latitude: '           + position.coords.latitude              + '<br />' +
                            'Longitude: '          + position.coords.longitude             + '<br />' +
                            'Altitude: '           + position.coords.altitude              + '<br />' +
                            'Accuracy: '           + position.coords.accuracy              + '<br />' +
                            'Altitude Accuracy: '  + position.coords.altitudeAccuracy      + '<br />' +
                            'Heading: '            + position.coords.heading               + '<br />' +
                            'Speed: '              + position.coords.speed                 + '<br />' +
                            'Timestamp: '          + new Date(position.timestamp)          + '<br />';
    }

    // onError Callback receives a PositionError object
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }