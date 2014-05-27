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
  app.FilterCategoryItem = React.createClass({
    // getInitialState: function () {
    //   return { itemCount: 0 };
    // },

    render: function () {
      return(
        <option value={this.props.name}>
            {this.props.name}
        </option>

      );

      // return (
      //     <div className="fancy-checkbox">
      //       <label className="checkbox-inline">
      //           <input className="category" type="checkbox" name={this.props.name} onChange={this.props.onChange} checked={this.props.isActive} />
      //           {this.props.name}
      //       </label>
      //     </div>
      // );
    }
  });

})();
