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

  var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

  var VideoViewer = app.VideoViewer;
  var VideoItem = app.VideoItem;
  var VideoFilterBar = app.VideoFilterBar;
  var VideoSortBar = app.VideoSortBar;


  app.VideoManager = React.createClass({
    getInitialState: function(){
      return{
        categoryType: '',
        sortType: 'Most Viewed'
      };
    },

    // sets the state of Filters
    // returns nothing
    handleFilterChange: function(e){
      var catbox = e.target;
      // var fCats = this.state.filteredCategories;
      // fCats[catbox.name] = catbox.checked;

      console.log('handle filter change: ' + catbox.name + ": " + catbox.value);
      console.log(catbox);

      // this.setState({categoryType: fCat });
    },

    handleSortChange: function(e){
      var catbox = e.target;
      this.setState({sortType: catbox.value});
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

      var videos = video_coll.getVideos( { filters: { category:  this.state.categoryType },
                                           sortType: this.state.sortType
                                          }
                                        );

      var videoItems = videos.map(function(video) {
        return(
          <VideoItem
            key={video.t_id}
            view_count={video.view_count}
            published_at={video.published_at}
            pub_seconds={video.pub_seconds}
            colspan="3"
            thumbnail={video.default_thumbnail}
            title={video.title}
            category={video.category}
            duration={video.duration}
            likes={video.likes}
            dislikes={video.dislikes}
          >
          </VideoItem>
        );
      }, this);


      var categories = video_coll.categoriesCount;
      var filterBar = (
        <VideoFilterBar categories={categories} onFilterChange={this.handleFilterChange} categoryType={this.state.categoryType} />
      );

      var sortBar = (
        <VideoSortBar onChange={this.handleSortChange} sortType={this.state.sortType} />
      );

      return (
        <div className="videoManager">
          <section>
            {videoViewer}
          </section>


          <section>
            <div className="summary">
                {video_coll.totalVideoCount()} videos, {video_coll.selectedVideoCount()} videos visible
            </div>
            <form role="form">
              {sortBar}
              {filterBar}
            </form>
          </section>


          <section className="videos">
            <div className="row">
                  <ReactCSSTransitionGroup transitionName="videoItem">
                    {videoItems}
                  </ReactCSSTransitionGroup>
            </div>
          </section>
        </div>
      );
    }
  });

})();

