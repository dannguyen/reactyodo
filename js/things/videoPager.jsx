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

  app.VideoPager = React.createClass({

    render: function(){
      var videos_pouroverview = this.props.videoSelection;
      var videos = videos_pouroverview.getCurrentItems(); // TK: some kind of intermediary step

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
        <div className="row no-gutter">
            <ReactCSSTransitionGroup transitionName="videoItem">
              {videoItems}
            </ReactCSSTransitionGroup>
        </div>
      );
    }
  });
})();
