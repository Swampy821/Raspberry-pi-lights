var gpio = require( "node-gpio" );


var GPIO = gpio.GPIO;
var led = new GPIO( "18" );


led.open();
led.setMode(gpio.OUT);
var on = false;
function blink() {
    if ( !on ) {
        led.write( gpio.HIGH );
        on = true;
    } else {
        led.write( gpio.LOW );
        on = false;
    }
    setTimeout( function() {
        blink();
    }, 500 );
}
led.write( gpio.LOW );
led.close();

