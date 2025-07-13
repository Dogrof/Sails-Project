/**
 * StoriesController
 *
 * @description :: Server-side logic for managing stories
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  home: function(req, res){
    Stories.find({limit:10}).exec(function(err, stories){
      if(err){
        res.send(500, {error: 'Database Error'});
      }
      res.view('homepage', {stories: stories});
    });
  },
  getStories:function(req, res){
        const LIMIT = req.query.limit ? Number(req.query.limit) : 10;
        const OFFSET = req.query.offset ? Number(req.query.offset) : 0;
        Stories.find({
          skip: OFFSET,
          limit: LIMIT,
        }).exec(function(err, stories){
            if(err){
                res.send(500, {error: 'Database Error'});
            }
            res.json(stories);
        });
    },

};



