import PostView from 'discourse/views/post';

export default {
  name: 'extend-for-audio-onebox',

  initialize() {
    PostView.reopen({
      hasAudioPlayer: function () {
        return this.$().find('.jp-jplayer').length;
      }.property(),

      initializeAudioPlayer: function () {
        if (this.get('hasAudioPlayer')) {
          let $track = this.$().find('.jp-jplayer'),
            $player = this.$().find('.jp-audio'),
            trackId = $track.attr('id'),
            trackSrc = $track.attr('data-audio-src').split('?')[0],
            trackTitle = $track.attr('data-audio-src').split('=')[1],
            playerId = $player.attr('id'),
            fileType = trackSrc.split('.').slice(-1)[0];

          $('#' + trackId).jPlayer({
            ready: function () {
              $(this).jPlayer("setMedia", {
                title: trackTitle,
                wav: fileType === 'wav' ? trackSrc : null,
                mp3: fileType === 'mp3' ? trackSrc : null,
                ogg: fileType === 'ogg' ? trackSrc : null,
              });
            },
            cssSelectorAncestor: '#' + playerId,
            supplied: fileType,
            useStateClassSkin: true,
            autoBlur: false,
            smoothPlayBar: true,
            keyEnabled: true,
            remainingDuration: true,
            toggleDuration: true
          });
        }
      }.on('didInsertElement', 'postViewUpdated'),

      destroyAudioPlayer: function () {
        if (this.get('hasAudioPlayer')) {
          let $trackId = this.$().find('.jp-jplayer').attr('id');
          $('#' + trackId).jPlayer('destroy');
        }
      }.on('willDestroyElement')
    });
  }
}

