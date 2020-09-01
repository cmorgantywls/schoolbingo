let boxes = ["Teacher bitmoji classroom", "Strange aches and pains from sitting all day","Bathroom dispensers out of soap", "Meltdown (student or adult) over wearing mask all day","Someone answers a question with 'we are waiting on guidance'", "complaints about any physical activity bc mask", "'Reply All' to staff email before 8am","DOE provided PPE MIA and/or hoarded by other school", "Tents purchased by outside organization", "Back to school (buildings) date moves again", "Student shows up on the wrong day", "WiFi Outage", "<1/2 a student pod shows up for in person instruction", "Lunch catastrophe", "Student lightly coughs, panic ensues", "School shutdown for 24 hours", "School shutdown for 2 weeks", "Schools resume full remote", "Spike in cases", "Kids can’t figure out how to log into zoom with DOE email", "Kids forget an important password that halts remote learning", "Over excited teachers confuse students with 5+ online platforms", "Muted while talking on Zoom for >5 Minutes", "<3 teachers using Peardeck after lots of talking about Peardeck", "US History Regents adds 2-3 questions about 1918 flu outbreak for first time ever", "Bathroom emergency because it is not a kids time but they have to go", "Dehydration because of lack of bathrooms", "Kid decides to go 'full remote' without telling anyone including their parents", "Mouse crawls across floor in classroom, social distancing policies immediately abandoned", "School attempts to cover spike in cases", "No PPE supplies provided", "UFT trashes latest Carranza/BDB announcement", "Student laptop dies in a room without working outlets", "Angry parent refuses to wear mask", "Tragic private Zoom chat mistake", "Talking when you're not muted", "Something embarrassing happening when a camera is assumed off", "[name] are you there?... pause... silence...", "Over 50% of students select remote learning", "Debate over student Zoom Cameras", "No school nurse", "Staff shortage, cannot cover classrooms", "Teachers draw straws on caring for sick student in small space", "Home computing device breaks, no replacement available", "Student cannot write 10 page essay on iPad on screen keyboard", "Health scare other than COVID (ex: Legonnaires Disease)", "Outdoor learning debacle", "Parent riot over what in-person learning looks like"]

let used = []
let nums=[]
let seethrough=100
let seethrough2=100
let c

function setup() {
  window.resizeTo(700,775)
  c=createCanvas(windowWidth, windowHeight);

  while(used.length<25){
    let selection = floor(random(boxes.length))
    used.push(boxes[selection])
    boxes.splice(selection,1)
  }

}

function draw() {
  background(mouseY,mouseX,180);
  textAlign(CENTER)
  textSize(36)
  fill(0)
  text("NYC DOE School Reopening Bingo", width/2,50)

  //draw bingo board
  let counter = 0
  for(x=50; x<550; x+=100){
    for(y=100;y<600; y+=100){
      fill(255,100)
      strokeWeight(1)
      stroke(0)
      rect(x,y,100,100)
      strokeWeight(0)
      stroke(0)
      fill(0)
      textSize(11)
      textAlign(LEFT, TOP)
      if(counter == 12){
        textStyle(BOLD)
        text("DOE doesn’t figure out how to administer random testing before Oct 1", x+5,y+10,90,80)
        counter++
      }
      else if(counter != 12){
        textStyle(NORMAL)
        text(used[counter], x+5,y+10,90,80)
        counter++
      }
    }
  }

  //button for refresh
  fill(255,255,0,seethrough)
  rect(100,625,175,50)
  fill(0)
  textSize(14)
  text("REGENERATE BOARD",113,645)

  //button for save canvas
  fill(255,255,0,seethrough2)
  rect(325,625,175,50)
  fill(0)
  text("SAVE BOARD",365,645)

  if(collidePointRect(mouseX,mouseY,100,625,175,50)){
    seethrough=255
  }
  else{
    seethrough=100
  }

  if(collidePointRect(mouseX,mouseY,325,625,175,50)){
    seethrough2 = 255
  }
  else{
    seethrough2 = 100
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mousePressed(){
  if(collidePointRect(mouseX,mouseY,100,625,175,50)){
    location.reload()
  }


  if(collidePointRect(mouseX,mouseY,325,625,175,50)){
    saveCanvas(c,"schoolBingoBoard","jpg")
  }

}
