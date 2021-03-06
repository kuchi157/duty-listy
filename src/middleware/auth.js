const jwt = require("jsonwebtoken");
const User = require("../models/user");
const jwt_secret = "thingsarequitebad"; //process.env.JWT_SECRET; //While using in production
//Enter any string as JWT SECRET

const auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const decoded = jwt.verify(token, jwt_secret);
    const user = await User.findOne({
      _id: decoded._id,
      "tokens.token": token,
    });

    if (!user) {
      throw new Error();
    }
    req.token = token;
    req.user = user;
    next();
  } catch (e) {
    res.status(401).send({ error: "Please authenticate." });
  }
};

module.exports = auth;
