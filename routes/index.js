





// INDEX ROUTES
// =============================================================================
exports.getFrontPage = function(req, res) {      
    res.render('page/index');
};







/*//bring up the model to be built on
var Beer    = require('../apps/models/beer'); //database collection called Beer as object;
// ----------------------------------------------------
console.log('routes index');
exports.create = function(req, res) {
        
        var beer = new Beer();      // create a new instance of the Bear model
        beer.name = req.body.name;  // set the bears name (comes from the request)

        // save the bear and check for errors
        beer.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'Beer created!' });
        });
        
    };

exports.displayAll = function(req, res) {
        Beer.find(function(err, beers) {
            if (err)
                res.send(err);

            res.json(beers);
        });
    };

exports.getItem = function(req, res) {
        Beer.findOne({'name':req.params.beer_name }, function(err, beer) {
            if (err)
                res.send(err);
            res.json(beer);
        });
    };

exports.updateItem = function(req, res) {

        // use our beer model to find the beer we want  by its name
        Beer.findOne({'name':req.params.beer_name }, function(err, beer) {

            if (err)
                res.send(err);

            //form data 
            beer.name = req.body.name;  // update the beers info with a new name

            // save the beer with a new name //test with GET later the same route
            beer.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'Beer updated!' });
            });

        });
    };

exports.deleteItem = function(req, res) {
        Beer.remove({
            name: req.params.beer_name
        }, function(err, beer) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
        });
    };*/

    
console.log('index.js');
