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
  app.VideoPlayer = React.createClass({
    getInitialState: function () {
      return { isPlaying: false };
    },

    render: function () {
      var video = this.props.video;
      if(video){
        return (
          <div className="videoPlayer">
              <a name={"/video/" + video.t_id} id={"/video/" + video.t_id} />
              <div className="videoPlayback">
                <iframe width="1100" height="600" src={"//www.youtube.com/embed/" + video.t_id} frameborder="0" allowfullscreen="true" />

              </div>
              <div className="videoInfo" display="none">
                <h3>{video.title} </h3>
                <h5>by  <a href={"//iq.skift.com/brands/" + video.brand_slug}>{video.brand_name}</a></h5>
              </div>
          </div>
        );
      }else{
        return( <div className="videoPlayer empty"></div>);
      }

    }
  });

})();