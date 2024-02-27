var dom = document.getElementById('player');
videojs(dom, {}, function(){
    this.on('loadedmetadata', 
	function(){this.currentTime(4);		
    });
});
</script>

</input id="ExoPlayer">
<video id="player" 
 width="100%" height= "240px"; 
 class="video-js vjs-big-play-centered"
 controls
 preload="auto"
 poster="#"  
 data-setup='{"ExoPlayer":true}'>
