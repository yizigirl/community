function timeToDate(obj) {
    
    obj=parseInt(obj);
    var time = new Date(obj);
    var year = time.getFullYear();
    var month = (time.getMonth() + 1 + '').padStart('2', '0');
    var day = (time.getDate() + '').padStart('2', '0');
    var w = time.getDay();
    var arr = ['星期日', '星期一', '星期二', '星期三', , '星期四', '星期五', '星期六']
    var d = `${year}-${month}-${day} ${arr[w]}`;
    return d;
}
export default timeToDate;