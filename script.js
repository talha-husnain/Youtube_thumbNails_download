function downloadThumbnails() {
  var videoUrl = document.getElementById('videoUrl').value;
  var videoId = getYouTubeId(videoUrl);
  var thumbnailsContainer = document.getElementById('thumbnailsContainer');

  if (videoId !== '') {
    thumbnailsContainer.innerHTML = ''; // Clear previous results

    // Thumbnail URLs for different sizes
    var thumbnailSizes = [
      { name: 'Full HD', size: 'maxresdefault' },
      { name: 'Medium', size: 'mqdefault' },
      { name: 'Small', size: 'default' },
    ];

    thumbnailSizes.forEach(function (size) {
      var thumbnailUrl =
        'https://img.youtube.com/vi/' + videoId + '/' + size.size + '.jpg';

      // Creating thumbnail image elements
      var thumbnailImg = document.createElement('img');
      thumbnailImg.src = thumbnailUrl;
      thumbnailImg.alt = 'YouTube Thumbnail - ' + size.name;
      thumbnailImg.style.maxWidth = '200px'; // Adjust image size for display

      // Creating download links for each thumbnail size
      var downloadLink = document.createElement('a');
      downloadLink.href = thumbnailUrl;
      downloadLink.textContent = 'Download ' + size.name + ' Thumbnail';
      downloadLink.download = 'youtube_thumbnail_' + size.size + '.jpg';
      downloadLink.style.display = 'block'; // Place download links on new lines

      // Appending thumbnail images and download links to the options div
      thumbnailsContainer.appendChild(thumbnailImg);
      thumbnailsContainer.appendChild(document.createElement('br'));
      thumbnailsContainer.appendChild(downloadLink);
      thumbnailsContainer.appendChild(document.createElement('br'));
    });
  } else {
    thumbnailsContainer.innerHTML = 'Please enter a valid YouTube video URL.';
  }
}

function getYouTubeId(url) {
  var videoId = '';
  if (url.includes('youtube.com/watch?v=')) {
    videoId = url.split('v=')[1].split('&')[0];
  } else if (url.includes('youtu.be/')) {
    videoId = url.split('youtu.be/')[1].split('?')[0];
  }
  return videoId;
}
