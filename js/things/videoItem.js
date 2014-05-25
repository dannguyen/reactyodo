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

    render: function () {
      return (
        <div className={"col-sm-" + this.props.colspan}>
          <div className="video videoItem">
            <img src="//placehold.it/250x150" />
            <h5>{this.props.title}</h5>
          </div>
        </div>
      );
    }
  });

})();
