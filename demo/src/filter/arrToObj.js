function arrToObj(obj) {
    if (obj[0] == "[") {
        var arr = JSON.parse(obj);
        var result = arr.join(",");
        return result;
    }

}
export default arrToObj;