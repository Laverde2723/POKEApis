let canvas;
let SPRITE_PATH_URL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/'
let pokemon = null
let pokemon1 = null
let pokemon2 = null
let pokemon3 = null
let pokemon4 = null
let pokemon5 = null
let pokemon6 = null
let pokemon7 = null
let pokemon8 = null
let actualPokemon = null
let data = null

function setup() {
    frameRate(60);
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.style('z-index', '-1');
    canvas.style('position', 'fixed');
    canvas.style('top', '0');
    canvas.style('right', '0');
    fetchPokemonList();
}


function draw() {
    background(133, 191, 242);
    newCursor();
    textStyle(BOLD);
    fill(0,12,179)
    textSize(20)
    text("MI MINI POKEDEX :D", 350, 50)
    textSize(12)
    fill(255)
    textStyle(NORMAL);

    if(pokemon != null){
        image(pokemon.pImage,100,100,50,50)
        text(pokemon.name, 160, 120, 50, 50)
        //rect(100,100,50,50)

    }

    if(pokemon1 != null){
        image(pokemon1.pImage,100, 150, 50, 50)
        text(pokemon1.name,160, 170, 50, 50)
    }

    if(pokemon2 != null){
        image(pokemon2.pImage,100, 200, 50, 50)
        text(pokemon2.name,160, 220, 50, 50)
    }

    if(pokemon3 != null){
        image(pokemon3.pImage,100,250,50,50)
        text(pokemon3.name,160, 270,50,50)
    }

    if(pokemon4 != null){
        image(pokemon4.pImage,100,300,50,50)
        text(pokemon4.name,160, 320, 50, 50)
    }

    if(pokemon5 != null){
        image(pokemon5.pImage,100,350,50,50)
        text(pokemon5.name,160, 370, 50, 50)
          
    }

    if(pokemon6 != null){
        image(pokemon6.pImage,100, 400, 50, 50)
        text(pokemon6.name, 160, 420, 50, 50)
    }

    if(pokemon7 != null){
        image(pokemon7.pImage,100, 450, 50, 50)
        text(pokemon7.name,160, 470, 50, 50)
    }

    if(pokemon8 != null){
        image(pokemon8.pImage,100, 500, 50, 50)
        text(pokemon8.name,160, 520, 50, 50)
    }

    if(actualPokemon != null){
        textStyle(BOLD);
        textSize(18)
        fill(2,56,89)
        text(actualPokemon.name, 350, 100)
        textSize(12)
        fill(255)
        textStyle(NORMAL);
        text("Altura:" + " " +  actualPokemon.height, 350, 120)
        text("Peso:" + " " +  actualPokemon.weight, 350, 135)
        textStyle(BOLD);
        fill(151, 75, 251)
        text("HABILIDADES", 350, 155)
        fill(255)
        textStyle(NORMAL);
        text("Habilidad 1:" + " " +  actualPokemon.abilities[0].ability.name, 350, 172)
        text("Habilidad 2:" + " " +  actualPokemon.abilities[1].ability.name, 350, 189)
        textStyle(BOLD);
        fill(151, 75, 251)
        text("MOVIMIENTOS", 350, 210)
        fill(255)
        textStyle(NORMAL);
        text("Movimiento 1:" + " " +  actualPokemon.moves[0].move.name, 350, 225)
        text("Movimiento 2:" + " " + actualPokemon.moves[1].move.name, 350, 240)
        text("Movimiento 3:" + " " +  actualPokemon.moves[2].move.name, 350, 255)
        text("Movimiento 4:" + " " +  actualPokemon.moves[3].move.name, 350, 270)
        text("Movimiento 5:" + " " + actualPokemon.moves[4].move.name, 350, 285)
        textStyle(BOLD);
        fill(151, 75, 251)
        text("VERSIÓN DEL JUEGO EN EL QUE SALIO", 350, 310)
        fill(255)
        textStyle(NORMAL);
        text("Versión:" + " " + actualPokemon.game_indices[0].version.name, 350, 325)
        textStyle(BOLD);
        fill(151, 75, 251)
        text("EXPERIENCIA BASE", 350, 345)
        fill(255)
        textStyle(NORMAL);
        text("XP:" + " " + actualPokemon.base_experience, 350, 360)
        textStyle(BOLD);
        fill(151, 75, 251)
        text("ELEMENTO DEL POKEMÓN", 350, 380)
        fill(255)
        textStyle(NORMAL);
        text("TIPO 1:" + " " + actualPokemon.types[0].type.name, 350, 395)
        //text("TIPO 2:" + " " + actualPokemon.types[1].type.name, 350, 410)
        console.log(actualPokemon)
        
    }

    for (let x = 0; x < 9; x++) {
        //rect(100, 100+(50*x), 45, 45)
        
    }

   
}

    
function mouseClicked(){
    for (let x = 0; x < 9; x++) {
        if(pmouseX > 100 && pmouseX < 150 &&
            pmouseY > 100+(50*x) && pmouseY < 145+(50*x)) {
                findPokemons(x+1)
                
            } 
        
        }
}



function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function newCursor() {
    noStroke();
    fill(255);
    ellipse(pmouseX, pmouseY, 10, 10);
}

