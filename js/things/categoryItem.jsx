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
  app.CategoryItem = React.createClass({
    // getInitialState: function () {
    //   return { itemCount: 0 };
    // },

    render: function () {
      return (
        <li>
          <label name={this.props.name}>
            {this.props.name} ({this.props.itemCount})
            &nbsp;
          </label>
          <input className="category" type="checkbox" name={this.props.name} onChange={this.props.onChange} checked={this.props.isActive}></input>
        </li>
      );
    }
  });

})();
