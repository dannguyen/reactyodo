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

})();
