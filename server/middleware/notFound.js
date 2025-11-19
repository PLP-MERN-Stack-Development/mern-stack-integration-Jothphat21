// Handle for 404 - For not Found routes
const notFound = (req, res, next) => {
  res.status(404).json({
    success: false,
    error: `Route ${req.originalUrl} not found`,
  });
};

module.exports = notFound;
