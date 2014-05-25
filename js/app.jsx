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

  var CategoryItem = app.CategoryItem;
  var VideoItem = app.VideoItem;


  var YodoApp = React.createClass({
    getInitialState: function(){
      return{
        videos: [],
        categories: ['None']
      }
    },

    getData: function(){
      var data_url = app.DEFAULT_DATA_URL;
      $.get(data_url, function(results){
        this.processVideoData(results);

      }.bind(this));
    },

    processVideoData: function(results){
      this.setState({
        videos: results.map( function(obj){
          return new app.VideoModel(obj);
        }, this)
      });

      console.log("videos loaded: " + this.state.videos.length);

      this.setState({
        categories: this.getCategories(this.state.videos)
      });
    },


    // returns a group-counted array
    getCategories: function(videos){
      return _.reduce(videos, function(hsh, video){
        var cat = video.category;
        if( _.isUndefined(hsh[cat])){ hsh[cat] = 0; }
        hsh[cat] += 1;

        return hsh
      }, {});
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
          >
          </VideoItem>
        );
      }, this);

      return(
        <div className='yodo_app'>
          <h1>Videos</h1>
          <FilterBar categories={this.state.categories} />

          <section className="videos">
            <div className="row">
              {videoItems}
            </div>
          </section>
        </div>
      );
    }




  }); // YodoApp






  var FilterBar = React.createClass({
      render: function() {
        var categoryMenu = _.collect(this.props.categories, function(catcount, catname){
          console.log(catname)
          return(
            <CategoryItem
              key={catname}
              name={catname}
              value={catname}
              itemCount={catcount}
            >
            </CategoryItem>
          );
        });


          return (
              <form>
                <ul className="categoryMenu list-inline">Hello {categoryMenu}</ul>
              </form>
          );
      }
  });




  function render(){
    React.renderComponent(
      <YodoApp />,
      document.getElementById('yodo_app_wrapper')
    );
  }


  render();
})();
