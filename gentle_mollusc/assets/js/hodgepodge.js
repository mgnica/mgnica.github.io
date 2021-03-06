words = [
"I aspire to the joy of the very first \"Hello World!\". I think I feel a glimmer of it every time I ping a server?",
"Can the writer also be the muse?",
"[Absence, Absinthe, Abstinence] makes the heart grow fonder.",
"Next Level Charli - Charli XCX *drool*",
"Apparently 'This Song is Not For Anyone But You' became 'Twilight' in English....<a href='https://www.youtube.com/watch?v=gd38-X3HpbM' target='_blank'>https://www.youtube.com/watch?v=gd38-X3HpbM</a>",
"\"meeting the right person at the wrong time\"",
"A Would You Rather for the Thanksgiving table: Would you rather eat a <a href=\"https://en.wikipedia.org/wiki/Whole_stuffed_camel\">whole stuffed camel</a> or a <a href=\"https://www.epicurious.com/recipes/food/views/vegducken\">vegducken</a>?",
"Hottest Trend of Summer 2021: Post a white picture on your social media, link people to The Social Dilemma, and log out of your account forever."
];

//img link, html to inject
me = [
["/gentle_mollusc/assets/images/about/baby.jpg", "<p><b>Likes:</b> Lion King, ants, apple juice, game where fit shapes into holes</p><p><b>Dislikes:</b> Toothbrush</p>"],
["/gentle_mollusc/assets/images/about/17.jpg", "<a href='https://earthzine.org/fire-and-ice-wars-battles-in-the-sierra-nevada-mountains/' target='_blank'>Environmental science</a> and loads of <a href='https://www.github.com/fantastic-books-in-clips' target='_blank'>books.</a>"],
["/gentle_mollusc/assets/images/about/college_1.jpg", "Liar's Club and realizing environmental science and I aren't gonna work out."],
["/gentle_mollusc/assets/images/about/college_2.jpg", "Me and Proud at a design club retreat at Yosemite. She called my toes weird :("],
["/gentle_mollusc/assets/images/about/23.jpg", "Working in a foreign country and wandering into a showing of <a href='https://www.youtube.com/watch?v=WQ_Yo06kIIA' target='_blank'>Hausu</a>. I want to paint in Japan and make a kalimba."],
["/gentle_mollusc/assets/images/about/rooster.jpg", "It's a rooster."]
];

art_wall = [

];

if( $('#quote').length ) {       // if quote exists then on index page and can run these commands
  random_words = Math.floor(Math.random()*words.length);
  random_me    = Math.floor(Math.random()*me.length);

  frag0 = document.createRange().createContextualFragment(words[random_words]);
  document.getElementById("quote").appendChild(frag0);
  img = document.getElementById("me_img");
  img.src = me[random_me][0];
  frag = document.createRange().createContextualFragment(me[random_me][1]);
  document.getElementById("me_text").appendChild(frag);
}

if ( $('#art_wall_img').length ) { //on you page and can continue
  random_friend    = Math.floor(Math.random()*art_wall.length);

  img = document.getElementById("art_wall_img");
  if (art_wall.length > 0) { //if there's art submitted
    img.src = art_wall[random_friend][0];
    frag0 = document.createRange().createContextualFragment("<b>Name:</b>" + art_wall[random_friend][0]);
    document.getElementById("art_wall_name").appendChild(frag0);
    frag = document.createRange().createContextualFragment("<b>Location:</b>" + art_wall[random_friend][1]);
    document.getElementById("art_wall_location").appendChild(frag);
  }

}

$( function() {
  $(".dragme" ).draggable();
  $(".dragme").mouseover(function addBorder() {
    $(this).addClass("border-active");
  });
  $(".dragme").mouseout(function removeBorder() {
    $(this).removeClass("border-active");
  });

} );

console.log("hello world!");
