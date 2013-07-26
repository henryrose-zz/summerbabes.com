/**
 *  GET press page.
 **/

exports.press_route = function (req, res) {
    res.render(
        'layout',
         {
            partials : {
                part : 'press'
            }
        }

    );
};