let player_attack
let enemy_attack
let lives_player= 3
let lives_enemy= 3

function startGame() {
    let NoShowReboot = document.getElementById('reboot')
    NoShowReboot.style.display = 'none'

    let section_attack_selection = document.getElementById('attack_selection')
    section_attack_selection.style.display ='none'
    
    let button_PetsPlayer = document.getElementById('button_pets')
    button_PetsPlayer.addEventListener('click', selectPetPlayer)

    let button_fire = document.getElementById('button_fire')
    button_fire.addEventListener('click', attack_fire)
    let button_Water = document.getElementById('button_water')
    button_Water.addEventListener('click', attack_water)
    let button_earth = document.getElementById('button_earth')
    button_earth.addEventListener('click', attack_earth)

    let button_reboot = document.getElementById('button_reboot')
    button_reboot.addEventListener('click', reboot_game)
}

function selectPetPlayer() {
    let sectPetPlayer_selection = document.getElementById('Pets_selection')
    sectPetPlayer_selection.style.display ='none'

    let section_attack_selection = document.getElementById('attack_selection')
    section_attack_selection.style.display ='block'

    let inputEmberWips = document.getElementById('EmberWips')
    let inputHydroquirik = document.getElementById('Hydroquirik')
    let inputGeoWhinz = document.getElementById('GeoWhinz')
    let spanPetsplayer = document.getElementById('Petsplayer')

        if(EmberWips.checked){
           spanPetsplayer.innerHTML = 'EmberWips'
        } else if(Hydroquirik.checked){
            spanPetsplayer.innerHTML = 'Hydroquirik'
        } else if(GeoWhinz.checked){
            spanPetsplayer.innerHTML = 'GeoWhinz'
        } else {
            alert("hey facedick you don't choose nothing! 🫥")
        }
        select_randomPetEnemy()        
}

function select_randomPetEnemy() {
    let PetAttackRandom = Random(1,3)
    let spanPetsenemy = document.getElementById('Petsenemy')

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
    let spanPlayerLives = document.getElementById('player-lives')

    let spanEnemyLives = document.getElementById('enemy-lives')

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

function Create_message (result) {
  let section_message = document.getElementById('messages')
  
  let paragraph = document.createElement('p')
  paragraph.innerHTML = 'Your pet attack with '+ player_attack +'   '+ ' the enemy pet attack with '+ enemy_attack +' you '+ result

  section_message.appendChild(paragraph)
}

function Create_message_end (final_result) {
    
    let ShowReboot = document.getElementById('reboot')
    ShowReboot.style.display = 'block'

    let section_message = document.getElementById('messages')
    
    let paragraph = document.createElement('p')
    paragraph.innerHTML = final_result
    section_message.appendChild(paragraph)

    let button_fire = document.getElementById('button_fire')
    button_fire.disabled = true

    let button_Water = document.getElementById('button_water')
    button_Water.disabled = true

    let button_earth = document.getElementById('button_earth')
    button_earth.disabled =true
  }

  function reboot_game (){
    location.reload()
  }
 
function Random(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min)
}

window.addEventListener('load', startGame)  