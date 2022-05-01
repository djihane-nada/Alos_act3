const Error = require('./Error');

function ErrorHandler(err, req, res, next) {

  console.error(err);

  if (err instanceof Error) {
    res.status(err.code).json(err.message);
    return;
  }

  res.status(500).json('Une erreur s'est produit');
}

module.exports = ErrorHandler;

