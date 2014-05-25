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
  var VideoItem = app.VideoItem;


  var YodoApp = React.createClass({
    getInitialState: function(){
      return{
        videos: []
      }
    },

    getData: function(){
      var data_url = app.DEFAULT_DATA_URL;
      $.get(data_url, function(results){
        console.log("results loaded: " + results.length);
        this.setState({
          videos: results.map( function(obj){
            return new app.VideoModel(obj);
          }, this)
        });


              console.log("videos loaded: " + this.state.videos.length);

      }.bind(this));
    },


    componentDidMount: function(){
      var setState = this.setState;
      var router = Router({
        '/': setState.bind(this, { })
        // '/active': setState.bind(this, {nowShowing: app.things})
      });
      router.init('/');

      this.getData();
    },


    render: function(){
      var videos = this.state.videos;
      var videoItems = videos.map(function(video) {
        return(
          <VideoItem
            key={video.t_id}
            colspan="3"
            thumbnail={video.default_thumbnail}
            title={video.title}
            category={video.category}
            duration={video.duration}
          />
        );
      }, this);

      return(
        <div className='yodo_app'>
          <h1>Videos</h1>
          <section className="videos">
            <div className="row">
              {videoItems}
            </div>
          </section>
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
