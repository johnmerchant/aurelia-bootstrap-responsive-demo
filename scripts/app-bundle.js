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
            config.title = 'Fusion';
            config.map([
                { route: ['', 'home'], name: 'home', moduleId: 'home' }
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
                pages.push.apply(pages, this.generatePages(section.settings.section));
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
        App.prototype.generatePages = function (section) {
            var min = 3;
            var max = 8;
            var pages = Math.round(Math.random() * (max - min) + min);
            var routes = [];
            for (var i = 0; i < pages; ++i) {
                var n = i + 1;
                var route = section + '/page' + n;
                routes.push({ route: route, name: route, moduleId: 'page', nav: true, title: 'Page ' + n, settings: { section: section } });
            }
            return routes;
        };
        return App;
    }());
    exports.App = App;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QUFNLENBQUM7UUFDaEIsQ0FBQztRQUVPLDJCQUFhLEdBQXJCLFVBQXNCLE9BQWU7WUFDbkMsSUFBTSxHQUFHLEdBQUcsQ0FBQyxDQUFDO1lBQ2QsSUFBTSxHQUFHLEdBQUcsQ0FBQyxDQUFDO1lBQ2QsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7WUFFMUQsSUFBSSxNQUFNLEdBQWtCLEVBQUUsQ0FBQztZQUMvQixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDO2dCQUMvQixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNkLElBQUksS0FBSyxHQUFHLE9BQU8sR0FBRyxPQUFPLEdBQUcsQ0FBQyxDQUFDO2dCQUNsQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxPQUFBLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE9BQU8sR0FBRyxDQUFDLEVBQUUsUUFBUSxFQUFFLEVBQUUsT0FBTyxTQUFBLEVBQUUsRUFBRSxDQUFDLENBQUE7WUFDN0csQ0FBQztZQUNELE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDaEIsQ0FBQztRQUVILFVBQUM7SUFBRCxDQTVEQSxBQTREQyxJQUFBO0lBNURZLGtCQUFHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNlY3Rpb24gfSBmcm9tICcuL3NlY3Rpb24nO1xuaW1wb3J0IHsgUm91dGVyLCBSb3V0ZXJDb25maWd1cmF0aW9uLCBSb3V0ZUNvbmZpZyB9IGZyb20gJ2F1cmVsaWEtcm91dGVyJztcblxuZXhwb3J0IGNsYXNzIEFwcCB7XG5cbiAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcjtcblxuICBnZXQgdG9wU2VjdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMucm91dGVyLm5hdmlnYXRpb24uZmlsdGVyKG5hdiA9PiBuYXYuc2V0dGluZ3MubG9jYXRpb24gPT09ICd0b3AnKTtcbiAgfVxuXG4gIGdldCBwcmltYXJ5U2VjdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMucm91dGVyLm5hdmlnYXRpb24uZmlsdGVyKG5hdiA9PiBuYXYuc2V0dGluZ3MubG9jYXRpb24gPT09ICdwcmltYXJ5Jyk7XG4gIH1cblxuICBzZWN0aW9uUGFnZXMoc2VjdGlvbjogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucm91dGVyLm5hdmlnYXRpb24uZmlsdGVyKG5hdiA9PiBuYXYuc2V0dGluZ3Muc2VjdGlvbiA9PT0gc2VjdGlvbik7XG4gIH1cblxuICBjb25maWd1cmVSb3V0ZXIoY29uZmlnOiBSb3V0ZXJDb25maWd1cmF0aW9uLCByb3V0ZXI6IFJvdXRlcikge1xuICAgIGNvbmZpZy50aXRsZSA9ICdGdXNpb24nO1xuICAgIGNvbmZpZy5tYXAoW1xuICAgICAgeyByb3V0ZTogWycnLCAnaG9tZSddLCBuYW1lOiAnaG9tZScsIG1vZHVsZUlkOiAnaG9tZScgfSxcbiAgICAgIC4uLnRoaXMuZ2VuZXJhdGVBbGxSb3V0ZXMoKVxuICAgIF0pO1xuICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xuICB9XG5cbiAgcHJpdmF0ZSBnZW5lcmF0ZUFsbFJvdXRlcygpIHtcbiAgICBsZXQgdG9wID0gdGhpcy5nZW5lcmF0ZVNlY3Rpb25zKDAsICd0b3AnKTtcbiAgICBsZXQgcHJpbWFyeSA9IHRoaXMuZ2VuZXJhdGVTZWN0aW9ucyh0b3AubGVuZ3RoLCAncHJpbWFyeScpO1xuICAgIGxldCBzZWN0aW9ucyA9IFsuLi50b3AsIC4uLnByaW1hcnldO1xuICAgIGxldCBwYWdlczogUm91dGVDb25maWdbXSA9IFtdO1xuICAgIGZvciAobGV0IHNlY3Rpb24gb2Ygc2VjdGlvbnMpIHtcbiAgICAgIHBhZ2VzLnB1c2goLi4udGhpcy5nZW5lcmF0ZVBhZ2VzKHNlY3Rpb24uc2V0dGluZ3Muc2VjdGlvbikpO1xuICAgIH1cbiAgICByZXR1cm4gWy4uLnNlY3Rpb25zLCAuLi5wYWdlc107XG4gIH1cblxuICBwcml2YXRlIGdlbmVyYXRlU2VjdGlvbnMob2Zmc2V0OiBudW1iZXIsIGxvY2F0aW9uOiBzdHJpbmcpIHtcbiAgICBsZXQgcm91dGVzOiBSb3V0ZUNvbmZpZ1tdID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyArK2kpIHtcbiAgICAgIGxldCBuID0gb2Zmc2V0ICsgaSArIDE7XG4gICAgICBsZXQgcm91dGUgPSAnc2VjdGlvbicgKyBuO1xuICAgICAgcm91dGVzLnB1c2goeyByb3V0ZSwgbmFtZTogcm91dGUsIG1vZHVsZUlkOiAnc2VjdGlvbicsIG5hdjogdHJ1ZSwgdGl0bGU6ICdTZWN0aW9uICcgKyBuLCBzZXR0aW5nczogeyBsb2NhdGlvbiB9IH0pO1xuICAgIH1cbiAgICByZXR1cm4gcm91dGVzO1xuICB9XG5cbiAgcHJpdmF0ZSBnZW5lcmF0ZVBhZ2VzKHNlY3Rpb246IHN0cmluZykge1xuICAgIGNvbnN0IG1pbiA9IDM7XG4gICAgY29uc3QgbWF4ID0gODtcbiAgICBsZXQgcGFnZXMgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbik7XG5cbiAgICBsZXQgcm91dGVzOiBSb3V0ZUNvbmZpZ1tdID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYWdlczsgKytpKSB7XG4gICAgICBsZXQgbiA9IGkgKyAxO1xuICAgICAgbGV0IHJvdXRlID0gc2VjdGlvbiArICcvcGFnZScgKyBuOyAvLyBwYWdlMSwgcGFnZTIsIHBhZ2UzLi4uXG4gICAgICByb3V0ZXMucHVzaCh7IHJvdXRlLCBuYW1lOiByb3V0ZSwgbW9kdWxlSWQ6ICdwYWdlJywgbmF2OiB0cnVlLCB0aXRsZTogJ1BhZ2UgJyArIG4sIHNldHRpbmdzOiB7IHNlY3Rpb24gfSB9KVxuICAgIH1cbiAgICByZXR1cm4gcm91dGVzO1xuICB9XG5cbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

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

