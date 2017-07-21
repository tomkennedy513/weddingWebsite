import { Component, OnInit } from '@angular/core';
import {Member} from "./member/member";
import {bridalParty} from "../../../assets/bridal-party-members"


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

  }

}
