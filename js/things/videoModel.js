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

  app.VideoModel = function(obj){
    this.default_thumbnail = obj.default_thumbnail;
    this.title = obj.title;
    this.t_id = obj.t_id;
    this.duration = this.duration_seconds = obj.duration_seconds;
    this.category = ['Apples', 'Fun', 'Pets', 'Travel'][(this.duration_seconds % 4)];
  };

  // arr is a collection of videos
  app.VideoCollection = function(obj){
    this.videoHash = obj || {};


    this.videoCount = function(){
      return this.getVideos().length;
    }
    this.getVideos = function(){
      return _.values(this.videoHash);
    };

    this.findVideoById = function(uid){
      if(uid === undefined || uid === null || _.isEmpty(this.videoHash)){
        return undefined;
      }else{
        return this.videoHash[uid];
      }
    };
  }

})();
