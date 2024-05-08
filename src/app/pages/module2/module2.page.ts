import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-module2',
  templateUrl: './module2.page.html',
  styleUrls: ['./module2.page.scss'],
})
export class Module2Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  
  currentIndex: number = 0;


  topics = [
    { name: 'What can you expect from the volunteering experience with Travel Hands?', completed: false },
    { name: 'What are the boundaries of the volunteering activities?', completed: false },
    { name: 'General Tips', completed: false },
    { name: 'Do not', completed: false },
    { name: 'Do not be overprotective.', completed: false },
    { name: 'Describe the passing scene.', completed: false },
    { name: 'Give directions verbally.', completed: false },
    { name: 'Relax.', completed: false },

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
