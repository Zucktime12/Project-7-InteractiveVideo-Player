$('video').mediaelementplayer({
  success: function(player, node) {
    $('#' + node.id + "-mode").html("mode: " + player.pluginType);
  }
});
let j = 0;
const textWrapper = document.querySelector('.container');
const lines = document.querySelectorAll('main span');
const textTime = [
  [0, 4.130],
  [4.130, 7.535],
  [7.535, 11.270],
  [11.270, 13.960],
  [13.960, 17.940],
  [17.940, 22.370],
  [22.370, 26.880],
  [26.880, 30.920],
  [30.920, 34.730],
  [34.730, 39.430],
  [39.430, 41.190],
  [41.190, 46.300],
  [46.300, 49.270],
  [49.270, 53.760],
  [53.760, 57.780],
  [57.780, 61]
];
function highlightCaption(text, hightlight = "yes"){
  if (hightlight == 'yes'){
    text.classList.add("highlight");
  } else if(hightlight == 'clear') {
    text.classList.remove("highlight");
  }
}
// Click on caption text to nagivate video
textWrapper.addEventListener('click', (e) => {
  // Clear Highlight
  for (let i = 0; i < lines.length; i+= 1){
    if (lines[i].className == "highlight") {
     highlightCaption(lines[i], "clear");
    }
  }
  // Jump video to the caption's start time
  let startTime = e.target.id;
  // video.play();
  video.setCurrentTime(textTime[startTime][0]);
  j = startTime;
});
// Highlight captions
video.addEventListener('timeupdate', () => {
  let caption = document.getElementById(j);
  if (video.getCurrentTime() >= textTime[j][0] &&  video.getCurrentTime() < textTime[j][1]){
    highlightCaption(caption);
  } else {
    highlightCaption(caption, 'clear');
    j++;
  }
});
