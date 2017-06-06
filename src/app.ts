import { Router, RouterConfiguration, RouteConfig } from 'aurelia-router';

export class App {

  private router: Router;

  get topSections() {
    return this.router.navigation.filter(nav => nav.settings.location === 'top');
  }

  get primarySections() {
    return this.router.navigation.filter(nav => nav.settings.location === 'primary');
  }

  sectionPages(section: string) {
    return this.router.navigation.filter(nav => nav.settings.section === section);
  }

  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'Fusion Frontend Demo App';
    config.map([
      { route: ['', 'home'], name: 'home', moduleId: 'home', title: 'Home' },
      ...this.generateAllRoutes()
    ]);
    this.router = router;
  }

  private generateAllRoutes() {
    let top = this.generateSections(0, 'top');
    let primary = this.generateSections(top.length, 'primary');
    let sections = [...top, ...primary];
    let pages: RouteConfig[] = [];
    for (let section of sections) {
      pages.push(...this.generatePages(section.name, section.title));
    }
    return [...sections, ...pages];
  }

  private generateSections(offset: number, location: string) {
    let routes: RouteConfig[] = [];
    for (let i = 0; i < 4; ++i) {
      let n = offset + i + 1;
      let route = 'section' + n;
      routes.push({ route, name: route, moduleId: 'section', nav: true, title: 'Section ' + n, settings: { location } });
    }
    return routes;
  }

  private generatePages(section: string, sectionTitle: string) {
    const min = 3;
    const max = 8;
    let pages = Math.round(Math.random() * (max - min) + min);

    let routes: RouteConfig[] = [];
    for (let i = 0; i < pages; ++i) {
      let n = i + 1;
      let route = section + '/page' + n; // page1, page2, page3...
      routes.push({ route, name: route, moduleId: 'page', nav: true, title: 'Page ' + n, settings: { section, sectionTitle } })
    }
    console.log(routes); 
    return routes;
  }

}
