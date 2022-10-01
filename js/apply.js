const videoElement = document.getElementById('video');
const imgElement = document.getElementById('img');
const titleElement = document.getElementById('title');
const userElement = document.getElementById('user');




function applyWallpaper(url, title, user) {
    videoElement.style.display = 'none';
    imgElement.style.display = 'block';
    imgElement.src = url;
    titleElement.innerText = title;
    userElement.innerText = user;
}