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
    var categories_filter = PourOver.makeExactFilter("category", _.values(this.categoriesCount));
    this.pouroverCollection.addFilters([categories_filter]);
  };

  VideoCollection.prototype.videoCount =  function(){
    return this.getVideos().length;
  };

  VideoCollection.prototype.getVideos = function(filter_opts){
    var cfilter;
    if(_.isUndefined(filter_opts)){
      cfilter = this.pouroverCollection.getAllItems();
    }else{
      cfilter = this.pouroverCollection.getAllItems();
    }

    return this.pouroverCollection.get(cfilter.cids);
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
