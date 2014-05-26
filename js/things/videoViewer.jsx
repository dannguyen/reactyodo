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
      var video = this.props.video;
      if(video){
        return (
          <div className="videoViewer">
              <div className="videoPlayback">
                <img src="//placehold.it/950x550" />
              </div>
              <div className="videoInfo">
                <h5>{video.title} {video.t_id}</h5>
              </div>
          </div>
        );
      }else{
        return( <div className="videoViewer">TODO: What happens when video is deep-linked and no collection is loaded?</div>);
      }

    }
  });

})();
