# name: Audio Onebox
# about: Overrides the Audio Onebox gem
# version: 0.1
# authors: scossar

register_asset 'javascripts/discourse/lib/utilities.js'
register_asset 'vendor/jPlayer/src/skin/pink.flag/scss/jplayer.pink.flag.scss'
register_asset 'jplayer.pink.flag.jpg'
register_asset 'jplayer.pink.flag.seeking.gif'
register_asset 'vendor/jPlayer/src/javascript/jplayer/jquery.jplayer.js'
# register_asset 'vendor/buzz/dist/buzz.js'
# register_asset 'javascripts/process-audio.js'

class Onebox::Engine::AudioOnebox
  include Onebox::Engine
  matches_regexp /^(https?:)?\/\/.*\.(mp3|ogg|wav)(\?.*)?$/

  def always_https?
    WhitelistedGenericOnebox.host_matches(uri, WhitelistedGenericOnebox.https_hosts)
  end

  def filename
    uri.path.split('/')[-1].split('.')[0]
  end

  def track_id
    "track-#{filename}"
  end

  def player_id
    "player-#{filename}"
  end

  def button_id
    "button-#{filename}"
  end

  def to_html
    # "<audio controls><source src='#{@url}'><a href='#{@url}'>#{@url}</a></audio>"
    <<-HTML
    <div id="#{track_id}" class="jp-jplayer" data-audio-src="#{@url}"></div>
    <div id="#{player_id}" class="jp-audio" role="application" aria-label="media player">
      <div class="jp-type-single">
        <div class="jp-gui jp-interface">
          <div class="jp-volume-controls">
            <button class="jp-mute" role="button" tabindex="0">mute</button>
            <button class="jp-volume-max" role="button" tabindex="0">max volume</button>
            <div class="jp-volume-bar">
              <div class="jp-volume-bar-value"></div>
            </div>
          </div>
          <div class="jp-controls-holder">
            <div class="jp-controls">
              <button class="jp-play" role="button" tabindex="0" id="#{button_id}" onclick="function() {
              alert('this is a test');

              }">play</button>
              <button class="jp-stop" role="button" tabindex="0">stop</button>
            </div>
            <div class="jp-progress">
              <div class="jp-seek-bar">
                <div class="jp-play-bar"></div>
              </div>
            </div>
            <div class="jp-current-time" role="timer" aria-label="time">&nbsp;</div>
            <div class="jp-duration" role="timer" aria-label="duration">&nbsp;</div>
            <div class="jp-toggles">
              <button class="jp-repeat" role="button" tabindex="0">repeat</button>
            </div>
          </div>
        </div>
        <div class="jp-details">
          <div class="jp-title" aria-label="title">&nbsp;</div>
        </div>
        <div class="jp-no-solution">
          <span>Update Required</span>
          To play the media you will need to either update your browser to a recent version or update your <a href="http://get.adobe.com/flashplayer/" target="_blank">Flash plugin</a>.
        </div>
      </div>
</div>
    HTML
  end
end