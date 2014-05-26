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
  var VideoCollection = app.VideoCollection;

  var YodoApp = React.createClass({
    getInitialState: function(){
      return{
        videoCollection: new VideoCollection(),
        data_url: app.DEFAULT_DATA_URL,
        activeVideoId: undefined
      }
    },

    fetchVideoData: function(d_url){
      console.log("fetching url: " + d_url);

      $.get(d_url, function(results){
        console.log("results fetched: " + results.length);
        var coll = this.processVideoData(results);

        this.setState({videoCollection: coll });

      }.bind(this));
    },

    processVideoData: function(results){
      var hsh = _.reduce( results, function(h, res){
        var vid = new app.VideoModel(res);
        h[vid.t_id] = vid;

        return h;
      }, {});

      var coll = new VideoCollection(hsh);

      console.log("videos processed: " + coll.videoCount());
      return coll;
    },


    componentDidMount: function(){
      var that = this;

      var router = Router({
        '/'       : function() {
                      that.fetchVideoData(app.DEFAULT_DATA_URL);
                      that.setState({ activeVideoId: undefined });
                    },
        '/big'    : function() {
                      that.fetchVideoData(app.BIG_DATA_URL);
                      that.setState({ activeVideoId: undefined });
                    },
        '/video/:video_id'  : function(video_id){
                    that.setState({ activeVideoId: video_id });
                  },
      });

      router.init('/');

    },


    render: function(){

      return(
        <div className='yodo_app'>
          <h1><a href="/">YodoApp</a></h1>
          <VideoManager videoCollection={this.state.videoCollection} activeVideoId={this.state.activeVideoId} />
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
