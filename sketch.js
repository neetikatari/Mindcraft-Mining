const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine,world
var bedrock;
var ground1=[],ground2=[],ground3=[]
var rock1=[],rock2=[],rock3=[], rock4=[],rock5=[],rock6=[]
var grass =[]


function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

//bedrock
    bedrock= new Ground(600,height-25,1200,50)
//grass layer
    for(var k =50; k<=width ; k =k +51){
        grass.push(new Box(k,50,50,50,"green"))
    }
// 3 ground layers    
    for(var k =50; k<=width ; k =k +51){
        ground1.push(new Box(k,50,50,50,"brown"))
    }
    for(var k =50; k<=width ; k =k +51){
        ground2.push(new Box(k,50,50,50,"brown"))
    }

    for(var k =50; k<=width ; k =k +51){
        ground3.push(new Box(k,50,50,50,"brown"))
    }

    //stone layers 
    for(var k =50; k<=width ; k =k +51){
        rock6.push(new Box(k,50,50,50,"grey"))
    }
    for(var k =50; k<=width ; k =k +51){
        rock5.push(new Box(k,50,50,50,"grey"))
    }
    for(var k =50; k<=width ; k =k +51){
        rock4.push(new Box(k,50,50,50,"grey"))
    }
    //iron
    for(var k =50; k<=width ; k =k +51){
        rock3.push(new Box(k,50,50,50,"orange"))
    }
    //diamond
    for(var k =50; k<=width ; k =k +51){
        rock2.push(new Box(k,50,50,50,"blue"))
    }
    for(var k =50; k<=width ; k =k +51){
        rock1.push(new Box(k,50,50,50,"grey"))
    }

}

function draw(){
    background("lightblue");
    Engine.update(engine);
    
    bedrock.display();
    for(var j = 0; j<grass.length; j++){
        grass[j].display()
    }
    for(var j = 0; j<ground1.length; j++){
        ground1[j].display()
    }
    for(var j = 0; j<ground2.length; j++){
        ground2[j].display()
    }
    for(var j = 0; j<ground3.length; j++){
        ground3[j].display()
    }
    for(var j = 0; j<rock6.length; j++){
        rock6[j].display()
    }
    for(var j = 0; j<rock5.length; j++){
        rock5[j].display()
    }
    for(var j = 0; j<rock4.length; j++){
        rock4[j].display()
    }
    for(var j = 0; j<rock3.length; j++){
        rock3[j].display()
    }
    for(var j = 0; j<rock2.length; j++){
        rock2[j].display()
    }
    for(var j = 0; j<rock1.length; j++){
        rock1[j].display()
    }

}
