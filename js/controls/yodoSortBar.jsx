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
  app.YodoSortBar = React.createClass({
      getDefaultProps: function() {
        return {
          sortType: "Most Viewed"
        };
      },

      render: function() {

        var sortMenu = (
          <RadioGroup name="sortOps" value={this.props.sortType}  onChange={this.props.onChange}>
            <div className="form-group">
              <label className="radio-inline">
                  <input name="sortOps" type="radio" value="Most Viewed" onChange={this.props.onChange} />
                  Most Viewed
              </label>
              <label className="radio-inline">
                  <input name="sortOps" type="radio" value="Newest" onChange={this.props.onChange} />
                  Newest
              </label>
            </div>
          </RadioGroup>
        );

        return sortMenu;
      }
  });

})();

