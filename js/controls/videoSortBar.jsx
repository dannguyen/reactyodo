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
  app.VideoSortBar = React.createClass({
      getDefaultProps: function() {
        return {
          sortOps: {}
        };
      },

      render: function() {
        var handleSortChange = this.props.onChange;

        // var categoryMenu = _.collect(this.props.categories, function(catcount, catname){
        //   var isChecked = filteredCats[catname] === true;

        //   return(
        //     <FilterCategoryItem
        //       key={catname}
        //       name={catname}
        //       isActive={isChecked}
        //       itemCount={catcount}
        //       onChange={handleFilterChange}
        //     >
        //     </FilterCategoryItem>
        //   );
        // });

        var sortMenu = (
          <div class="form-group">
            <label className="radio-inline">
                <input name="sortOps" type="radio" value="Newest" selected={ this.props.sortOps["Newest"] } />
                Newest
            </label>
            <label className="radio-inline">
                <input name="sortOps" type="radio" value="Most Viewed" selected={this.props.sortOps["Most Viewed"]} />
                Most Viewed
            </label>
          </div>
        );

        return sortMenu;
      }
  });

})();

