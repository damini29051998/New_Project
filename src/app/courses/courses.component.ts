import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  list = [{
    image: "./assets/user.jpg",
    cName: "UI Science Progress Experiment.",
    description: " Apple's senior vice president at interner Software and Services",
    percentComplete: 80,
    enrollStudent: 180,
    watchLater: 16
  },
  {
    image: "./assets/user.jpg",
    cName: "UI Science Progress Experiment.",
    description: " Apple's senior vice president at interner Software and Services",
    percentComplete: 80,
    enrollStudent: 180,
    watchLater: 16
  },
  {
    image: "./assets/user.jpg",
    cName: "UI Science Progress Experiment.",
    description: " Apple's senior vice president at interner Software and Services",
    percentComplete: 80,
    enrollStudent: 180,
    watchLater: 16
  },
  {
    image: "./assets/user.jpg",
    cName: "UI Science Progress Experiment.",
    description: " Apple's senior vice president at interner Software and Services",
    percentComplete: 80,
    enrollStudent: 180,
    watchLater: 16
  },
  {
    image: "./assets/user.jpg",
    cName: "UI Science Progress Experiment.",
    description: " Apple's senior vice president at interner Software and Services",
    percentComplete: 80,
    enrollStudent: 180,
    watchLater: 16
  },
  {
    image: "./assets/user.jpg",
    cName: "UI Science Progress Experiment.",
    description: " Apple's senior vice president at interner Software and Services",
    percentComplete: 80,
    enrollStudent: 180,
    watchLater: 16
  },
  {
    image: "./assets/user.jpg",
    cName: "UI Science Progress Experiment.",
    description: " Apple's senior vice president at interner Software and Services",
    percentComplete: 80,
    enrollStudent: 180,
    watchLater: 16
  }]
  constructor() { }

  ngOnInit(): void {
  }

}
