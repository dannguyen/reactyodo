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
    this.category = this.sector_name = obj.sector_name;
    this.duration = this.duration_seconds = obj.duration_seconds;
    this.view_count = obj.view_count;
    this.published_at = obj.published_at;
    this.pub_seconds = obj.pub_seconds;
    this.pub_year = obj.pub_year;
    this.published_date = moment(this.pub_seconds + "", "X").format('l')

    this.likes = obj.likes;
    this.dislikes = obj.dislikes;

    this.brand_name = obj.brand_name
    this.brand_slug = obj.brand_slug

  };

})();
