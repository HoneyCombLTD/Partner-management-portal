import { Injectable } from "@angular/core";
import { v4 as uuid } from "uuid";
import { CookieService } from "ngx-cookie-service";
import { AppConfigService } from "src/app/app-config.service";

@Injectable()
export class LoginRedirectService {
  constructor(
    private cookie: CookieService,
    private appService: AppConfigService
  ) {}

  redirect(url: string) {
    // const stateParam = uuid();
    // this.cookie.set('state', stateParam, undefined, '/');
    // window.location.href = `${this.appService.getConfig().baseUrl}v1/partnermanager/login/` + btoa(url);

    // const stateParam = uuid();
    // this.cookie.set("state", stateParam, undefined, "/");
    // window.location.href =
    //   `${this.appService.getConfig().baseUrl}${
    //     this.appService.getConfig().login
    //   }` + btoa(url);

    // const stateParam = uuid();
    // /*this.cookie.set('state', "");
    // this.cookie.set('state', stateParam, undefined, '/');*/
    // window.location.href =
    //   `${this.appService.getConfig().baseUrl}partnermanager/login/` +
    //   btoa(url) +
    //   "?state=" +
    //   stateParam;

    const stateParam = uuid();
    this.cookie.set("state", stateParam, undefined, "/");
    window.location.href =
      `${this.appService.getConfig().baseUrl}${
        this.appService.getConfig().login
      }` + btoa(url);
  }
}
