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
  var FilterCategoryItem = app.FilterCategoryItem;
  app.VideoFilterBar = React.createClass({
      render: function() {
        var handleFilterChange = this.props.onFilterChange;
        var filteredCats = this.props.filteredCategories;
        var categoryMenu = _.collect(this.props.categories, function(catcount, catname){
          var isChecked = filteredCats[catname] === true;

          return(
            <FilterCategoryItem
              key={catname}
              name={catname}
              isActive={isChecked}
              itemCount={catcount}
              onChange={handleFilterChange}
            >
            </FilterCategoryItem>
          );
        });
        return(<div class="form-group">{categoryMenu}</div>);
      }
  });

})();

