var actions = (function(){
    var $ = ADSPDBLjQuery,that = this;
    var setUpEvents = {

        hashChangedCallback : function(hash){
            console.log(hash);
            return hash;
        }
    }
    var videoPlayer = function(video,type){
        switch(type){
            case 'vast':

                break;
            case 'normal':

                break;
        }
    }

    var events = (function(){
        $(window).on('hashchange', function () {
            actions.setUpEvents.hashChangedCallback(location.hash);
        });
    })();

    return {
        setUpEvents:setUpEvents
    }
})();