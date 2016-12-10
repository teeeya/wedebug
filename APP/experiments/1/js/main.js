var player = videojs('video-player');
//...
google.ima.settings.setVpaidAllowed(true);
//...
player.ima({
    debug: config['debug'],
    adTagUrl: 'Ad tag here',
    id: 'video-player'
});
