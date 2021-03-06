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

  app.DEFAULT_DATA_URL = "/data/videos-small.json"; // = "/data/videos-small.json";
  app.BIG_DATA_URL = "/data/videos.json";

  var YodoManager = app.YodoManager;
  var VideoCollection = app.VideoCollection;

  var YodoApp = React.createClass({
    getInitialState: function(){
      return{
        videoCollection: new VideoCollection(),
        data_url: app.DEFAULT_DATA_URL,
        activeVideoId: undefined,
        activeCategory: '',

        categories: []
      }
    },

    fetchVideoData: function(d_url){
      console.log("fetching url: " + d_url);

      $.get(d_url, function(results){
        console.log("results fetched: " + results.length);

        this.initVideoCollection(results);

      }.bind(this));
    },




    componentDidMount: function(){
      var that = this;

      var router = Router({
        '/'       : function() {
                      that.setState({ activeVideoId: undefined });
                    },
        '/video/:video_id'  : function(video_id){
                    that.setState({ activeVideoId: video_id });
                  },
        '/category/:category'  : function(category){
                    that.setState({ activeCategory: category}); // isn't working
                  }
      });

      router.init('/');
      that.fetchVideoData(app.DEFAULT_DATA_URL);
    },


    // sets up resultCollection
    // sets up categories
    initVideoCollection: function(results){
        var coll = new VideoCollection(results);

//        var facets = coll.pluckTODOfacets

        this.setState({videoCollection: coll });

    },


    render: function(){
      return(
        <div className='yodo_app'>
          <h1><a href="/">YodoApp</a></h1>
          <YodoManager videoCollection={this.state.videoCollection}
              activeCategory={this.state.activeCategory}
              activeVideoId={this.state.activeVideoId} />
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
