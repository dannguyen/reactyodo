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

      //imgTK: <div className="imgwrap"><img src={video.default_thumbnail} /></div>
      return (
        <div className={"col-sm-" + this.props.colspan}>
          <div className="video videoItem" data-category={video.category} data-duration={video.duration}>
            <a href={'#' + this.path() }>

              <div className="imgTK"></div>
              <h5 className="title">
                {video.title} <br />
                {video.published_date} &ndash; &nbsp;
                {video.view_count}
              </h5>

            </a>
            <div className="meta" style={{display: "none"}}>
              <div className="metrics">
                <span className="view_count"> {numeral(video.view_count).format('0,0')} views</span>
                &nbsp;
                <span className="published_at">{ video.published_date }</span>
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

