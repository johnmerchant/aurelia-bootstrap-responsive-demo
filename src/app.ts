import { Router, RouterConfiguration, RouteConfig } from 'aurelia-router';

export class App {
  
  private router: Router;

  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'Fusion';
    let routes: RouteConfig[] = [{ route: ['', 'home'], name: 'home', moduleId: 'home' }];
    routes.push(...this.generateSections('top'));
    routes.push(...this.generateSections('primary'));
    config.map(routes);
    this.router = router;
  }

  private generateSections(location: string) {
    let routes: RouteConfig[] = [];
    for (let i = 0; i < 4; ++i) {
      let n = i + 1;
      let route = 'section' + n;
      routes.push({ route, name: route, moduleId: 'section', nav: true, title: 'Section ' + n, settings: { location } });
    }
    return routes;
  }
}
