import { Component, OnInit } from '@angular/core';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  faTiktok = faTiktok;
  faEnvelope = faEnvelope;
  faYoutube = faYoutube;

  constructor() { }

  ngOnInit(): void {
  }

}
