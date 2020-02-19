// put in setup whatever needs to be done to get things started
function setup() {

    // this line creates a virtual canvas and attaches it to your HTML
    createCanvas(640, 480).parent('p5')
    noLoop()

}

// put in draw everything you want to draw to the canvas
function draw() {

    // start off with a background
    background(121, 185, 219)
    strokeWeight(1)

fill(255, 140,0)
ellipse(200,200,200,200)

fill(0,233,170)
ellipse (460,400,400,400)

    // draw here!

line(0,240, 640,240)




strokeWeight(0)
stroke( 255,255,255)
fill(255,0,0)
ellipse(80, 62, 120, 120)

strokeWeight(3)
line(0, 0, 640, 480)

beginShape()
curveVertex(527,17)
curveVertex(525,23)
curveVertex(500, 26)
curveVertex(485,37)
curveVertex(482,55)
curveVertex(485,75)
curveVertex(501,85)
curveVertex(525,80)
curveVertex(540,79)
curveVertex(535,68)
curveVertex(522,68)
curveVertex(504,69)
curveVertex(494,63)
curveVertex(492,47)
curveVertex(497,34)
curveVertex(508,33)
curveVertex(525,29)
curveVertex(526,20)

endShape(CLOSE)

beginShape()
curveVertex(564,22)
curveVertex(565,32)
curveVertex(568,46)
curveVertex(571, 59)
curveVertex(572,75)
curveVertex(572,74)
curveVertex(579,73)
curveVertex(577,65)
curveVertex(575,55)
curveVertex(572,46)
curveVertex(572,40)
curveVertex(572,36)
endShape(CLOSE)

beginShape()
curveVertex(564,23)
curveVertex(577,22)
curveVertex(592,21)
curveVertex(593,31)
curveVertex(587,34)
curveVertex(576,34)
curveVertex(566,37)
endShape(CLOSE)
}




// this function will print coordinates to the console whenever you click
function mouseClicked() {
    print(int(mouseX), int(mouseY))
}
