export interface AbstractDocument {
  querySelector(selector: string): Element | null;
  querySelectorAll(selector: string): NodeListOf<Element>;
  getElementById(id: string): Element | null;
  addEventListener(event: string, callback: () => void): void;
}
