module.exports = function (data) {
  var response = { data: data };
  this.res.status(200);
  this.res.json(response);
};

