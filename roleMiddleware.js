module.exports = function(role) {
  return (req, res, next) => {
    if (!req.user || req.user.role !== role) {
      return res.status(403).json({ msg: "Forbidden" });
    }
    next();
  };
};