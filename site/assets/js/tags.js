
// https://radicalweb.design/exemples/filtering/

function filterArticles(hashtag) {
  const articles = document.querySelectorAll(".articles li");
  const hashtag_link = document.querySelector('a[href="#' + hashtag + '"]');
  const active_hashtag_link = document.querySelector('.active');
  if (active_hashtag_link) {
    active_hashtag_link.classList.remove('active')
  }
  hashtag_link.classList.add('active');
  articles.forEach( element => {
    if(element.classList.contains(hashtag)){
      element.classList.add('visible');
    } else {
      element.classList.remove('visible');
    }
  })
}

document.addEventListener("DOMContentLoaded", function () {
  
  const hashtag = document.location.hash?.replace('#', '') ?? null;
  const hashtag_links = document.querySelectorAll(".hashtags a");

  hashtag_links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      window.history.pushState(null, null, link.getAttribute('href'));
      filterArticles(link.getAttribute('href').replace('#', ''));
      document.querySelector(".articles").scrollIntoView({behavior:"smooth"})
    })
  });
  if (hashtag) {
    filterArticles(hashtag)
  }
  
});