define('main',["require", "exports", "./environment"], function (require, exports, environment_1) {
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBSUEsbUJBQTBCLE9BQWdCO1FBQ3hDLE9BQU8sQ0FBQyxHQUFHO2FBQ1IscUJBQXFCLEVBQUUsQ0FBQztRQUUzQixFQUFFLENBQUMsQ0FBQyxxQkFBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQ25DLENBQUM7UUFFRCxFQUFFLENBQUMsQ0FBQyxxQkFBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUN4QyxDQUFDO1FBRUQsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFNLE9BQUEsT0FBTyxDQUFDLE9BQU8sRUFBRSxFQUFqQixDQUFpQixDQUFDLENBQUM7SUFDaEQsQ0FBQztJQWJELDhCQWFDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0F1cmVsaWF9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJ1xuaW1wb3J0IGVudmlyb25tZW50IGZyb20gJy4vZW52aXJvbm1lbnQnO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBjb25maWd1cmUoYXVyZWxpYTogQXVyZWxpYSkge1xuICBhdXJlbGlhLnVzZVxuICAgIC5zdGFuZGFyZENvbmZpZ3VyYXRpb24oKTtcblxuICBpZiAoZW52aXJvbm1lbnQuZGVidWcpIHtcbiAgICBhdXJlbGlhLnVzZS5kZXZlbG9wbWVudExvZ2dpbmcoKTtcbiAgfVxuXG4gIGlmIChlbnZpcm9ubWVudC50ZXN0aW5nKSB7XG4gICAgYXVyZWxpYS51c2UucGx1Z2luKCdhdXJlbGlhLXRlc3RpbmcnKTtcbiAgfVxuXG4gIGF1cmVsaWEuc3RhcnQoKS50aGVuKCgpID0+IGF1cmVsaWEuc2V0Um9vdCgpKTtcbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('page',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Page = (function () {
        function Page() {
            this.text = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.";
        }
        return Page;
    }());
    exports.Page = Page;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBQUE7UUFBQTtZQUNFLFNBQUksR0FBRyw0b0NBQTRvQyxDQUFDO1FBQ3RwQyxDQUFDO1FBQUQsV0FBQztJQUFELENBRkEsQUFFQyxJQUFBO0lBRlksb0JBQUkiLCJmaWxlIjoicGFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBQYWdlIHtcbiAgdGV4dCA9IGBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dWVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRpYW0gbm9udW1teSBuaWJoIGV1aXNtb2QgdGluY2lkdW50IHV0IGxhb3JlZXQgZG9sb3JlIG1hZ25hIGFsaXF1YW0gZXJhdCB2b2x1dHBhdC4gVXQgd2lzaSBlbmltIGFkIG1pbmltIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaSB0YXRpb24gdWxsYW1jb3JwZXIgc3VzY2lwaXQgbG9ib3J0aXMgbmlzbCB1dCBhbGlxdWlwIGV4IGVhIGNvbW1vZG8gY29uc2VxdWF0LiBEdWlzIGF1dGVtIHZlbCBldW0gaXJpdXJlIGRvbG9yIGluIGhlbmRyZXJpdCBpbiB2dWxwdXRhdGUgdmVsaXQgZXNzZSBtb2xlc3RpZSBjb25zZXF1YXQsIHZlbCBpbGx1bSBkb2xvcmUgZXUgZmV1Z2lhdCBudWxsYSBmYWNpbGlzaXMgYXQgdmVybyBlcm9zIGV0IGFjY3Vtc2FuIGV0IGl1c3RvIG9kaW8gZGlnbmlzc2ltIHF1aSBibGFuZGl0IHByYWVzZW50IGx1cHRhdHVtIHp6cmlsIGRlbGVuaXQgYXVndWUgZHVpcyBkb2xvcmUgdGUgZmV1Z2FpdCBudWxsYSBmYWNpbGlzaS4gTmFtIGxpYmVyIHRlbXBvciBjdW0gc29sdXRhIG5vYmlzIGVsZWlmZW5kIG9wdGlvbiBjb25ndWUgbmloaWwgaW1wZXJkaWV0IGRvbWluZyBpZCBxdW9kIG1hemltIHBsYWNlcmF0IGZhY2VyIHBvc3NpbSBhc3N1bS4gVHlwaSBub24gaGFiZW50IGNsYXJpdGF0ZW0gaW5zaXRhbTsgZXN0IHVzdXMgbGVnZW50aXMgaW4gaWlzIHF1aSBmYWNpdCBlb3J1bSBjbGFyaXRhdGVtLiBJbnZlc3RpZ2F0aW9uZXMgZGVtb25zdHJhdmVydW50IGxlY3RvcmVzIGxlZ2VyZSBtZSBsaXVzIHF1b2QgaWkgbGVndW50IHNhZXBpdXMuIENsYXJpdGFzIGVzdCBldGlhbSBwcm9jZXNzdXMgZHluYW1pY3VzLCBxdWkgc2VxdWl0dXIgbXV0YXRpb25lbSBjb25zdWV0dWRpdW0gbGVjdG9ydW0uIE1pcnVtIGVzdCBub3RhcmUgcXVhbSBsaXR0ZXJhIGdvdGhpY2EsIHF1YW0gbnVuYyBwdXRhbXVzIHBhcnVtIGNsYXJhbSwgYW50ZXBvc3Vlcml0IGxpdHRlcmFydW0gZm9ybWFzIGh1bWFuaXRhdGlzIHBlciBzZWFjdWxhIHF1YXJ0YSBkZWNpbWEgZXQgcXVpbnRhIGRlY2ltYS4gRW9kZW0gbW9kbyB0eXBpLCBxdWkgbnVuYyBub2JpcyB2aWRlbnR1ciBwYXJ1bSBjbGFyaSwgZmlhbnQgc29sbGVtbmVzIGluIGZ1dHVydW0uYDtcbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('section',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Section = (function () {
        function Section() {
            this.description = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.";
        }
        return Section;
    }());
    exports.Section = Section;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBQUE7UUFBQTtZQUNFLGdCQUFXLEdBQUcsNG9DQUE0b0MsQ0FBQztRQUM3cEMsQ0FBQztRQUFELGNBQUM7SUFBRCxDQUZBLEFBRUMsSUFBQTtJQUZZLDBCQUFPIiwiZmlsZSI6InNlY3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgU2VjdGlvbiB7XG4gIGRlc2NyaXB0aW9uID0gYExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ZXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZGlhbSBub251bW15IG5pYmggZXVpc21vZCB0aW5jaWR1bnQgdXQgbGFvcmVldCBkb2xvcmUgbWFnbmEgYWxpcXVhbSBlcmF0IHZvbHV0cGF0LiBVdCB3aXNpIGVuaW0gYWQgbWluaW0gdmVuaWFtLCBxdWlzIG5vc3RydWQgZXhlcmNpIHRhdGlvbiB1bGxhbWNvcnBlciBzdXNjaXBpdCBsb2JvcnRpcyBuaXNsIHV0IGFsaXF1aXAgZXggZWEgY29tbW9kbyBjb25zZXF1YXQuIER1aXMgYXV0ZW0gdmVsIGV1bSBpcml1cmUgZG9sb3IgaW4gaGVuZHJlcml0IGluIHZ1bHB1dGF0ZSB2ZWxpdCBlc3NlIG1vbGVzdGllIGNvbnNlcXVhdCwgdmVsIGlsbHVtIGRvbG9yZSBldSBmZXVnaWF0IG51bGxhIGZhY2lsaXNpcyBhdCB2ZXJvIGVyb3MgZXQgYWNjdW1zYW4gZXQgaXVzdG8gb2RpbyBkaWduaXNzaW0gcXVpIGJsYW5kaXQgcHJhZXNlbnQgbHVwdGF0dW0genpyaWwgZGVsZW5pdCBhdWd1ZSBkdWlzIGRvbG9yZSB0ZSBmZXVnYWl0IG51bGxhIGZhY2lsaXNpLiBOYW0gbGliZXIgdGVtcG9yIGN1bSBzb2x1dGEgbm9iaXMgZWxlaWZlbmQgb3B0aW9uIGNvbmd1ZSBuaWhpbCBpbXBlcmRpZXQgZG9taW5nIGlkIHF1b2QgbWF6aW0gcGxhY2VyYXQgZmFjZXIgcG9zc2ltIGFzc3VtLiBUeXBpIG5vbiBoYWJlbnQgY2xhcml0YXRlbSBpbnNpdGFtOyBlc3QgdXN1cyBsZWdlbnRpcyBpbiBpaXMgcXVpIGZhY2l0IGVvcnVtIGNsYXJpdGF0ZW0uIEludmVzdGlnYXRpb25lcyBkZW1vbnN0cmF2ZXJ1bnQgbGVjdG9yZXMgbGVnZXJlIG1lIGxpdXMgcXVvZCBpaSBsZWd1bnQgc2FlcGl1cy4gQ2xhcml0YXMgZXN0IGV0aWFtIHByb2Nlc3N1cyBkeW5hbWljdXMsIHF1aSBzZXF1aXR1ciBtdXRhdGlvbmVtIGNvbnN1ZXR1ZGl1bSBsZWN0b3J1bS4gTWlydW0gZXN0IG5vdGFyZSBxdWFtIGxpdHRlcmEgZ290aGljYSwgcXVhbSBudW5jIHB1dGFtdXMgcGFydW0gY2xhcmFtLCBhbnRlcG9zdWVyaXQgbGl0dGVyYXJ1bSBmb3JtYXMgaHVtYW5pdGF0aXMgcGVyIHNlYWN1bGEgcXVhcnRhIGRlY2ltYSBldCBxdWludGEgZGVjaW1hLiBFb2RlbSBtb2RvIHR5cGksIHF1aSBudW5jIG5vYmlzIHZpZGVudHVyIHBhcnVtIGNsYXJpLCBmaWFudCBzb2xsZW1uZXMgaW4gZnV0dXJ1bS5gO1xufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('text!app.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"bootstrap/css/bootstrap.css\"></require>\n  <require from=\"./styles/site.css\"></require>\n  <div class=\"container\">\n    <div class=\"header clearfix\">\n      <nav class=\"nav-top navbar navbar-light bg-faded\">\n        <ul class=\"navbar-nav\">\n          <li class=\"nav-item\"\n              repeat.for=\"section of topSections\">\n            <a class=\"nav-link ${section.active ? 'active' : ''}\"\n               href.bind=\"section.href\">${section.title}</a>\n          </li>\n        </ul>\n      </nav>\n      <nav class=\"nav-primary navbar navbar-toggleable-md navbar-inverse bg-primary\">\n        <button aria-controls=\"navbarNavDropdown\"\n                aria-expanded=\"false\"\n                aria-label=\"Toggle navigation\"\n                class=\"navbar-toggler navbar-toggler-right\"\n                data-target=\"#navbarNavDropdown\"\n                data-toggle=\"collapse\"\n                type=\"button\">\n          <span class=\"navbar-toggler-icon\"></span>\n        </button>\n        <div class=\"navbar-brand\">Logo</div>\n        <div class=\"collapse navbar-collapse\"\n             id=\"navbarNavDropdown\">\n          <ul class=\"navbar-nav ml-auto\">\n            <li class=\"nav-item dropdown\"\n                repeat.for=\"section of primarySections\">\n              <a aria-expanded=\"false\"\n                 aria-haspopup=\"true\"\n                 class=\"nav-link dropdown-toggle ${section.active ? 'active' : ''}\"\n                 href.bind=\"section.href\"\n                 id.bind=\"section.config.name + 'DropdownLink'\">${section.title}</a>\n              <div aria-labelledby.bind=\"section.config.name + 'DropdownLink'\"\n                   class=\"dropdown-menu\">\n                <a class=\"dropdown-item ${page.active ? 'active' : ''}\"\n                   href.bind=\"page.href\"\n                   repeat.for=\"page of sectionPages(section.config.name)\">${page.title}</a>\n              </div>\n            </li>\n          </ul>\n          <form class=\"form-inline my-2 my-lg-0\">\n            <input class=\"form-control\"\n                   placeholder=\"Search...\"\n                   type=\"search\"></input>\n          </form>\n        </div>\n      </nav>\n      <section class=\"router-view\">\n        <router-view></router-view>\n      </section>\n    </div>\n  </div>\n</template>\n"; });
define('text!styles/site.css', ['module'], function(module) { module.exports = "nav.nav-top {\n  padding: 2px;\n  font-size: 12px; }\n\nnav.nav-primary {\n  padding: 48px;\n  font-size: 16px; }\n\n.navbar-brand {\n  font-size: 18pt;\n  padding: 2px 16px 2px 8px; }\n"; });
define('text!home.html', ['module'], function(module) { module.exports = "<template>\n  <h1>${message}</h1>\n</template>\n"; });
define('text!section.html', ['module'], function(module) { module.exports = "<template>\n  <p>${description}</p>\n</template>\n"; });
//# sourceMappingURL=app-bundle.js.map