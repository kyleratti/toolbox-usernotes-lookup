import cookie from "cookie";

export const parseCookies = () => cookie.parse(document.cookie);
export const getCookie = (name: string) => parseCookies()[name];
export const setCookie = (
  name: string,
  value: string,
  opts?: cookie.CookieSerializeOptions
) => {
  document.cookie = cookie.serialize(name, value, opts);
};
