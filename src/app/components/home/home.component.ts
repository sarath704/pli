import {Component, OnInit, AfterViewInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";

@Component({selector: "app-home", templateUrl: "./home.component.html", styleUrls: ["./home.component.scss"]})
export class HomeComponent  {
  private fragment: string;
  constructor(private route: ActivatedRoute, private router: Router) {}

  goToLink(e, link) {
    e.preventDefault();
    const x = document.querySelector(link);
    if (x) {
        x.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

}
