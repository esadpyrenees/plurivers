


function makeSequence(){
  
  const declaration = document.querySelector('.declaration');
  const parts = declaration.querySelectorAll('[data-fig]');
  const skip = document.querySelector(".skip");
  const scrolltocontent = document.querySelector("#scrolltocontent")

  let start = -1800;
  const rythm_in = 1600;
  const header_rythm_in = 500
  const rythm_out = 5000;
  const rythm_parent = 500;
  
  // pour chaque partie de l’intro
  parts.forEach((p, idx)=>{
    // figure associée à la partie
    const fig = document.querySelector('#' + p.dataset.fig);
    // on calcule les temps d’apparition et de disparition
    const children = p.childElementCount - 1
    const fadein = start + rythm_in 
    const fadeout = fadein + (children * rythm_in) + rythm_out
    // apparition de la figure (rythm_in après le premier texte)
    fig.dataset.in = fadein + rythm_in 
    
    // si ce n’est pas la dernière étape de l’intro…
    if(idx != parts.length - 1){
      fig.dataset.out = fadeout + rythm_in
    }

    // pour chaque texte de la partie
    const texts = p.querySelectorAll('.introtext');
    texts.forEach((t, index) => {      
      if(p.tagName == "HEADER"){
        // rythme + élevé pour les textes du header
        t.dataset.in = fadein + index * header_rythm_in
      } else {
        t.dataset.in = fadein + index * rythm_in
      }
      // si ce n’est pas la dernière étape de l’intro
      if(idx != parts.length - 1){
        t.dataset.out = fadeout
      }
    })

    // augmentation du start pour la partie suivante
    start = fadeout + rythm_parent;

    // skip
    if(idx == parts.length - 1){
      setTimeout(() => {
        skip.classList.add("hidden")
      }, fadeout);
    }
  })

  // pris sur https://radicalweb.design/exemples/sequence/

  // choses à afficher (contiennent un attribut `data-in`)
  const things_to_show = declaration.querySelectorAll("[data-in]");
  things_to_show.forEach(thing => {
    thing.classList.remove('visible'); // réinitialise les choses précédemment affichées
    // après le temps défini par la valeur de `data-in`
    setTimeout(() => {
      thing.classList.add("visible");
    }, thing.dataset.in);
  });
  // choses à cacher (contiennent un attribut `data-out`)
  const things_to_hide = declaration.querySelectorAll("[data-out]");
  things_to_hide.forEach(thing => {
    thing.classList.remove('hidden'); // réinitialise les choses précédemment cachées
    // après le temps défini par la valeur de `data-out`
    setTimeout(() => {
      thing.classList.add("hidden");
    }, thing.dataset.out);
  });


  // skip intro
  skip.onclick = (e) => {
    e.preventDefault();
    document.body.classList.remove('intro');
    document.body.classList.add('skipped');
    skip.classList.add("hidden");
    // document.querySelector('main').scrollIntoView({"behavior":"smooth"})
  }

  // scrolltocontent
  scrolltocontent.onclick = (e) => {
    document.querySelector('main').scrollIntoView({"behavior":"smooth"})
  }
  
}

makeSequence();
