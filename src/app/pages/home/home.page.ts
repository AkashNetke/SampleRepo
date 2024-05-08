import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  constructor() {}

  chaptersVisible: boolean[] = [false, false, false];
  chapters: string[][] = [
    ['Chapter 1: Introduction', 'Chapter 2: Getting Started', 'Chapter 3: Advanced Techniques'],
    ['Chapter 1: Basics', 'Chapter 2: Intermediate', 'Chapter 3: Advanced'],
    ['Chapter 1: Overview', 'Chapter 2: Implementation', 'Chapter 3: Conclusion']
  ];

  toggleChapters(moduleIndex: number) {
    this.chaptersVisible[moduleIndex] = !this.chaptersVisible[moduleIndex];
  }

 

}
