/*
    Usage

    call modules.youtube.start()

    Loads youtube video into chosen contains.

    Registers events to load other videos on click.

    change video queue to include different videos

    video_queue['id_of_button_to_launch_video'] = 'youtube video id'

*/
var modules = modules || {};

(function(global){
    
    global.youtube = {

        start: function(){
            load_youtube_api();
        }
    }

    var player;
    var video_queue = {
        'top-left': 'A9AYOLz6Qj0',
        'top-right': 'Tu6VpAepsgc',
        'bottom-left': 'dydqzdPBlc',
        'bottom-right': 'mwIbVgVpcQY'
    };

    var container = 'youtube-container';

    // Load youtube api
    var load_youtube_api = function(){
        var tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        var first_script = document.getElementsByTagName('script')[0];
        first_script.parentNode.insertBefore(tag, first_script);
    };

    // Open a new video.
    // Only call this function once youtube api has loaded
    var open_video = function(video_id, container_id){

        player = new YT.Player(container_id, {
            height: $('#' + container_id).height(),
            width: $('#' + container_id).width(),
            videoId: video_id,
            playerVars:{
                autoplay:1,
                fs:0
            },
            events: {
                'onReady': onPlayerReady
            }
        });
    }


    window.onYouTubeIframeAPIReady = function(){
        console.log('apu')
        open_video(video_queue['top-left'], container);
        // Attach click events
        attach_clicks();
    };

    onPlayerReady = function(e){
        player.mute();
    };

    var attach_clicks = function(){// Attach click events
        for (var tag in video_queue) {
            if (video_queue.hasOwnProperty(tag)) {
                
                $('#' + tag).on('click', function(){
                    var id = $(this).attr('id');
                    player.loadVideoById(video_queue[id])
                })    
            }
        }
    };
    
})(modules);