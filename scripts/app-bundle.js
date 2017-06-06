define('app',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App = (function () {
        function App() {
        }
        Object.defineProperty(App.prototype, "topSections", {
            get: function () {
                return this.router.navigation.filter(function (nav) { return nav.settings.location === 'top'; });
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(App.prototype, "primarySections", {
            get: function () {
                return this.router.navigation.filter(function (nav) { return nav.settings.location === 'primary'; });
            },
            enumerable: true,
            configurable: true
        });
        App.prototype.sectionPages = function (section) {
            return this.router.navigation.filter(function (nav) { return nav.settings.section === section; });
        };
        App.prototype.configureRouter = function (config, router) {
            config.title = 'Fusion Frontend Demo App';
            config.map([
                { route: ['', 'home'], name: 'home', moduleId: 'home', title: 'Home' }
            ].concat(this.generateAllRoutes()));
            this.router = router;
        };
        App.prototype.generateAllRoutes = function () {
            var top = this.generateSections(0, 'top');
            var primary = this.generateSections(top.length, 'primary');
            var sections = top.concat(primary);
            var pages = [];
            for (var _i = 0, sections_1 = sections; _i < sections_1.length; _i++) {
                var section = sections_1[_i];
                pages.push.apply(pages, this.generatePages(section.name, section.title));
            }
            return sections.concat(pages);
        };
        App.prototype.generateSections = function (offset, location) {
            var routes = [];
            for (var i = 0; i < 4; ++i) {
                var n = offset + i + 1;
                var route = 'section' + n;
                routes.push({ route: route, name: route, moduleId: 'section', nav: true, title: 'Section ' + n, settings: { location: location } });
            }
            return routes;
        };
        App.prototype.generatePages = function (section, sectionTitle) {
            var min = 3;
            var max = 8;
            var pages = Math.round(Math.random() * (max - min) + min);
            var routes = [];
            for (var i = 0; i < pages; ++i) {
                var n = i + 1;
                var route = section + '/page' + n;
                routes.push({ route: route, name: route, moduleId: 'page', nav: true, title: 'Page ' + n, settings: { section: section, sectionTitle: sectionTitle } });
            }
            console.log(routes);
            return routes;
        };
        return App;
    }());
    exports.App = App;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,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Q0FBQztZQUNySCxDQUFDO1lBQ0QsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUNoQixDQUFDO1FBRU8sMkJBQWEsR0FBckIsVUFBc0IsT0FBZSxFQUFFLFlBQW9CO1lBQ3pELElBQU0sR0FBRyxHQUFHLENBQUMsQ0FBQztZQUNkLElBQU0sR0FBRyxHQUFHLENBQUMsQ0FBQztZQUNkLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1lBRTFELElBQUksTUFBTSxHQUFrQixFQUFFLENBQUM7WUFDL0IsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQztnQkFDL0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDZCxJQUFJLEtBQUssR0FBRyxPQUFPLEdBQUcsT0FBTyxHQUFHLENBQUMsQ0FBQztnQkFDbEMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssT0FBQSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxPQUFPLEdBQUcsQ0FBQyxFQUFFLFFBQVEsRUFBRSxFQUFFLE9BQU8sU0FBQSxFQUFFLFlBQVksY0FBQSxFQUFFLEVBQUUsQ0FBQyxDQUFBO1lBQzNILENBQUM7WUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3BCLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDaEIsQ0FBQztRQUVILFVBQUM7SUFBRCxDQTdEQSxBQTZEQyxJQUFBO0lBN0RZLGtCQUFHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJvdXRlciwgUm91dGVyQ29uZmlndXJhdGlvbiwgUm91dGVDb25maWcgfSBmcm9tICdhdXJlbGlhLXJvdXRlcic7XG5cbmV4cG9ydCBjbGFzcyBBcHAge1xuXG4gIHByaXZhdGUgcm91dGVyOiBSb3V0ZXI7XG5cbiAgZ2V0IHRvcFNlY3Rpb25zKCkge1xuICAgIHJldHVybiB0aGlzLnJvdXRlci5uYXZpZ2F0aW9uLmZpbHRlcihuYXYgPT4gbmF2LnNldHRpbmdzLmxvY2F0aW9uID09PSAndG9wJyk7XG4gIH1cblxuICBnZXQgcHJpbWFyeVNlY3Rpb25zKCkge1xuICAgIHJldHVybiB0aGlzLnJvdXRlci5uYXZpZ2F0aW9uLmZpbHRlcihuYXYgPT4gbmF2LnNldHRpbmdzLmxvY2F0aW9uID09PSAncHJpbWFyeScpO1xuICB9XG5cbiAgc2VjdGlvblBhZ2VzKHNlY3Rpb246IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJvdXRlci5uYXZpZ2F0aW9uLmZpbHRlcihuYXYgPT4gbmF2LnNldHRpbmdzLnNlY3Rpb24gPT09IHNlY3Rpb24pO1xuICB9XG5cbiAgY29uZmlndXJlUm91dGVyKGNvbmZpZzogUm91dGVyQ29uZmlndXJhdGlvbiwgcm91dGVyOiBSb3V0ZXIpIHtcbiAgICBjb25maWcudGl0bGUgPSAnRnVzaW9uIEZyb250ZW5kIERlbW8gQXBwJztcbiAgICBjb25maWcubWFwKFtcbiAgICAgIHsgcm91dGU6IFsnJywgJ2hvbWUnXSwgbmFtZTogJ2hvbWUnLCBtb2R1bGVJZDogJ2hvbWUnLCB0aXRsZTogJ0hvbWUnIH0sXG4gICAgICAuLi50aGlzLmdlbmVyYXRlQWxsUm91dGVzKClcbiAgICBdKTtcbiAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcbiAgfVxuXG4gIHByaXZhdGUgZ2VuZXJhdGVBbGxSb3V0ZXMoKSB7XG4gICAgbGV0IHRvcCA9IHRoaXMuZ2VuZXJhdGVTZWN0aW9ucygwLCAndG9wJyk7XG4gICAgbGV0IHByaW1hcnkgPSB0aGlzLmdlbmVyYXRlU2VjdGlvbnModG9wLmxlbmd0aCwgJ3ByaW1hcnknKTtcbiAgICBsZXQgc2VjdGlvbnMgPSBbLi4udG9wLCAuLi5wcmltYXJ5XTtcbiAgICBsZXQgcGFnZXM6IFJvdXRlQ29uZmlnW10gPSBbXTtcbiAgICBmb3IgKGxldCBzZWN0aW9uIG9mIHNlY3Rpb25zKSB7XG4gICAgICBwYWdlcy5wdXNoKC4uLnRoaXMuZ2VuZXJhdGVQYWdlcyhzZWN0aW9uLm5hbWUsIHNlY3Rpb24udGl0bGUpKTtcbiAgICB9XG4gICAgcmV0dXJuIFsuLi5zZWN0aW9ucywgLi4ucGFnZXNdO1xuICB9XG5cbiAgcHJpdmF0ZSBnZW5lcmF0ZVNlY3Rpb25zKG9mZnNldDogbnVtYmVyLCBsb2NhdGlvbjogc3RyaW5nKSB7XG4gICAgbGV0IHJvdXRlczogUm91dGVDb25maWdbXSA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgKytpKSB7XG4gICAgICBsZXQgbiA9IG9mZnNldCArIGkgKyAxO1xuICAgICAgbGV0IHJvdXRlID0gJ3NlY3Rpb24nICsgbjtcbiAgICAgIHJvdXRlcy5wdXNoKHsgcm91dGUsIG5hbWU6IHJvdXRlLCBtb2R1bGVJZDogJ3NlY3Rpb24nLCBuYXY6IHRydWUsIHRpdGxlOiAnU2VjdGlvbiAnICsgbiwgc2V0dGluZ3M6IHsgbG9jYXRpb24gfSB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHJvdXRlcztcbiAgfVxuXG4gIHByaXZhdGUgZ2VuZXJhdGVQYWdlcyhzZWN0aW9uOiBzdHJpbmcsIHNlY3Rpb25UaXRsZTogc3RyaW5nKSB7XG4gICAgY29uc3QgbWluID0gMztcbiAgICBjb25zdCBtYXggPSA4O1xuICAgIGxldCBwYWdlcyA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluKTtcblxuICAgIGxldCByb3V0ZXM6IFJvdXRlQ29uZmlnW10gPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhZ2VzOyArK2kpIHtcbiAgICAgIGxldCBuID0gaSArIDE7XG4gICAgICBsZXQgcm91dGUgPSBzZWN0aW9uICsgJy9wYWdlJyArIG47IC8vIHBhZ2UxLCBwYWdlMiwgcGFnZTMuLi5cbiAgICAgIHJvdXRlcy5wdXNoKHsgcm91dGUsIG5hbWU6IHJvdXRlLCBtb2R1bGVJZDogJ3BhZ2UnLCBuYXY6IHRydWUsIHRpdGxlOiAnUGFnZSAnICsgbiwgc2V0dGluZ3M6IHsgc2VjdGlvbiwgc2VjdGlvblRpdGxlIH0gfSlcbiAgICB9XG4gICAgY29uc29sZS5sb2cocm91dGVzKTsgXG4gICAgcmV0dXJuIHJvdXRlcztcbiAgfVxuXG59XG4iXSwic291cmNlUm9vdCI6InNyYyJ9

define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        debug: true,
        testing: true
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudmlyb25tZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUFBLGtCQUFlO1FBQ2IsS0FBSyxFQUFFLElBQUk7UUFDWCxPQUFPLEVBQUUsSUFBSTtLQUNkLENBQUMiLCJmaWxlIjoiZW52aXJvbm1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gIGRlYnVnOiB0cnVlLFxuICB0ZXN0aW5nOiB0cnVlXG59O1xuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('home',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Home = (function () {
        function Home() {
            this.message = 'Welcome home!';
        }
        return Home;
    }());
    exports.Home = Home;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBQUE7UUFBQTtZQUNFLFlBQU8sR0FBRyxlQUFlLENBQUM7UUFDNUIsQ0FBQztRQUFELFdBQUM7SUFBRCxDQUZBLEFBRUMsSUFBQTtJQUZZLG9CQUFJIiwiZmlsZSI6ImhvbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgSG9tZSB7XG4gIG1lc3NhZ2UgPSAnV2VsY29tZSBob21lISc7XG59XG4iXSwic291cmNlUm9vdCI6InNyYyJ9

define('main',["require", "exports", "./environment", "bootstrap"], function (require, exports, environment_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration();
        if (environment_1.default.debug) {
            aurelia.use.developmentLogging();
        }
        if (environment_1.default.testing) {
            aurelia.use.plugin('aurelia-testing');
        }
        aurelia.start().then(function () { return aurelia.setRoot(); });
    }
    exports.configure = configure;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBSUEsbUJBQTBCLE9BQWdCO1FBQ3hDLE9BQU8sQ0FBQyxHQUFHO2FBQ1IscUJBQXFCLEVBQUUsQ0FBQztRQUUzQixFQUFFLENBQUMsQ0FBQyxxQkFBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQ25DLENBQUM7UUFFRCxFQUFFLENBQUMsQ0FBQyxxQkFBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUN4QyxDQUFDO1FBRUQsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFNLE9BQUEsT0FBTyxDQUFDLE9BQU8sRUFBRSxFQUFqQixDQUFpQixDQUFDLENBQUM7SUFDaEQsQ0FBQztJQWJELDhCQWFDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0F1cmVsaWF9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJ1xuaW1wb3J0IGVudmlyb25tZW50IGZyb20gJy4vZW52aXJvbm1lbnQnO1xuaW1wb3J0ICdib290c3RyYXAnO1xuXG5leHBvcnQgZnVuY3Rpb24gY29uZmlndXJlKGF1cmVsaWE6IEF1cmVsaWEpIHtcbiAgYXVyZWxpYS51c2VcbiAgICAuc3RhbmRhcmRDb25maWd1cmF0aW9uKCk7XG5cbiAgaWYgKGVudmlyb25tZW50LmRlYnVnKSB7XG4gICAgYXVyZWxpYS51c2UuZGV2ZWxvcG1lbnRMb2dnaW5nKCk7XG4gIH1cblxuICBpZiAoZW52aXJvbm1lbnQudGVzdGluZykge1xuICAgIGF1cmVsaWEudXNlLnBsdWdpbignYXVyZWxpYS10ZXN0aW5nJyk7XG4gIH1cblxuICBhdXJlbGlhLnN0YXJ0KCkudGhlbigoKSA9PiBhdXJlbGlhLnNldFJvb3QoKSk7XG59XG4iXSwic291cmNlUm9vdCI6InNyYyJ9

define('page',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Page = (function () {
        function Page() {
            this.title = 'Page Title';
            this.subtitle = 'Content Subtitle';
            this.text = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.";
        }
        return Page;
    }());
    exports.Page = Page;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBQUE7UUFBQTtZQUNFLFVBQUssR0FBRyxZQUFZLENBQUM7WUFDckIsYUFBUSxHQUFHLGtCQUFrQixDQUFDO1lBQzlCLFNBQUksR0FBRyxrSkFBa0osQ0FBQztRQUM1SixDQUFDO1FBQUQsV0FBQztJQUFELENBSkEsQUFJQyxJQUFBO0lBSlksb0JBQUkiLCJmaWxlIjoicGFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBQYWdlIHtcbiAgdGl0bGUgPSAnUGFnZSBUaXRsZSc7XG4gIHN1YnRpdGxlID0gJ0NvbnRlbnQgU3VidGl0bGUnO1xuICB0ZXh0ID0gYExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ZXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZGlhbSBub251bW15IG5pYmggZXVpc21vZCB0aW5jaWR1bnQgdXQgbGFvcmVldCBkb2xvcmUgbWFnbmEgYWxpcXVhbSBlcmF0IHZvbHV0cGF0LmA7XG59XG4iXSwic291cmNlUm9vdCI6InNyYyJ9

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('section',["require", "exports", "aurelia-framework", "aurelia-router"], function (require, exports, aurelia_framework_1, aurelia_router_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Section = (function () {
        function Section(router) {
            this.heading = 'Section Heading';
            this.description = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.";
            this.router = router;
        }
        return Section;
    }());
    Section = __decorate([
        aurelia_framework_1.autoinject,
        __metadata("design:paramtypes", [aurelia_router_1.Router])
    ], Section);
    exports.Section = Section;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBSUEsSUFBYSxPQUFPO1FBS2xCLGlCQUFZLE1BQWM7WUFKMUIsWUFBTyxHQUFHLGlCQUFpQixDQUFDO1lBQzVCLGdCQUFXLEdBQUcsNG9DQUE0b0MsQ0FBQztZQUl6cEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDdkIsQ0FBQztRQUdILGNBQUM7SUFBRCxDQVZBLEFBVUMsSUFBQTtJQVZZLE9BQU87UUFEbkIsOEJBQVU7eUNBTVcsdUJBQU07T0FMZixPQUFPLENBVW5CO0lBVlksMEJBQU8iLCJmaWxlIjoic2VjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGF1dG9pbmplY3QgfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdhdXJlbGlhLXJvdXRlcic7XG5cbkBhdXRvaW5qZWN0XG5leHBvcnQgY2xhc3MgU2VjdGlvbiB7XG4gIGhlYWRpbmcgPSAnU2VjdGlvbiBIZWFkaW5nJztcbiAgZGVzY3JpcHRpb24gPSBgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVlciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkaWFtIG5vbnVtbXkgbmliaCBldWlzbW9kIHRpbmNpZHVudCB1dCBsYW9yZWV0IGRvbG9yZSBtYWduYSBhbGlxdWFtIGVyYXQgdm9sdXRwYXQuIFV0IHdpc2kgZW5pbSBhZCBtaW5pbSB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2kgdGF0aW9uIHVsbGFtY29ycGVyIHN1c2NpcGl0IGxvYm9ydGlzIG5pc2wgdXQgYWxpcXVpcCBleCBlYSBjb21tb2RvIGNvbnNlcXVhdC4gRHVpcyBhdXRlbSB2ZWwgZXVtIGlyaXVyZSBkb2xvciBpbiBoZW5kcmVyaXQgaW4gdnVscHV0YXRlIHZlbGl0IGVzc2UgbW9sZXN0aWUgY29uc2VxdWF0LCB2ZWwgaWxsdW0gZG9sb3JlIGV1IGZldWdpYXQgbnVsbGEgZmFjaWxpc2lzIGF0IHZlcm8gZXJvcyBldCBhY2N1bXNhbiBldCBpdXN0byBvZGlvIGRpZ25pc3NpbSBxdWkgYmxhbmRpdCBwcmFlc2VudCBsdXB0YXR1bSB6enJpbCBkZWxlbml0IGF1Z3VlIGR1aXMgZG9sb3JlIHRlIGZldWdhaXQgbnVsbGEgZmFjaWxpc2kuIE5hbSBsaWJlciB0ZW1wb3IgY3VtIHNvbHV0YSBub2JpcyBlbGVpZmVuZCBvcHRpb24gY29uZ3VlIG5paGlsIGltcGVyZGlldCBkb21pbmcgaWQgcXVvZCBtYXppbSBwbGFjZXJhdCBmYWNlciBwb3NzaW0gYXNzdW0uIFR5cGkgbm9uIGhhYmVudCBjbGFyaXRhdGVtIGluc2l0YW07IGVzdCB1c3VzIGxlZ2VudGlzIGluIGlpcyBxdWkgZmFjaXQgZW9ydW0gY2xhcml0YXRlbS4gSW52ZXN0aWdhdGlvbmVzIGRlbW9uc3RyYXZlcnVudCBsZWN0b3JlcyBsZWdlcmUgbWUgbGl1cyBxdW9kIGlpIGxlZ3VudCBzYWVwaXVzLiBDbGFyaXRhcyBlc3QgZXRpYW0gcHJvY2Vzc3VzIGR5bmFtaWN1cywgcXVpIHNlcXVpdHVyIG11dGF0aW9uZW0gY29uc3VldHVkaXVtIGxlY3RvcnVtLiBNaXJ1bSBlc3Qgbm90YXJlIHF1YW0gbGl0dGVyYSBnb3RoaWNhLCBxdWFtIG51bmMgcHV0YW11cyBwYXJ1bSBjbGFyYW0sIGFudGVwb3N1ZXJpdCBsaXR0ZXJhcnVtIGZvcm1hcyBodW1hbml0YXRpcyBwZXIgc2VhY3VsYSBxdWFydGEgZGVjaW1hIGV0IHF1aW50YSBkZWNpbWEuIEVvZGVtIG1vZG8gdHlwaSwgcXVpIG51bmMgbm9iaXMgdmlkZW50dXIgcGFydW0gY2xhcmksIGZpYW50IHNvbGxlbW5lcyBpbiBmdXR1cnVtLmA7XG4gIHJvdXRlcjogUm91dGVyO1xuXG4gIGNvbnN0cnVjdG9yKHJvdXRlcjogUm91dGVyKSB7XG4gICAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XG4gIH1cblxuICBcbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('text!app.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"bootstrap/css/bootstrap.css\"></require>\n  <require from=\"./styles/site.css\"></require>\n  <div class=\"container-fluid\">\n    <nav class=\"navbar navbar-default navbar-top\">\n      <ul class=\"nav navbar-nav navbar-left\">\n        <li class=\"${section.active ? 'active' : ''}\" repeat.for=\"section of topSections\">\n          <a href.bind=\"section.href\">${section.title}</a>\n        </il>\n      </ul>\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li>\n          <a href=\"tel:1800-123-456\"><i class=\"fa fa-phone\"></i> 1800 123 456</a>\n        </li>\n        <li  class=\"bg-primary\">\n          <a href=\"#\" class=\"sign-in-link\"><i class=\"fa fa-sign-in\"></i> Sign-in</a>\n        </li>\n      </ul>\n    </nav>\n    <nav class=\"navbar navbar-default navbar-primary\"\n         role=\"navigation\">\n      <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n          <button aria-controls=\"navbar\"\n                  aria-expanded=\"false\"\n                  class=\"navbar-toggle collapsed\"\n                  data-target=\"#navbar\"\n                  data-toggle=\"collapse\"\n                  type=\"button\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n          </button>\n          <div class=\"navbar-brand\">Logo</div>\n        </div>\n          <form class=\"navbar-form navbar-right\">\n        <div class=\"form-group\">\n          <input type=\"search\" class=\"form-control input-lg\" placeholder=\"Search...\">\n        </div>\n      </form>\n        <div class=\"navbar-collapse collapse\"\n             id=\"navbar\">\n          <ul class=\"nav navbar-nav navbar-right\">\n            <li class=\"dropdown ${section.active ? 'active' : ''}\"\n                repeat.for=\"section of primarySections\">\n              <a aria-expanded=\"false\"\n                 aria-haspopup=\"true\"\n                 class=\"dropdown-toggle\"\n                 data-toggle=\"dropdown\"\n                 href=\"#\"\n                 role=\"button\">${section.title} \n              <span class=\"caret\"></span></a>\n              <ul class=\"dropdown-menu\">\n                <li repeat.for=\"page of sectionPages(section.config.name)\">\n                  <a href.bind=\"page.href\">${page.title}</a>\n                </li>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </nav>\n\n    <div class=\"container\">\n      <ol class=\"breadcrumb\" with.bind=\"router.currentInstruction\">\n        <li if.bind=\"config.name !== 'home'\"><a href=\"#/home\">Home</a></li>\n        <li if.bind=\"config.settings.section\">\n          <a href.bind=\"'#/' + config.settings.section\">${config.settings.sectionTitle}</a>\n        </li>\n        <li class=\"active\">${config.title}</li>\n      </ol>\n      <router-view></router-view>\n    </div>\n  </div>\n</template>"; });
define('text!home.html', ['module'], function(module) { module.exports = "<template>\n  <h1>${message}</h1>\n</template>\n"; });
define('text!styles/site.css', ['module'], function(module) { module.exports = "nav.navbar-top {\n  padding: 2px;\n  font-size: 14px;\n  background-color: #FEFEFE; }\n\nnav.navbar-top .nav.navbar-nav > li > a {\n  padding-top: 2px !important;\n  padding-bottom: 0 !important;\n  height: 26px; }\n\n.navbar {\n  min-height: 28px !important; }\n\na.sign-in-link {\n  color: #FFFFFF !important; }\n\nnav.navbar-top .nav.navbar-nav ul li {\n  margin: 0px; }\n\nnav.navbar-primary {\n  padding: 36px;\n  font-size: 24px; }\n\ndiv.navbar-brand {\n  font-size: 28px;\n  padding: 18px; }\n"; });
define('text!page.html', ['module'], function(module) { module.exports = "<template>\n  <div class=\"jumbotron\">\n    <div class=\"container\">\n      <div class=\"col-lg-6\">\n        <h2>${title}<br><small>${subtitle}</small></h2>\n        <p>${text}</p>\n      </div>\n      <div class=\"col-lg-6\">\n        <img class=\"img-responsive\" src=\"http://lorempixel.com/800/600\" />\n      </div>\n    </div>\n  </div>\n  <h2>${subtitle}</h2>\n  <div class=\"col-sm-3\" repeat.for=\"i of 4\">\n     <div class=\"thumbnail\">\n    <img src=\"http://lorempixel.com/640/480\" />\n      <div class=\"caption\">\n        <h3>Block title</h3>\n        <p>Nullam id dolor id nibh ultricies vehicula ut id elit</p>\n        <p><a href=\"#\">Tell me more</a></p>\n      </div>\n    </div>\n  </div>\n</template>"; });
define('text!section.html', ['module'], function(module) { module.exports = "<template>\n  <div class=\"row\">\n    <div class=\"col-sm-4\">\n      <h2>${heading}</h2>\n      <p>${description}</p>\n      <a class=\"btn btn-primary\"\n         href=\"#\">Link to Section</a>\n    </div>\n    <div class=\"col-sm-8\">\n      <div class=\"col-xs-3\">\n        <div class=\"panel panel-default\">\n          <div class=\"panel-heading\">\n            <a href=\"#\">First level link</a>\n          </div>\n          <ul class=\"list-group\">\n            <li class=\"list-group-item\">\n              <a href=\"#\">Second level link</a>\n            </li>\n            <li class=\"list-group-item\">\n              <a href=\"#\">Second level link</a>\n            </li>\n            <li class=\"list-group-item\">\n              <a href=\"#\">Second level link</a>\n            </li>\n          </ul>\n        </div>\n        <div class=\"panel panel-default\">\n           <div class=\"panel-heading\">\n            <a href=\"#\">First level link</a>\n          </div>\n          <ul class=\"list-group\">\n            <li class=\"list-group-item\">\n              <a href=\"#\">Second level link</a>\n            </li>\n            <li class=\"list-group-item\">\n              <a href=\"#\">Second level link</a>\n            </li>\n            <li class=\"list-group-item\">\n              <a href=\"#\">Second level link</a>\n            </li>\n            <li class=\"list-group-item\">\n              <a href=\"#\">Second level link</a>\n            </li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"col-xs-3\">\n        <div class=\"panel panel-default\">\n          <div class=\"panel-heading\">\n            <a href=\"#\">First level link</a>\n          </div>\n          <ul class=\"list-group\">\n            <li class=\"list-group-item\">\n              <a href=\"#\">Second level link</a>\n            </li>\n            <li class=\"list-group-item\">\n              <a href=\"#\">Second level link</a>\n            </li>\n            <li class=\"list-group-item\">\n              <a href=\"#\">Second level link</a>\n            <li class=\"list-group-item\">\n              <a href=\"#\">Second level link</a>\n            </li>\n          </ul>\n        </div>\n        <div class=\"panel panel-default\">\n           <div class=\"panel-heading\">\n            <a href=\"#\">First level link</a>\n          </div>\n          <ul class=\"list-group\">\n            <li class=\"list-group-item\">\n              <a href=\"#\">Second level link</a>\n            </li>\n            <li class=\"list-group-item\">\n              <a href=\"#\">Second level link</a>\n            </li>\n            </li>\n            <li class=\"list-group-item\">\n              <a href=\"#\">Second level link</a>\n            </li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"col-md-4\">\n        <div class=\"panel panel-default\">\n          <div class=\"panel-heading\">Quick links</div>\n          <ul class=\"list-group\">\n            <li class=\"list-group-item\">\n              <a href=\"#\"><i class=\"fa fa-fw fa-shopping-cart\"></i> Cart</a>\n            </li>\n            <li class=\"list-group-item\">\n              <a href=\"#\"><i class=\"fa fa-fw fa-credit-card\"></i> Payments</a>\n            </li>\n            <li class=\"list-group-item\">\n              <a href=\"#\"><i class=\"fa fa-fw fa-truck\"></i> Orders</a>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n</template>"; });
//# sourceMappingURL=app-bundle.js.map