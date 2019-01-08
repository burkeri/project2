require("dotenv").config();

const { Place } = require("../models");

module.exports = {
  async review(req, res) {
    try {
      const userReview = parseFloat(req.body.userReview);
      const pid = req.body.pid;

      const dbData = await Place.findOne({
        where: {
          pid: pid
        }
      });
      const numberOfRatings = parseInt(dbData.dataValues.numberOfRatings);
      const oldRating = parseFloat(dbData.dataValues.rating);
      console.log("User Review" + userReview);
      console.log(oldRating);
      const newRating =
        (oldRating * numberOfRatings + userReview) / (numberOfRatings + 1);

      console.log(newRating);
      dbData.update({
        numberOfRatings: numberOfRatings + 1,
        rating: newRating
      });

      res.send(dbData);
    } catch (err) {
      console.log(err);
    }
  }
};
