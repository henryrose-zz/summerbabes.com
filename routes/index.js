
/*
 * GET home page.
 */

exports.index = function(req, res){

  res.locals = {
      title: 'Summer Babes',
      next_gig : {
          venue : "Darrell's Tavern (Shorline)",
          venue_url : "http://www.darrellstavern.com/",
          date : 'Friday July 26th',
          time: '9pm',
          cover: '$5'
      }
  };

  return res.render(
      'layout',
      {
          partials : {
              part : 'index'
          }
      }
  );
};