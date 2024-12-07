import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: '', redirectTo: 'blog', pathMatch: 'full'},
  {
    path: '',
    loadComponent: () => import('./components/header/header.component').then(m => m.HeaderComponent),
    children: [
      {
        path: 'blog',
        loadComponent: () => import('./components/blog-search/blog-search.component').then(m => m.BlogSearchComponent), // Default path to BlogSearchComponent
      },
      { 
        path: 'blog/:id', 
        loadComponent: () => import('./components/blog-detail/blog-detail.component').then(m => m.BlogDetailComponent) 
      },
      { 
        path: 'admin',
        loadComponent: () => import('./admin/components/admin/admin.component').then(m => m.AdminComponent),
        children: [
          {path : 'dashboard',
            loadComponent: () => import('./admin/components/dashboard/dashboard.component').then(m => m.DashboardComponent)
          },
          {
            path: 'create-blog',
            loadComponent: () => import('./admin/components/create-blog/create-blog.component').then(m => m.CreateBlogComponent), // Default path to BlogSearchComponent
          },
          {
            path: 'blog-list',  
            loadComponent: () => import('./admin/components/blog-list/blog-list.component').then(m => m.BlogListComponent)
          },
          {
            path :'edit-blog/:id',
            loadComponent: () => import('./admin/components/create-blog/create-blog.component').then(m => m.CreateBlogComponent)
          },
        ]
      },
      { path: 'login', loadComponent: () => import('./auth/components/login/login.component').then(m => m.LoginComponent) },
      { path: 'signup', loadComponent: () => import('./auth/components/signup/signup.component').then(m => m.SignupComponent) },
    ],
  },
  { path: '**', loadComponent: () => import('./components/page-not-found/page-not-found.component').then(m => m.PageNotFoundComponent) },
];

