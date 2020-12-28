import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';
  

  color = 'green';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';
  takeOffEnabled: boolean = true;

handleTakeOff(){
  let result = window.confirm("Confirm that the shuttle is ready for takeoff.");
  if(result) {
  this.takeOffEnabled = false;
  this.message = "Shuttle in flight.";
  this.color = "blue";
  this.height = 10000;
  }
}
handleLand(){
    window.alert("The shuttle is landing. Landing gear engaged.")
    this.takeOffEnabled = true;
    this.message = "The shuttle has landed.";
    this.color = "green";
    this.height = 0;
};
handleAbort(){
  let result = window.confirm("You really want to abort the mission?");
  if(result){
    this.message = "Mission aborted.";
    this.color = "red";
    this.height = 0;
  }
}
moveImage(rocketImage, direction){
  if(direction === 'right'){
    let movement = parseInt(rocketImage.style.left) + 10 + 'px';
    rocketImage.style.left = movement;
    this.width= this.width + 10000;
  } else if (direction === 'left'){
    let movement = parseInt(rocketImage.style.left) - 10 + 'px';
    rocketImage.style.left = movement;
    this.width= this.width - 10000;
  } else if (direction === 'down'){
    let movement = parseInt (rocketImage.style.bottom) - 10 + 'px';
    rocketImage.style.bottom = movement;
    this.height -= 10000;
  } else {
    let movement = parseInt (rocketImage.style.bottom) + 10 + 'px';
    rocketImage.style.bottom = movement;
    this.height += 10000;
  }
  this.edgeCheck(this.width, this.height);
};
 edgeCheck(width,height){
   if(width > 260000 || width < 0 || height < 0 || height > 340000){
    this.color = 'orange';
  } else {
    this.color = 'blue';
    };
   };
 };   
    

