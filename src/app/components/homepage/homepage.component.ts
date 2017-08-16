import {Component, Input, OnInit} from '@angular/core';
import {MnFullpageService, MnFullpageOptions, MnFullpageDirective} from "ngx-fullpage"


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private fullpageService: MnFullpageService) { }

  ngOnInit() {
  }

  @Input() public options:MnFullpageOptions = new MnFullpageOptions({
    keyboardScrolling: true,
    css3: true,
    scrollbar: true


  });
}
