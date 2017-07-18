/*
    logs Module.
    by john

    This module tracks percentage view length as a user watches
    a video on jwplayer.

    Useage

    var o = {
                '0': 'http://0',
                '25': 'http://25',
                '50': 'http://50',
                '75': 'http://75',
                '100': 'http://100'
    };

    logs.init(113, o);

    Can use any percentage. i.e. '34'
    Provide the urls of tracking pixel you want to use.
    Support not always given for video length. So enter it however you like.

 */
var modules = modules || {};

(function(global){
    
    global.logs = {
        
        
        init: function(length, obj){
            var s = true;
            var that = this;
            this.conf = obj;

            
            jwplayer('video-container').onPlay(function(){
                // Jwplayer often fires onPlay event twice. Prevent this
                // using this s check hack.
                if(s){
                    s = false;
                    
                    // Function to round n to 1db.
                    // jwplayer resolves play times to 1 db.
                    var r = function(n){
                        var d = Math.round(n * 10) / 10;
                        return d;
                    };

                    // Calculate the number of seconds each
                    // percentage represents. And assign object properties
                    // for each.
                    for(var n in obj){
                        // Round numbers to correct precision
                        var p = r(n / 100 * length);
                        that['t' + n] = p;
                        that['state' + n] = true;
                    }

                    $('body').append('<img src="'+obj['0']+'" style="height:1px;width:1px;" />');

                    jwplayer('video-container').onTime(function(){
                        that.sendLogs();
                    });
                }
            });
        },


        sendLogs: function(){
            var that = this;
            var p = jwplayer('video-container').getPosition();

            // Function to send log if play head is within 0.3s of
            // trackable percentage length.
            var sendLog = function(len, url){
                var t = that['t' + len];
                if(p <= t  && p >= t - 0.3){
                    var b = that['state' + len];
                    if(b){
                        that['state' + len] = !b;
                        $('body').append('<img src="'+ url +'" style="height:1px;width:1px;" />');
                    }
                }
            };
            
            for(var n in that.conf){
                sendLog(n, that.conf[n]);
            }
        }
    };
})(modules);