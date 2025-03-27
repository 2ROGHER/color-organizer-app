import { ColorStatus } from "../enums/color-status.interface";
import { Category } from "./category.model";

// import { Category } from "./category.model";
Category
class Color {
  private _id: string;
  private _name: string;
  private _category: Category;
  private _hexValue: string;
  private _description: string;
  private _stars: number;
  private _rate: number;
  private _status: ColorStatus;
  private _craetedAt: string;
  private _updateAt: string;

  constructor(
    id: string,
    name: string,
    category: Category,
    hexValue: string,
    description: string,
    stars: number,
    rate: number,
    status: ColorStatus,
    createdAt: string,
    updatedAt: string
  ) {
    this._id = id;
    this._name = name;
    this._category = category;
    this._hexValue = hexValue;
    this._description = description;
    this._stars = stars;
    this._rate = rate;
    this._status = status;
    this._craetedAt = createdAt;
    this._updateAt = updatedAt;
  }

  get id() {
    return this._id;
  }

  set id(i: string) {
    this._id = i;
  }

  get name(): string {
    return this._name;
  }

  set name(n: string) {
    this.name = n;
  }



  get category(): Category {
    return this._category;
  }

  set category(c: Category) {
    this._category = c;
  }

  get hexValue(): string {
    return this._hexValue;
  }

  set hexValue(h: string) {
    this._hexValue = h;
  }

  get description(): string {
    return this._description;
  }

  set description(d: string) {
    this._description = d;
  }

  get stars(): number {
    return this._stars;
  }

  set stars(s: number) {
    this._stars = s;
  }

  get rate(): number {
    return this._rate;
  }

  set rate(r: number) {
    this._rate = r;
  }

  get status() {
    return this._status;
  }

  set status(s: ColorStatus) {
    this._status = s;
  }

  get createdAt(): string {
    return this._craetedAt;
  }

  set createdAt(c: string) {
    this._craetedAt = c;
  }

  get updatedAt(): string {
    return this._updateAt;
  }

  set updatedAt(u: string) {
    this._updateAt = u;
  }
}

export default Color;
