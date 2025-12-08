import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.scss'],
})
export class CompareComponent implements OnInit {
  @Input() leftArray: number[] = [];
  @Input() rightArray: number[] = [];
  @Input() leftCode: string = '';
  @Input() rightCode: string = '';

  constructor() {}

  ngOnInit(): void {}
}
