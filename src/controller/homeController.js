const getHomepage = (req, res) => {
  res.send("Hello đến với homepage");
};

const getTest = (req, res) => {
  res.render("xample");
};
module.exports = {
  getHomepage,
  getTest,
};
