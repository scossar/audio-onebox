function processAudio(audioFile) {
  var sound = new buzz.sound(audioFile);
  var time = sound.getTime();
  var duration = sound.getDuration();

  sound.play();
}