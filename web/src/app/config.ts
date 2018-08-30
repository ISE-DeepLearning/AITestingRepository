export class Config {
  static base_url = 'http://localhost:8080';  // 居然要加http!!!不然不会算作http请求，不能跨域
  static type_title: number = 1;
  static type_author: number = 2;

  static isValid(obj: string): boolean {
    return !(obj == undefined || obj == null || obj == '');
  }
}
