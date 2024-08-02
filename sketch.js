let palavra;

function setup() {
  createCanvas(400, 400);
let palavras= ["Alce", "Alpaca", "Boi", "Boto" , "Capivara", "Cisne", "Dromedário", "Doninha", "Enguia", "Esquilo", "Flamingo", "Furão", "Ganso", "Gazela"];
  palavra = random (palavras);
}

function inicializaCores() {  
  background("white");
  fill ("black");
  textSize (50);;
  textAlign(CENTER, CENTER);}
function draw() {
  inicializaCores();
  let maximo = width;
  let minimo = 0;
 
  

  //mouseX, 0, width ==> 0, 4; 
  let quantidade = map(mouseX, 0, width, 0, palavra.length);
  console.log(quantidade);
  let parcial = palavra.substring(0, quantidade);
  text(parcial, 200, 200);
 
  
}