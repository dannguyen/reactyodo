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


  var VideoViewer = app.VideoViewer;
  var VideoItem = app.VideoItem;
  var VideoFilterBar = app.VideoFilterBar;


  app.VideoManager = React.createClass({
    getInitialState: function(){
      return{
        filteredCategories: {},
      };
    },

    // sets the state of Filters
    // returns nothing
    handleFilterChange: function(e){
      var catbox = e.target;
      var fCats = this.state.filteredCategories;
      fCats[catbox.name] = catbox.checked;

      this.setState({filteredCategories: fCats});
      console.log('handle filter change: ' + catbox.name + ": " + catbox.checked);
    },


    render: function () {
      var video_coll = this.props.videoCollection;
      app.VC = video_coll; // TK debugging
      // set video if we're viewing a video
      var video = video_coll.findVideoById(this.props.activeVideoId);
      // is a video active? set the main VideoViewer
        var videoViewer = (
          <VideoViewer
            video={video}
          >
          </VideoViewer>
        );

      // filter and get videos

      var videos = video_coll.getVideos( { category: this.state.filteredCategories } );
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


      var categories = video_coll.categoriesCount;
      var categoriesFilterBar = (
        <VideoFilterBar categories={categories} onFilterChange={this.handleFilterChange} filteredCategories={this.state.filteredCategories} />
      );

      return (
        <div className="videoManager">
          {videoViewer}
          {categoriesFilterBar}
          <section className="videos">
            <div className="row">
              {videoItems}
            </div>
          </section>
        </div>
      );
    }
  });

})();
