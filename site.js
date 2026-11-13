// Preencha o caminho quando o vídeo de apresentação estiver disponível.
const videoUrl = ''

if (videoUrl) {
  const frame = document.querySelector('#apresentacao')
  const video = document.querySelector('#video-template').content.firstElementChild.cloneNode(true)

  video.src = videoUrl
  frame.querySelector('.hero-photo').replaceWith(video)
  frame.querySelector('.video-caption').remove()
}
