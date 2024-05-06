// varibles de la funcion starGame //
const section_attack_selection = document.getElementById('attack_selection')
const sectionReboot = document.getElementById('reboot')
const button_PetsPlayer = document.getElementById('button_pets')
const button_earth = document.getElementById('button_earth')
sectionReboot.style.display = 'none'
const button_fire = document.getElementById('button_fire')
const button_water = document.getElementById('button_water')
const button_reboot = document.getElementById('button_reboot')
// varibles de la funcion selectPetPlayer//
const sectionPets_selection = document.getElementById('Pets_selection')
const spanPetsplayer = document.getElementById('Petsplayer')
// espacio de enemigo//
const spanPetsenemy = document.getElementById('Petsenemy')
// varibles de la funcion combat//
const spanPlayerLives = document.getElementById('player-lives')
const spanEnemyLives = document.getElementById('enemy-lives')
// varibles de la funcion crear un mensaje//
const section_message = document.getElementById('resultado')
const ataquesDelJugador = document.getElementById('ataques_del_jugador')
const ataquesDelEnemigo= document.getElementById('ataques_del_enemigo')
const contenedorCards = document.getElementById('contenedorCards')
// las variables const como dice su enunciado son aquellas que se mantienen constantes sin que se altere su estado //
let Monsters = []
let player_attack
let enemy_attack
let opcion_Monsters
let inputEmberWips 
let inputHydroquirik 
let inputGeoWhinz 
let lives_player = 3  // estas son variables let esto quiere decir es estan cambian o varian segun  las condicion.//
let lives_enemy= 3
// creacion de claeses y objetos 
class Monster {
    constructor (name, picture, life) {
        this.name = name
        this.picture = picture
        this.life = life
        this.attacks = []
    }
}
// el codigo de arriba es la clase
let EmberWips = new Monster ('EmberWips','./pictures/characters/vulpera-wow.gif',5)

let Hydroquirik = new Monster ('Hydroquirik','./pictures/characters/druid-cat-dance-druid.gif',5)

let GeoWhinz = new Monster ('GeoWhinz', ' ./pictures/characters/world-of-warcraft-monster-warcraft-monster.gif', 5)
// los de arriba son los objetos//

EmberWips.attacks.push(
    { name: '💧', id: 'button_water' },
    { name: '💧', id: 'button_water' },
    { name: '💧', id: 'button_water' },
    { name: '🔥', id: 'button_fire' },
    { name: '🌱', id: 'button_earth'},
)

Hydroquirik.attacks.push(
    {name:'🔥', id: 'button_fire'},
    {name:'🔥', id: 'button_fire'},
    {name:'🔥', id: 'button_fire'},
    { name: '🌱', id: 'button_earth'},
    { name: '🌱', id: 'button_earth'},
)

GeoWhinz.attacks.push(
    { name: '🌱', id: 'button_earth'},
    { name: '🌱', id: 'button_earth'},
    { name: '🌱', id: 'button_earth'},
    { name: '💧', id: 'button_water' },
    { name: '🔥', id: 'button_fire' }, 
)

Monsters.push(EmberWips,Hydroquirik,GeoWhinz)


function startGame() {
    
    section_attack_selection.style.display ='none'

     Monsters.forEach((Monster) => {
        opcion_Monsters = `   
            <input type="radio" name="pets" id=${ Monster.name }/> 
            <label class="card_taoe" for=${ Monster.name }>
                <p>${ Monster.name }</p>
                <img src=${ Monster.picture } alt=${ Monster.name }>
            </label>
        `
    contenedorCards.innerHTML+= opcion_Monsters

    inputEmberWips = document.getElementById('EmberWips')
    inputHydroquirik = document.getElementById('Hydroquirik')
    inputGeoWhinz = document.getElementById('GeoWhinz')

     })

    button_PetsPlayer.addEventListener('click', selectPetPlayer)

    button_fire.addEventListener('click', attack_fire)

    button_Water.addEventListener('click', attack_water)

    button_earth.addEventListener('click', attack_earth)

    button_reboot.addEventListener('click', reboot_game)
}

function selectPetPlayer() {
   
    selectPetPlayer_selection.style.display ='none'

    section_attack_selection.style.display ='flex'

    

         if(EmberWips.checked){
           spanPetsplayer.innerHTML = 'EmberWips'
        } else if(Hydroquirik.checked){
            spanPetsplayer.innerHTML = 'Hydroquirik'
        } else if(GeoWhinz.checked){
            spanPetsplayer.innerHTML = 'GeoWhinz'
        } else {
            alert("hey  you don't select ")
        }
        select_randomPetEnemy()        
}


function select_randomPetEnemy() {
    
    let PetAttackRandom = Random(1,3)

        if(PetAttackRandom == 1 ){
            spanPetsenemy.innerHTML = 'EmberWips'
        } else if (PetAttackRandom == 2 ){
            spanPetsenemy.innerHTML = 'Hydroquirik'
        } else{
            spanPetsenemy.innerHTML = 'GeoWhinz'
        }
  
}

function attack_fire() {
    player_attack = 'Fire'
    enemy_attack_random()
}

function attack_water() {
    player_attack= 'Water'
    enemy_attack_random()
}

function attack_earth() {
    player_attack = 'Earth'
    enemy_attack_random()
} 

function  enemy_attack_random() {
    let random_attack = Random(1,3)

    if (random_attack == 1){
        enemy_attack='Fire'
    } else if (random_attack == 2){
        enemy_attack='Water'
    } else{
        enemy_attack='Earth'
    }

    combat()
}

function combat() {
  

    if (player_attack === enemy_attack) {
        Create_message('Tie');
    } else if (player_attack === 'Fire' && enemy_attack === 'Earth') {
        Create_message('Win');
        lives_enemy--
        spanEnemyLives.innerHTML = lives_enemy
    } else if (player_attack === 'Water' && enemy_attack === 'Fire') {
        Create_message('Win');
        lives_enemy--
        spanEnemyLives.innerHTML = lives_enemy
    } else if (player_attack === 'Earth' && enemy_attack === 'Water') {
        Create_message('Win');
        lives_enemy--
        spanEnemyLives.innerHTML = lives_enemy
    } else {
        Create_message('Loose');
        lives_player--
        spanPlayerLives.innerHTML = lives_player
    } 
       review_lives ()
}

function review_lives(){
  if (lives_enemy == 0){
    Create_message_end(" Congratuletion!!!  You Win 😊")
  } else if (lives_player == 0){
    Create_message_end("Sorry ,You Loose 😭")
  }
   
}
// seccion de la creacion del mensaje
function Create_message (result) {
 
  let nuevoAtaqueDelJugador = document.createElement('p')
  let nuevoAtaqueDelEnemigo = document.createElement('p')

  section_message.innerHTML = result
  nuevoAtaqueDelJugador.innerHTML =  player_attack
  nuevoAtaqueDelEnemigo.innerHTML = enemy_attack

  ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
  ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function Create_message_end (final_result) {
    

    section_message.innerHTML = final_result
    
    button_fire.disabled = true

    button_Water.disabled = true

    button_earth.disabled =true

    sectionReboot.style.display = 'block'
  }

  function reboot_game (){
    location.reload()
  }
 
function Random(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min)
}

window.addEventListener('load', startGame)  

