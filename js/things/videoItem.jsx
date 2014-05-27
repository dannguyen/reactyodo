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
            <div className="view_count">Views: {this.props.view_count}</div>
            <div className="published_at">{this.props.published_at}</div>
          </div>
        </div>
      );
    }
  });

})();
