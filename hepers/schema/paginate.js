module.exports = function (limit = 1, actualPage = 0, sort = '-created_at') {
  const skip = actualPage * limit
  const query = this.find().sort(sort).skip(skip).limit(limit);
  return query.exec();
}
