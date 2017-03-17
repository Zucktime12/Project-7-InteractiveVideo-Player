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
function highlightCaption(span, hightlight = 'yes'){
  if (hightlight == 'yes'){
    span.style.color = 'orange';
    span.style.fontWeight = 'bold';
  }else if(hightlight == 'reset') {
    span.style.color = '#000';
    span.style.fontWeight = 'normal';
  }
}
// Click on caption text to nagivate video
textWrapper.addEventListener('click', (event) => {
  // Clear Highlight
  for(let i = 0; i < lines.length; i++){
    highlightCaption(lines[i], 'reset');
  }
  // Jump video to the caption's start time
  let startTime = event.target.className;
  video.play();
  video.setCurrentTime(textTime[startTime][0]);
  j = startTime;
});
// Highlight captions
video.addEventListener('timeupdate', () => {
  let caption = document.getElementsByClassName(j)[0];
  if (video.getCurrentTime() >= textTime[j][0] &&  video.getCurrentTime() < textTime[j][1]){
    highlightCaption(caption);
  } else if (!video.paused){
    highlightCaption(caption, 'reset');
    j++;
  }
});
