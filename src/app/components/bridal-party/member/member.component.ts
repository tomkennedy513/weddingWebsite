import {Component, Input, OnInit} from '@angular/core';
import {Member} from "./member";
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';


@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {
  @Input() name: string;
  @Input() photoUrl: string;
  @Input() aboutParagraph: string;
  assetUrl: SafeStyle

  constructor(private sanitization: DomSanitizer) {}

  ngOnInit() {
    var url = `url(${this.photoUrl})`
    this.assetUrl = this.sanitization.bypassSecurityTrustStyle(url);
    
  }

}
