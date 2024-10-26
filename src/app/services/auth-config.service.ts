import { Injectable } from '@angular/core';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';
@Injectable({
  providedIn: 'root'
})
export class AuthConfigService {

  constructor(private oauthService: OAuthService) {}
  configureAuth() {
    const authConfig: AuthConfig = {
      issuer: 'https://accounts.google.com', // OAuth provider's issuer URL
      redirectUri: window.location.origin,
      clientId: 'YOUR_GOOGLE_CLIENT_ID',
      responseType: 'token id_token',
      scope: 'openid profile email',
      strictDiscoveryDocumentValidation: false,
    };
    this.oauthService.configure(authConfig);
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }
  login() {
    this.oauthService.initImplicitFlow();
  }

  logout() {
    this.oauthService.logOut();
  }
  get isLoggedIn(): boolean {
    return this.oauthService.hasValidAccessToken();
  }
}
