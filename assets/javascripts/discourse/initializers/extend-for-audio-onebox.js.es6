import PostView from 'discourse/views/post';

export default {
  name: 'extend-for-audio-onebox',

  initialize() {
    PostView.reopen({
      initializeAudioPlayer: function () {
        //let cooked = this.get('post.cooked');
        //let $cooked = $($.parseHTML(cooked));
        //let $html = $('<div />').html($cooked);
        //if ($html.find('.jp-jplayer').length) {
        //  console.log("WE HAVE A PLAYER");
        //} else {
        //  console.log("THERE IS NO PLAYER");
        //}
      },
    });

    //Utilities.reopen({
    //  isAudioFile: function(path) {
    //    return (/\.(wav|mp3|ogg)$/i).test(path);
    //  },

      // There should be a better way to do this.
      //uploadBaseUrl: function() {
      //  if (Discourse.S3BaseUrl) {
      //    return 'https:' + Discourse.S3BaseUrl;
      //  } else {
      //    var protocol = window.location.protocol + '//',
      //      hostname = window.location.hostname,
      //      port = ':' + window.location.port;
      //    if (port) {
      //      return protocol + hostname + port;
      //    } else {
      //      return protocol + hostname;
      //    }
      //  }
      //},

      //getUploadMarkdown: function(upload) {
      //  if (Discourse.Utilities.isAnImage(upload.original_filename)) {
      //    return '<img src="' + upload.url + '" width="' + upload.width + '" height="' + upload.height + '">';
      //  } else if (Discourse.Utilities.isAudioFile(upload.original_filename)) {
      //    return Discourse.Utilities.uploadBaseUrl() + upload.url;
      //  } else {
      //    return '<a class="attachment" href="' + upload.url + '">' + upload.original_filename + '</a> (' + I18n.toHumanSize(upload.filesize) + ')';
      //  }
      //}

    //});

  }
}

//(function handleAudio() {
//  $('##{track_id}').jPlayer({
//    ready: function () {
//      $(this).jPlayer('setMedia', {
//        title: 'test title',
//        wav: '#{@url}'
//      });
//    },
//    cssSelectorAncestor: "##{player_id}",
//    supplied: 'wav'
//    useStateClassSkin: true,
//    autoBlur: false,
//    smoothPlayBar: true,
//    keyEnabled: true,
//    remainingDuration: true,
//    toggleDuration: true
//  });
//})();