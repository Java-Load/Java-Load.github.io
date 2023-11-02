function downloadAndRedirect(downloadLink) {
    var a = document.createElement('a');
    a.style.display = 'none';
    document.body.appendChild(a);
    a.href = downloadLink;
    a.download = downloadLink.split('/').pop();
    a.click();
    document.body.removeChild(a);

    setTimeout(function () {
      window.location.href = "thanks.html";
    }, 4500);
}

function donate() {
    window.open('https://google.com', '_blank');
}

window.addEventListener('load', function() {
    console.log('Куда полез? Негодяй :D');
});