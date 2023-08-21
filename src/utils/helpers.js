export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export function removeHyphensAndCapitalize(string) {
  return string.replace(/-/g, ' ').replace(/(^\w|\s\w)/g, m => m.toUpperCase())
}

export function oauth() {
  const url = new URL(
    "https://osu.ppy.sh/oauth/authorize"
  );

  const params = {
    "client_id": "24162",
    "redirect_uri": "http://localhost:3000",
    "response_type": "code",
    "scope": "public identify friends.read",
  };
  Object.keys(params)
    .forEach(key => url.searchParams.append(key, params[key]));

  fetch(url, {
    method: "GET",
  }).then(response => response.json());
  return;
}