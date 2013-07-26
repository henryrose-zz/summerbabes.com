
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render(
      'index',
      {
          title: 'Summer Babes',
          next_gig : {
              venue : 'Darells',
              date : 'Friday July 26th',
              time: '9pm',
              cover: '$5'
          }
      }
  );
};