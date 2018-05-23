var ROUTES_INDEX = {"name":"<root>","kind":"module","className":"AppModule","children":[{"name":"routes","filename":"src/modules/app/app.routes.ts","module":"AppRoutes","children":[{"path":"login","component":"LoginComponent"},{"path":"","canActivate":["AuthGuard"],"component":"LayoutComponent","children":[{"path":"dashboard","component":"DashboardComponent"},{"path":"about","component":"AboutComponent"},{"path":"users","loadChildren":"modules/user/user.module#UserModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/modules/user/user.routes.ts","module":"UserRoutes","children":[{"path":"","component":"UserListComponent"},{"path":"add","component":"UserFormComponent","data":{"act":"add"}},{"path":"view/:id","component":"UserViewComponent"},{"path":"update/:id","component":"UserFormComponent","data":{"act":"update"}}],"kind":"module"}],"module":"UserModule"}]}]},{"path":"**","redirectTo":""}],"kind":"module"}]}