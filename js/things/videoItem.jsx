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
  app.VideoItem = React.createClass({
    getInitialState: function () {
      return { isPlaying: false };
    },

    path: function(){
      return "/video/" + this.props.video.t_id;
    },

    render: function () {
      var video = this.props.video;

      return (
        <div className={"col-sm-" + this.props.colspan}>
          <div className="video videoItem" data-category={video.category} data-duration={video.duration}>
            <a href={'#' + this.path() }>
              <div className="imgwrap"><img src={video.default_thumbnail} /></div>
              <h5 style={{display: "none"}}>{video.title}</h5>

            </a>
            <div class="meta" style={{display: "none"}}>
              <div class="metrics">
                <span className="view_count"> {numeral(video.view_count).format('0,0')} views</span>
                &nbsp;
                <span className="published_at">{ moment(video.pub_seconds + "", "X").format('l') }</span>
              </div>
              <div className="approval">
                {numeral(video.likes).format('0,0')} likes &nbsp; {numeral(video.dislikes).format('0,0')} dislikes

              </div>
            </div>
          </div>
        </div>
      );
    }
  });

})();

