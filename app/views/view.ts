import { Negociacoes } from "../models/negociacoes";

export abstract class View<Type> {
  protected elemento: HTMLElement;

  constructor(seletor: string) {
    this.elemento = document.querySelector(seletor);
  }

  abstract template(model: Type): string;

  update(model: Type): void {
    const template = this.template(model);
    this.elemento.innerHTML = template;
  }
}
