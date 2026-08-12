const getHomepage = (req, res) => {
  res.send("Hello đến với homepage");
};

const getTest = (req, res) => {
  res.render("xample.ejs");
};

module.exports = {
  getHomepage,
  getTest,
};
