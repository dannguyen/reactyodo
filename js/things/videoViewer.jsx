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
  app.VideoViewer = React.createClass({
    getInitialState: function () {
      return { isPlaying: false };
    },

    render: function () {
      var is_on_display = _.isNull(this.props['data-video-id']) ? 'none' : 'block';

      return (
        <div className="videoViewer" style={{display: is_on_display}}>
            <div className="videoPlayback">
              <img src="//placehold.it/950x550" />
            </div>
            <div className="videoInfo">
              <h5>{this.props.title}</h5>
            </div>
        </div>
      );
    }
  });

})();
