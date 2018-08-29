export class Config {
  static base_url = 'localhost:4200';
  static type_title: number = 1;
  static type_author: number = 2;

  static isValid(obj: string): boolean {
    return !(obj == undefined || obj == null || obj == '');
  }
}
