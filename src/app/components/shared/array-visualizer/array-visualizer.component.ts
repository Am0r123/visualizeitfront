import { Component, Input, OnDestroy } from '@angular/core';
import { CodeCheckerService } from 'src/app/services/codechecker/codechecker.service';

@Component({
  selector: 'app-array-visualizer',
  templateUrl: './array-visualizer.component.html',
  styleUrls: ['./array-visualizer.component.scss']
})
export class ArrayVisualizerComponent implements OnDestroy {

  @Input() steps: any[] = [];
  @Input() percentCorrect: number | null = null;
  @Input() errorLines: number[] = [];

  @Input() array: number[] = [];
  @Input() code: string = '';
  @Input() isSorting: boolean = true;
  @Input() target: number | null = null;

  currentStepIndex = 0;
  interval: any;
  isPlaying = false;
  isPaused = false;
  playSpeed = 500;
  speedMultiplier = 1;

  currentState: any = {
    array: [],
    line: null,
    currentIndex: null,
    compareIndex: null,
    foundIndex: null
  };

  ngOnDestroy() {
    clearInterval(this.interval);
  }
  play() {
    if (!this.steps.length) {
      console.warn('No steps to play');
      return;
    }
    this.isPlaying = true;
    this.isPaused = false;
    this.currentStepIndex = 0;
    this.startAnimation();
  }

  startAnimation() {
    clearInterval(this.interval);
    this.interval = setInterval(() => {
      if (!this.isPaused && this.currentStepIndex < this.steps.length) {
        this.currentState = this.steps[this.currentStepIndex];
        this.currentStepIndex++;
      } else if (this.currentStepIndex >= this.steps.length) {
        clearInterval(this.interval);
        this.isPlaying = false;
      }
    }, this.playSpeed);
  }

  pause() { this.isPaused = true; }
  resume() { this.isPaused = false; }

  changeSpeed(speed: number) {
    this.speedMultiplier = +speed;
    this.playSpeed = 1000 / this.speedMultiplier;
    if (this.isPlaying && !this.isPaused) this.startAnimation();
  }

  nextStep() {
    this.pause();
    if (this.currentStepIndex < this.steps.length - 1) {
      this.currentStepIndex++;
      this.currentState = this.steps[this.currentStepIndex];
    }
  }

  previousStep() {
    this.pause();
    if (this.currentStepIndex > 0) {
      this.currentStepIndex--;
      this.currentState = this.steps[this.currentStepIndex];
    }
  }
}
