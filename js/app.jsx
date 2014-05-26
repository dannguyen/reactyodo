/**
 * @jsx React.DOM
 */
/*jshint quotmark:false */
/*jshint white:false */
/*jshint trailing:false */
/*jshint newcap:false */
/*global React, Router*/
var app = app || {};

(function(){
  'use strict';

  app.DEFAULT_DATA_URL = "/data/videos-small.json";
  app.BIG_DATA_URL = "/data/videos.json";

  var VideoManager = app.VideoManager;

  var YodoApp = React.createClass({
    getInitialState: function(){
      return{
        videos: [],
        data_url: app.DEFAULT_DATA_URL
      }
    },

    fetchVideoData: function(d_url){
      console.log("fetching url: " + d_url);

      $.get(d_url, function(results){
        console.log("results fetched: " + results.length);
        var vids = this.processVideoData(results);

        this.setState({videos: vids });

      }.bind(this));
    },

    processVideoData: function(results){
      var x = results.map( function(obj){
          return new app.VideoModel(obj);
        }, this );

      console.log("videos processed: " + x.length);

      return x;
    },


    componentDidMount: function(){
      var setState = this.setState;
      var that = this;

      var router = Router({
        '/'       : function() {
                      that.fetchVideoData(app.DEFAULT_DATA_URL);
                    },
        '/big'    : function() {
                    that.fetchVideoData(app.BIG_DATA_URL);
                    },
        '/video/:video_id'  : function(video_id){
                    console.log("(todo: rerender, obv!) primo video: " + video_id);
                  },
      });

      router.init('/');

    },


    render: function(){
      return(
        <div className='yodo_app'>
          <h1>Videos</h1>
          <VideoManager videos={this.state.videos} />
        </div>
      );
    }




  }); // YodoApp


  function render(){
    React.renderComponent(
      <YodoApp />,
      document.getElementById('yodo_app_wrapper')
    );
  }


  render();
})();
