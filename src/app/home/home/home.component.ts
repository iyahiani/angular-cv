import {Component, OnInit} from '@angular/core';
import {ViewportScroller} from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements  OnInit{
  constructor(private scroller: ViewportScroller) {
  }
  // tslint:disable-next-line:typedef
  ngOnInit() {
      // Activate Bootstrap scrollspy on the main nav element
      const sideNav = document.body.querySelector('#sideNav');
      if (sideNav) {
        // @ts-ignore
        scrollTo('#sideNav', '0px 0px -40%');
      }

      // Collapse responsive navbar when toggler is visible
      const navbarToggler = document.body.querySelector('.navbar-toggler');
      const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
      );
      // tslint:disable-next-line:only-arrow-functions typedef
      responsiveNavItems.map(function(responsiveNavItem) {
        // @ts-ignore
        responsiveNavItem.addEventListener('click', () => {
          // @ts-ignore
          if (window.getComputedStyle(navbarToggler).display !== 'none') {
            // @ts-ignore
            navbarToggler.click();
          }
        });
      });
  }
  // tslint:disable-next-line:typedef
 scrollTo(hash: string) {
   this.scroller.scrollToAnchor(hash);
  }

}
