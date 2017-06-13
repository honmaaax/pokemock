var _ = require( 'lodash' );

module.exports = examples;

// generates mock data using the given generator steps
// see generate.js for example steps
function examples() {

  return function ( req, res, next ) {

    // only generate mock data from examples if we have a schema
    if ( !res.schema ) return next();

    res.body_ = _.chain(req.swagger.operation.responses[res.status_])
      .get('examples')
      .toArray()
      .first()
      .value();

    next();

  };

}