const fetchPokemonList = async () => {
    let URL = `https://pokeapi.co/api/v2/pokemon?limit=9&offset=0`
    try { 
        let query = await fetch(URL);
        let data = await query.json();
        const { results } = data;

        let bulbasaur = results[0];
        let temporaryArray = bulbasaur.url.split('/');
        bulbasaur.sprite = SPRITE_PATH_URL + temporaryArray[6] + '.png';
        loadImage(bulbasaur.sprite, image => {

            bulbasaur.pImage = image
            pokemon = bulbasaur

            console.log(pokemon)
        })
    }
    catch (error) {
        console.log(error);
    }

    let URL1 = `https://pokeapi.co/api/v2/pokemon?limit=9&offset=1`
    try { 
        let query = await fetch(URL);
        let data = await query.json();
        const { results } = data;

        let ivysaur = results[1];
        let temporaryArray = ivysaur.url.split('/');
        ivysaur.sprite = SPRITE_PATH_URL + temporaryArray[6] + '.png';
        loadImage(ivysaur.sprite, image => {

            ivysaur.pImage = image
            pokemon1 = ivysaur

            console.log(pokemon1)
        })
    }
    catch (error) {
        console.log(error);
    }

    let URL2 = `https://pokeapi.co/api/v2/pokemon?limit=9&offset=2`
    try { 
        let query = await fetch(URL);
        let data = await query.json();
        const { results } = data;

        let venusaur = results[2];
        let temporaryArray = venusaur.url.split('/');
        venusaur.sprite = SPRITE_PATH_URL + temporaryArray[6] + '.png';
        loadImage(venusaur.sprite, image => {

            venusaur.pImage = image
            pokemon2 = venusaur

            console.log(venusaur)
        })
    }
    catch (error) {
        console.log(error);
    }

    let URL3 = `https://pokeapi.co/api/v2/pokemon?limit=9&offset=3`
    try { 
        let query = await fetch(URL);
        let data = await query.json();
        const { results } = data;

        let charmander = results[3];
        let temporaryArray = charmander.url.split('/');
        charmander.sprite = SPRITE_PATH_URL + temporaryArray[6] + '.png';
        loadImage(charmander.sprite, image => {

            charmander.pImage = image
            pokemon3 = charmander

            console.log(charmander)
        })
    }
    catch (error) {
        console.log(error);
    }

    let URL4 = `https://pokeapi.co/api/v2/pokemon?limit=9&offset=4`
    try { 
        let query = await fetch(URL);
        let data = await query.json();
        const { results } = data;

        let charmeLeon = results[4];
        let temporaryArray = charmeLeon.url.split('/');
        charmeLeon.sprite = SPRITE_PATH_URL + temporaryArray[6] + '.png';
        loadImage(charmeLeon.sprite, image => {

            charmeLeon.pImage = image
            pokemon4 = charmeLeon

            console.log(charmeLeon)
        })
    }
    catch (error) {
        console.log(error);
    }

    let URL5 = `https://pokeapi.co/api/v2/pokemon?limit=9&offset=5`
    try { 
        let query = await fetch(URL);
        let data = await query.json();
        const { results } = data;

        let charizard = results[5];
        let temporaryArray = charizard.url.split('/');
        charizard.sprite = SPRITE_PATH_URL + temporaryArray[6] + '.png';
        loadImage(charizard.sprite, image => {

            charizard.pImage = image
            pokemon5 = charizard

            console.log(charizard)
        })
    }
    catch (error) {
        console.log(error);
    }

    let URL6 = `https://pokeapi.co/api/v2/pokemon?limit=9&offset=6`
    try { 
        let query = await fetch(URL);
        let data = await query.json();
        const { results } = data;

        let squirtle = results[6];
        let temporaryArray = squirtle.url.split('/');
        squirtle.sprite = SPRITE_PATH_URL + temporaryArray[6] + '.png';
        loadImage(squirtle.sprite, image => {

            squirtle.pImage = image
            pokemon6 = squirtle

            console.log(squirtle)
        })
    }
    catch (error) {
        console.log(error);
    }

    let URL7 = `https://pokeapi.co/api/v2/pokemon?limit=9&offset=7`
    try { 
        let query = await fetch(URL);
        let data = await query.json();
        const { results } = data;

        let wartortle = results[7];
        let temporaryArray = wartortle.url.split('/');
        wartortle.sprite = SPRITE_PATH_URL + temporaryArray[6] + '.png';
        loadImage(wartortle.sprite, image => {

            wartortle.pImage = image
            pokemon7 = wartortle

            console.log(wartortle)
        })
    }
    catch (error) {
        console.log(error);
    }

    let URL8 = `https://pokeapi.co/api/v2/pokemon?limit=9&offset=8`
    try { 
        let query = await fetch(URL);
        let data = await query.json();
        const { results } = data;

        let blastoise = results[8];
        let temporaryArray = blastoise.url.split('/');
        blastoise.sprite = SPRITE_PATH_URL + temporaryArray[6] + '.png';
        loadImage(blastoise.sprite, image => {

            blastoise.pImage = image
            pokemon8 = blastoise

            console.log(blastoise)
        })
    }
    catch (error) {
        console.log(error);
    }
}

async function findPokemons(id){
    let data = null;
    const pokeULR = `https://pokeapi.co/api/v2/pokemon/${id}/`
    const query = await fetch (pokeULR)
    data = await query.json()

    actualPokemon = data

} 
