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


  var VideoItem = app.VideoItem;
  var CategoryItem = app.CategoryItem;

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
      var videos = this.props.videos;
      var categories = this.extractCategories(videos);
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

      return (
        <div className="videoManager">
          <FilterBar categories={categories} />
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
