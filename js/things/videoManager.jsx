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


  var VideoPlayer = app.VideoPlayer;
  var VideoFilterBar = app.VideoFilterBar;
  var VideoSortBar = app.VideoSortBar;
  var VideoPager = app.VideoPager;


  app.VideoManager = React.createClass({
    getInitialState: function(){
      return{
        categoryType: this.props.activeCategory,
        sortType: 'Most Viewed'
      };
    },

    // sets the state of Filters
    // returns nothing
    handleFilterChange: function(e){
      var catbox = e.target;
      // var fCats = this.state.filteredCategories;
      // fCats[catbox.name] = catbox.checked;

      console.log('handle filter change for ' + catbox.name + ": " + catbox.value);

      this.setState({categoryType: catbox.value });
    },

    handleSortChange: function(e){
      var catbox = e.target;
      this.setState({sortType: catbox.value});
    },

    render: function () {
      var video_coll = this.props.videoCollection;


      // setup the VideoPlayer if we're viewing a video
      var activeVideo = video_coll.findVideoById(this.props.activeVideoId);
      // is a video active? set the main VideoPlayer
      var el_VideoPlayer = (
        <VideoPlayer video={activeVideo} />
      );


      var categories = video_coll.categoriesCount;
      var el_FilterBar = (
          <VideoFilterBar categories={categories} onFilterChange={this.handleFilterChange} categoryType={this.state.categoryType} />
        ), el_SortBar = (
          <VideoSortBar onChange={this.handleSortChange} sortType={this.state.sortType} />
      );

      // filter and get videos

      var selected_videos = video_coll.getView(
                                          { filters: { category:  [this.state.categoryType] },
                                            sortType: this.state.sortType
                                          }
                                        );

      var el_VideoPager = (<VideoPager videoSelection={selected_videos} />);


      return (
        <div className="videoManager">
          <section>
            {el_VideoPlayer}
          </section>

          <section>
            <div className="summary">
                {video_coll.totalVideoCount()} videos, {video_coll.selectedVideoCount()} videos visible
            </div>
            <form role="form">
              {el_SortBar}
              {el_FilterBar}
            </form>
          </section>


          <section>
            {el_VideoPager}
          </section>
        </div>
      );

    }
  });

})();

