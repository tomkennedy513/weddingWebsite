import {Component, Input, OnInit} from '@angular/core';
import {Member} from "./member";

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {
  @Input() name: string;
  @Input() photoUrl: string;
  @Input() aboutParagraph: string;

  constructor() {}

  ngOnInit() {
  }

}
