import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isActive: boolean = false;

  constructor() {}
  ngOnInit(): void {}

  test(event: any) {
    console.log(event.target.value);
    document.documentElement.style.setProperty(
      `--color-primary`,
      event.target.value
    );
  }
}
