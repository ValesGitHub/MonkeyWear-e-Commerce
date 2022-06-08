export function getCookie(cname: string) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let cookieArray = decodedCookie.split(';');
  for(let i = 0; i <cookieArray.length; i++) {
      let cookiePart = cookieArray[i];
      while (cookiePart.charAt(0) == ' ') {
          cookiePart = cookiePart.substring(1);
      }
      if (cookiePart.indexOf(name) == 0) {
          return cookiePart.substring(name.length, cookiePart.length);
      }
  }
  return "";
}

export function setCookie(compareGender: string, changeGender: string) {
  if(!document.cookie || getCookie("gender") == compareGender) {
      document.cookie = "gender=" + changeGender + "; expires=; path=/";
  }
}
