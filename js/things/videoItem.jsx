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
      return "/video/" + this.props.key;
    },

    render: function () {
      return (
        <div className={"col-sm-" + this.props.colspan}>
          <div className="video videoItem" data-category={this.props.category} data-duration={this.props.duration}>
            <a href={'#' + this.path() }>
              <img src="//placehold.it/250x150" />
              <h5>{this.props.title}</h5>

            </a>
            <div class="meta">
              <span className="view_count"> {numeral(this.props.view_count).format('0,0')} views</span>
              &nbsp;
              <span className="published_at">{ moment(this.props.pub_seconds + "", "X").format('l') }</span>
            </div>
            <div className="approvail">
              {numeral(this.props.likes).format('0,0')} likes &nbsp; {numeral(this.props.dislikes).format('0,0')} dislikes

            </div>

          </div>
        </div>
      );
    }
  });

})();

