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


  var YodoPlayer = app.YodoPlayer;
  var YodoFilterBar = app.YodoFilterBar;
  var YodoSortBar = app.YodoSortBar;
  var YodoPager = app.YodoPager;


  app.YodoManager = React.createClass({
    getInitialState: function(){
      return{
        categoryType: this.props.activeCategory,
        sortType: 'Most Viewed',
        pageNumber: 1,
        pageSize: 100
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


      // setup the YodoPlayer if we're viewing a video
      var activeVideo = video_coll.findVideoById(this.props.activeVideoId);
      // is a video active? set the main YodoPlayer
      var el_YodoPlayer = (
        <YodoPlayer video={activeVideo} />
      );


      var categories = video_coll.categoriesCount;
      var el_FilterBar = (
          <YodoFilterBar categories={categories} onFilterChange={this.handleFilterChange} categoryType={this.state.categoryType} />
        ), el_SortBar = (
          <YodoSortBar onChange={this.handleSortChange} sortType={this.state.sortType} />
      );

      // filter and get videos

      var vid_page = video_coll.getPage(
                                          {
                                            pageNumber: this.state.pageNumber,
                                            pageSize: this.state.pageSize,
                                            filters: { category:  [this.state.categoryType] },
                                            sortType: this.state.sortType
                                          }
                                        );

      var el_YodoPager = (<YodoPager
          videos={vid_page.getCurrentItems()}
          totalVideoCount={video_coll.totalVideoCount()}
          filteredVideoCount={video_coll.filteredVideoCount()}
          pageNumber={this.state.pageNumber}
          pageSize={this.state.pageSize}
      />);


      return (
        <div className="yodoManager">
          <section>
            {el_YodoPlayer}
          </section>

          <section>
            <div className="summary">
                {video_coll.totalVideoCount()} videos, {video_coll.filteredVideoCount()} videos visible
            </div>
            <form role="form">
              {el_SortBar}
              {el_FilterBar}
            </form>
          </section>


          <section>
            {el_YodoPager}
          </section>
        </div>
      );

    }
  });

})();

