function add0(m) { return m < 10 ? '0' + m : m }
function toDate(number) {
  var time = new Date(number);
  var y = time.getFullYear();
  var m = time.getMonth() + 1;
  var d = time.getDate();
  var h = time.getHours();
  var mm = time.getMinutes();
  var s = time.getSeconds();
  return y + '-' + add0(m) + '-' + add0(d) + ' ' + add0(h) + ':' + add0(mm) + ':' + add0(s);
};

module.exports = {
  toDate: toDate
}