/**
 * @jsx React.DOM
 */
/*jshint quotmark:false */
/*jshint white:false */
/*jshint trailing:false */
/*jshint newcap:false */


var app = app || {};
(function(){
  'use strict';

  var VideoModel = app.VideoModel;

  // arr is a collection of videos
  var VideoCollection = app.VideoCollection = function(arr){
    this.videoHash = this.processVideoData(arr || []);

    var video_array_temp = _.values(this.videoHash);
    this.pouroverCollection = new PourOver.Collection( video_array_temp );
    this.categoriesCount = this.extractCategories(video_array_temp);

    // set up filters
    var categories_filter = PourOver.makeExactFilter("category", _.keys(this.categoriesCount));
    this.pouroverCollection.addFilters([categories_filter]);
  };

  VideoCollection.prototype.videoCount =  function(){
    return this.getVideos().length;
  };

  // filter_opts is a Hash thgat looks like {categories: ['Airlines', 'Hotels'], dates: [tkETC, 2012] }
  VideoCollection.prototype.getVideos = function(filter_opts){
    var items = [], coll = this.pouroverCollection;
    var pView = new PourOver.View("default_view", coll);

    if( _.isUndefined(filter_opts)      === true ||      // filteropts is undefined
        _.isEmpty(filter_opts)          === true ||      // filteropts is empty
        _.every(_.values(filter_opts), function(a){ return _.isEmpty(a); })  === true         // every array of filteropts is empty
      ){
      // return all of the items
      // i.e. leave pView and coll alone
    }else{
      // return some items
      // modify coll with stateful query filters

      _.each(filter_opts, function(filtersHash, filterType){
        var active_filters = [];
        _.each(filtersHash, function(is_filtered, fName){
          if( is_filtered === true ) { active_filters.push(fName); }
        })
        // now filter
        coll.filters[filterType].query( active_filters );
      })
    }

    items = pView.getCurrentItems();
    console.log("pourover items: " + items.length );

    return items;
  };

  VideoCollection.prototype.findVideoById = function(uid){
    if(uid === undefined || uid === null || _.isEmpty(this.videoHash)){
      return undefined;
    }else{
      return this.videoHash[uid];
    }
  };




/////////////////////////////////////////////////////////////////////
  // to be deprecated soon...
      // returns a group-counted array
  VideoCollection.prototype.extractCategories = function(videos){
    return _.reduce(videos, function(hsh, video){
      var cat = video.category;
      if( _.isUndefined(hsh[cat])){ hsh[cat] = 0; }
      hsh[cat] += 1;

      return hsh
    }, {});
  };


  // returns a Hash, where key is a video.uniqueidentifier,
  // and value is a Video object
  VideoCollection.prototype.processVideoData =  function(dataArr){
    return _.reduce( dataArr, function(h, res){
      var vid = new app.VideoModel(res);
      h[vid.t_id] = vid;
      return h;
    }, {});

  };



})();
