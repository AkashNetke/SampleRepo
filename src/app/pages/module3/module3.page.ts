import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-module3',
  templateUrl: './module3.page.html',
  styleUrls: ['./module3.page.scss'],
})
export class Module3Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  
  currentIndex: number = 0;


  topics = [
    { name: 'If they have a guide dog:', completed: false },
    { name: '	Navigate steps, staircases and slopes.', completed: false },
    { name: '	Important things to keep in mind before meeting a VIP', completed: false },
    { name: '	Standard position to walk with a VIP', completed: false },
    { name: '	How to adjust when encountering narrow spaces', completed: false },
    { name: '	Let the VIP know if you need to switch sides.', completed: false },
    { name: '	Navigating special circumstances.', completed: false },
    { name: '	Move through doors.', completed: false },
    { name: '	Use caution near kerbs and roads.', completed: false },
    { name: ' Help with seating', completed: false },
    { name: ' Guide a blind person into a car.', completed: false },
    { name: ' Buses, coaches and trains.', completed: false },
    { name: '	Escalators and travelators.', completed: false },
    { name: '	Lifts', completed: false },
    { name: '	Turnstiles and ticket barriers	', completed: false },
  ];

  updateProgress() {
    const totalTopics = this.topics.length;
    const completedTopics = this.topics.filter(topic => topic.completed).length;
    return (completedTopics / totalTopics) * 100;
  }

  completeTopic(topic: any) {
    topic.completed = true;
  }

  goToNextSection() {
    this.currentIndex++;
  }

}
