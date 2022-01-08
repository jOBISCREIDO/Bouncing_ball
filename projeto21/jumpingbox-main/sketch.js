var tela;
var bloco1,bloco2,bloco3,bloco4;
var bola, arestas;
var music;

function preload(){
    music = loadSound("music.mp3");
}

function setup(){
    tela = createCanvas(800,600);

    bloco1 = createSprite(0,580,360,30);
    bloco1.shapeColor = "blue";

    bloco2 = createSprite(295,580,200,30);
    bloco2.shapeColor = "orange";

    bloco3 = createSprite(505, 580, 200, 30);
    bloco3.shapeColor = 'red';

    bloco4 = createSprite(715, 580, 200, 30);
    bloco4.shapeColor = 'green';
    
    
    //crie aqui mais dois blocos, ou seja, bloco3 e bloco4

    bola = createSprite(random(20,750),100, 40,40);
    bola.shapeColor = rgb(255,255,255);
    bola.velocityY = 10;
    bola.velocityX = 10;

}

function draw() {
    background(rgb(169,169,169));
    arestas=createEdgeSprites();
    bola.bounceOff(arestas);

    

    
    if(bloco1.isTouching(bola)){
        bola.shapeColor = "blue";
        
        music.play();
    }


    if(bloco2.isTouching(bola)){
        bola.shapeColor = "orange";
        
        music.play();
    }

    if(bloco3.isTouching(bola)){
        bola.shapeColor = "red";
        

        music.play();
    }

    if(bloco4.isTouching(bola)){
        bola.shapeColor = "green";
        

        music.play();
    }

    bola.bounceOff(bloco1);
    bola.bounceOff(bloco2);
    bola.bounceOff(bloco3);
    bola.bounceOff(bloco4);

    drawSprites();
}