let gralhas = []; // Armazena todas as gralhas azuis criadas
let arvores = []
let cidadeX

function setup() {
  createCanvas(800, 400);
    cidadeX = width / 2
}

function draw() {
   background(105, 130, 235)//céu;
// Gralhas Azuis voando
for (let i = gralhas.length - 1; i >= 0; i--) {
  gralhas[i].mover();
  gralhas[i].mostrar();

  // Remove se sair da tela
  if (gralhas[i].x > width + 50) {
    gralhas.splice(i, 1);
  }
}
 

//Campo 
noStroke()
fill(144, 238, 144)
rect(0, height / 2, width, height / 2)

  //sol
  fill(255, 223, 0)
  ellipse(80, 80, 80)

  //cidade(prédios)
  for(let i = 0; i < 5; i ++) {
    fill(100)
  rect(cidadeX + i * 40, height / 2 - 100, 30, 100)
  }

  //campo(árvores)
  for (let arvore of arvores){
    arvore.mostrar();
  }
}
function mousePressed() {
  if (mouseY > height / 2 && mouseX < cidadeX) {
  arvores.push(new Arvore(mouseX, mouseY));
  gralhas.push(new GralhaAzul(0, random(50, 150))); // Cria uma gralha voando
}
  if(mouseY > height / 2 && mouseX < cidadeX){
  arvores.push(new Arvore(mouseX, mouseY))  
  }
}
class Arvore{
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.altura = 0;
  }
  mostrar(){
this.altura = min(this.altura + 1, 50)
  fill(139, 69, 19)
  rect(this.x - 2, this.y - this.altura, 5, this.altura);
  fill(34, 139, 34);
  ellipse(this.x, this.y - this.altura, 20);
  }
}
class GralhaAzul {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.vel = random(2, 4);
  }

  mover() {
    this.x += this.vel;
  }

  mostrar() {
    // Corpo
    fill(0, 102, 204); // Azul forte
    ellipse(this.x, this.y, 20, 10); // corpo
    ellipse(this.x + 10, this.y - 5, 15, 8); // cabeça

    // Asa
    fill(0, 76, 153);
    triangle(this.x - 10, this.y, this.x, this.y - 10, this.x + 5, this.y);

    // Bico
    fill(255, 153, 51);
    triangle(this.x + 17, this.y - 5, this.x + 22, this.y - 3, this.x + 17, this.y - 1);

    // Olho
    fill(255);
    ellipse(this.x + 12, this.y - 6, 3);
  }
}
