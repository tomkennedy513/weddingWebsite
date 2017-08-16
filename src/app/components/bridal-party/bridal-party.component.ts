import { Component, OnInit } from '@angular/core';
import {Member} from "./member/member";
import {bridalParty} from "./bridal-party-members"


@Component({
  selector: 'app-bridal-party',
  templateUrl: './bridal-party.component.html',
  styleUrls: ['./bridal-party.component.css']
})
export class BridalPartyComponent implements OnInit {
  bridalPartyMembers : [Member];
  constructor() {
    this.bridalPartyMembers = bridalParty;
  }


  ngOnInit() {
    // const divToChange1 = document.getElementsByTagName('html');
    // divToChange1.item(0).className="";
    // divToChange1.item(0).style.overflow='scroll';
    // const divToChange2 = document.getElementsByTagName('body');
    // divToChange2.item(0).className="";
    // divToChange2.item(0).style.overflow='scroll'

  }

}
