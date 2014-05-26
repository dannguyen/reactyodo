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
  var CategoryItem = app.CategoryItem;

  var FilterBar = React.createClass({
      render: function() {
        var categoryMenu = _.collect(this.props.categories, function(catcount, catname){
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




  app.VideoManager = React.createClass({

    // returns a group-counted array
    extractCategories: function(videos){
      return _.reduce(videos, function(hsh, video){
        var cat = video.category;
        if( _.isUndefined(hsh[cat])){ hsh[cat] = 0; }
        hsh[cat] += 1;

        return hsh
      }, {});
    },

    render: function () {

      var video_coll = this.props.videoCollection;
      var video = video_coll.findVideoById(this.props.activeVideoId);
      // is a video active? set the main VideoViewer
        var videoViewer = (
          <VideoViewer
            video={video}
          >
          </VideoViewer>
        );

      var videos = this.props.videoCollection.getVideos();
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


      var categories = this.extractCategories(videos);
      var categoriesFilter = (<FilterBar categories={categories} />);


      return (
        <div className="videoManager">
          {videoViewer}
          {categoriesFilter}
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
