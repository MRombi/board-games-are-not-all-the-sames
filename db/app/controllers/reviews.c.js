const {selectReviewById}  = require("../models/reviews.m");

exports.getReviewById = (req, res, next) => {
  const { review_id } = req.params;
  selectReviewById(review_id).then((review) => {
    res.status(200).send({ review });
  });
}