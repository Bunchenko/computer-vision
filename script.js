const video= document.querySelector('.video');

async function getMedia() {
    const stream = await navigator.mediaDevices.getUserMedia({video: true});
    video.srcObject = stream;
}

getMedia()