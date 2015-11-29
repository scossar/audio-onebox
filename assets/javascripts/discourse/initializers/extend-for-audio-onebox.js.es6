import PostView from 'discourse/views/post';

export default {
  name: 'extend-for-audio-onebox',

  initialize() {
    PostView.reopen({

      initializeAudioPlayer: function () {
        let cooked = this.get('post.cooked');
        let $cooked = $($.parseHTML(cooked));
        let $html = $('<div />').html($cooked);
        if ($html.find('.jp-jplayer').length) {
          console.log("WE HAVE A PLAYER");
        } else {
          console.log("THERE IS NO PLAYER");
        }
      },
    });
  }
}