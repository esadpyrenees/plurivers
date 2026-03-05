
// Based on https://www.bram.us/2020/04/26/the-quest-for-the-perfect-dark-mode-using-vanilla-javascript/

const setColorMode = (mode) => {
  if (mode) {
    document.documentElement.setAttribute('data-force-color-mode', mode);
    window.localStorage.setItem('color-mode', mode);
    document.querySelector('#toggle-darkmode').checked = (mode === 'dark');
  } else {
    document.querySelector('#toggle-darkmode').checked = window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
}

document.querySelector('#toggle-darkmode').addEventListener('click', (e) => {
  setColorMode(e.target.checked ? 'dark' : 'light');
});















// const montitre = document.querySelector('.article h1');
// const image = document.createElement("img");
// const figure = document.createElement("figure");
// const caption = document.createElement("figcaption");
// const touteslesimages = [
//   {
//     url:"plurivers-images-001.jpg",
//     caption: "« <i>No a la guerra : otro mundo es posible.</i> » Dessin de Beatriz Aurora (Mexique)."
//   },
//   {
//     url:"plurivers-images-002.jpg",
//     caption: "« Acadjas », habitations lacustres et systèmes piscicoles du peuple tofinu (Bénin)."
//   },
//   {
//     url:"plurivers-images-003.jpg",
//     caption: "Tombe, dans le vieux village de Kasaan (Alaska). "
//   },
//   {
//     url:"plurivers-images-004.jpg",
//     caption: "Monastère « Nid du Tigre » (Bhoutan)."
//   },
//   {
//     url:"plurivers-images-005.jpg",
//     caption: "Kanaks déportés et réduits à l’esclavage dans une plantation de canne à sucre (Australie)."
//   },
//   {
//     url:"plurivers-images-006-a.jpg",
//     caption: "En déclarant, lors de son discours d’investiture en 1949, que plus de la moitié de la population mondiale venait de « régions sous-développées », le président Harry Truman a inauguré l’ère du « développement », qui a succédé à l’ère coloniale."
//   },
//   {
//     url:"plurivers-images-006-b.jpg",
//     caption: "Affiche-manifeste de la campagne internationale «Wages For Housework » demandant à l’État de reconnaître et de récompenser économique- ment le travail souvent invisible des femmes (1972) – une initiative du Collectif international féministe cofondé par Silvia Federici."
//   },
//   {
//     url:"plurivers-images-007.jpg",
//     caption: "Des femmes du mouvement Nayakrishi Andolon (Le Nouveau Mouvement agricole) en lutte contre les projets d’ogm de Syngenta, Monsanto et d’autres entreprises semencières transnationales. (Bangladesh)."
//   },
//   {
//     url:"plurivers-images-008.jpg",
//     caption: "6e conférence internationale du mouvement international La Vía Campesina (La voie paysanne) à Jakarta en 2013 (Indonésie)."
//   },
//   {
//     url:"plurivers-images-009.jpg",
//     caption: "Banque de semences de l’ong Navdanya (fondée par Vandana Shiva) – qui a préservé des centaines de souches de riz, de blé et de nombreuses céréales (Inde)."
//   },
//   {
//     url:"plurivers-images-010.jpg",
//     caption: "Slogan de l’École zapatiste : « L’éducation autonome construit des mondes différents faits de multiples mondes véritables pleins de vérités » (Mexique)."
//   }

// ]
// const randomimage = touteslesimages[Math.floor(Math.random() * touteslesimages.length)];
// image.src = "images/" + randomimage.url
// figure.classList.add('monimage');
// figure.appendChild(image)
// figure.appendChild(caption)
// caption.innerHTML = randomimage.caption;
// montitre.insertAdjacentElement("afterend", figure);




// const montitre = document.querySelector('.article h1');
// console.log( montitre);


// const image = document.createElement("img");
// console.log( image);

// const figure = document.createElement("figure");
// console.log( figure);


// const touteslesimages = [
//   "plurivers-images-001.jpg" ,
//   "plurivers-images-002.jpg" ,
//   "plurivers-images-003.jpg" ,
//   "plurivers-images-004.jpg" ,
//   "plurivers-images-005.jpg" ,
//   "plurivers-images-006.jpg" ,
//   "plurivers-images-006-a.jpg" ,
//   "plurivers-images-006-b.jpg" ,
//   "plurivers-images-007.jpg" ,
//   "plurivers-images-008.jpg" ,
//   "plurivers-images-009.jpg" ,
//   "plurivers-images-010.jpg",
// ]


// const s = "images/" + touteslesimages[Math.floor(Math.random() * touteslesimages.length)]
// console.log(s);

// image.src = s
// figure.classList.add('monimage')
// figure.appendChild(image)
// montitre.insertAdjacentElement("afterend", figure);


// console.log(image);
