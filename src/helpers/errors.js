export const notFound = (req, res, next) => {
  // Create a new error when not found
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

export const errorHandler = (error, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  req.log.error({
    // we are sending errors to development environment
    message: error.message,
    stack: error.stack,
  });
  res.status(statusCode);
  res.json({
    // we are not sending errors to users
    message: error.message,
    stack: process.env.NODE_ENV === "production" ? "Ooops!" : error.stack,
  });
};
