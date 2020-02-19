function setup() {

    // this line creates a virtual canvas and attaches it to your HTML
    createCanvas(640, 480).parent('p5')
    noLoop()

}

// put in draw everything you want to draw to the canvas
function draw() {

  background(0)
  strokeWeight(1)

  beginShape()

  curveVertex(217,84)
  curveVertex(215,118)
  curveVertex(215,133)
  curveVertex(211,159)
  curveVertex(208,183)
  curveVertex(207,206)
  curveVertex(206,226)
  curveVertex(205,249)
  curveVertex(204,279)
  curveVertex(202,295)
  curveVertex(233,294)
  curveVertex(261,293)
  curveVertex(293,295)
  curveVertex(295,291)
  curveVertex(296,290)
  curveVertex(302,231)
  curveVertex(304,194)
  curveVertex(309,157)
  curveVertex(310,127)
  curveVertex(312,70)

strokeWeight(0)
fill(243, 240, 245)
  endShape(CLOSE)

  //left side of painting
  beginShape()
  fill(200, 164, 224)

  vertex(0,58)
  vertex(42,67)
  vertex(92,75)
  vertex(143,81)
  vertex(181,81)
  vertex(207,83)
  vertex(220,83)
  vertex(220,112)
  vertex(216,134)
  vertex(216,158)
  vertex(214,184)
  vertex(213,214)
  vertex(212,250)
  vertex(212,279)
  vertex(213,193)
  vertex(207,291)
  vertex(128,292)
  vertex(88,290)
  vertex(65,280)
  vertex(43,275)
  vertex(17,273)
  vertex(0,278)

  endShape(CLOSE)

  //right side of painting

  beginShape()
    vertex(313,69)
    vertex(326,61)
    vertex(354,50)
    vertex(398,48)
    vertex(463,43)
    vertex(525,37)
    vertex(582,29)
    vertex(627,19)
    vertex(640,21)
    vertex(640,248)
    vertex(563,252)
    vertex(501,255)
    vertex(445,258)
    vertex(408,264)
    vertex(363,275)
    vertex(332,275)
    vertex(311,278)
    vertex(298,278)
    vertex(300,208)
    vertex(304,161)
    vertex(301,115)
    vertex(307,77)
    vertex(311,69)

    endShape(CLOSE)

    //green on right side

    beginShape()
fill(70, 128, 86)
    vertex(294,300)
    vertex(298,276)
    vertex(318,276)
    vertex(331,272)
    vertex(356,272)
    vertex(379,266)
    vertex(420,258)
    vertex(444,254)
    vertex(483,253)
    vertex(530,249)
    vertex(584,247)
    vertex(616,245)
    vertex(640,247)
    vertex(640,300)
    vertex(601,300)
    vertex(536,300)
    vertex(429,300)
    vertex(348,300)
    vertex(295,300)

    endShape(CLOSE)

    //left green

    beginShape()
    vertex(244,358)
    vertex(218,336)
    vertex(176,307)
    vertex(145,295)
    vertex(110,288)
    vertex(77,279)
    vertex(41,273)
    vertex(8,270)
    vertex(0,270)
    vertex(1,480)
    vertex(177,480)
    vertex(244,384)

    endShape(CLOSE)

    // right green under bridge

    beginShape()
    stroke(61, 117, 77, 128)
    vertex(427,278)
    vertex(369,323)
    vertex(359,335)
    vertex(370,354)
    vertex(387,368)
    vertex(400,392)
    vertex(406,420)
    vertex(406,446)
    vertex(408,480)
    vertex(640,480)
    vertex(640,293)

    endShape(CLOSE)



    //bridge
    fill(237, 217, 255)
    beginShape()
    vertex(101,283)
    vertex(203,279)
    vertex(304,280)
    vertex(383,279)
    vertex(429,278)
    vertex(369,326)
    vertex(333,307)
    vertex(314,301)
    vertex(292,298)
    vertex(262,298)
    vertex(234,308)
    vertex(207,328)
    vertex(101,282)

    endShape(CLOSE)

    //blue uner right side of bright

    beginShape()
    fill(85, 108, 166)
    vertex(302,322)
    vertex(272,343)
    vertex(254,365)
    vertex(245,380)
    vertex(271,374)
    vertex(292,364)
    vertex(316,344)
    vertex(329,330)
    vertex(344,321)
    vertex(351,316)

    endShape(CLOSE)

















}





  function mouseClicked() {
      print(int(mouseX), int(mouseY))
  }
