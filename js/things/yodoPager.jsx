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
  var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

  app.YodoPager = React.createClass({

    render: function(){

      var videos = this.props.videos;
      var videoItems = videos.map(function(video) {
        return(
          <VideoItem
            key={"videoitem-" + video.t_id}
            video={video}
            colspan="4"
          >
          </VideoItem>
        );
      }, this);

      return(
        <div className="yodoPager">
          <div className="videoPageStatus">
            <ul className="list-unstyled list">
              <li> <strong>{this.props.filteredVideoCount}</strong> filtered out of  {this.props.totalVideoCount} total</li>
              <li> {videos.length} videos per page </li>
              <li> {this.props.pageNumber} / x(TODO calc) total pages </li>
            </ul>
          </div>
          <div className="row no-gutter">
              <ReactCSSTransitionGroup transitionName="videoItem">
                {videoItems}
              </ReactCSSTransitionGroup>
          </div>
         </div>
      );
    }
  });
})();
