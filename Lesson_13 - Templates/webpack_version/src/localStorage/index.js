
function convertToJSON(value) {
    return JSON.stringify(value);
}

function convertFromJSON (str) {
    return JSON.parse(str);
}

export { convertToJSON, convertFromJSON };