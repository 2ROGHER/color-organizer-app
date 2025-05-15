import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root', // Provide the service at the root level
  useClass: SideBarService, //
})
export class SideBarService {
  /**
   * Constructor
   */
  constructor() {}

}
