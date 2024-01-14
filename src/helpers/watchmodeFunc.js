// Module for dealing with the Watchmode Api


function convertTitle(name) {
    var words = name.split(" ");
    var token = "";
    for (var i = 0; i < words.length - 1; i++) {
        if (i === 0) {
            token = words[i];
        } else {
            token = token + "%20" + words[i];
        }
    }
    return token;
}

function generateURL(name, akey, type) {
    var title = convertTitle(name);
    var url = "https://api.watchmode.com/v1/autocomplete-search/?apiKey=" + akey + "&search_value=" + title + "&search_type=" + type;
    return url;
}

export { generateURL }