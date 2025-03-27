export class Category {
  private _name: string;
  // private _description: string;
  // private _createdAt: string;
  // private _updatedAt: string;

  constructor(name: string, description?: string, createdAt?: string, updatedAt?: string) {
    this._name = name;
    // this._description = description;
    // this._createdAt = createdAt;
    // this._updatedAt = updatedAt;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  // get description(): string {
  //   return this._description;
  // }

  // set description(value: string) {
  //   this._description = value;
  // }

  // get createdAt(): string {
  //   return this._createdAt;
  // }

  // set createdAt(value: string) {
  //   this._createdAt = value;
  // }

  // get updatedAt(): string {
  //   return this._updatedAt;
  // }

  // set updatedAt(value: string) {
  //   this._updatedAt = value;
  // }

}
