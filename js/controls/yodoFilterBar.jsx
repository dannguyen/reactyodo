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
  app.YodoFilterBar = React.createClass({
      render: function() {
        var handleFilterChange = this.props.onFilterChange;
        var selectedCat = this.props.categoryType;
        console.log("selectedCat is: " + selectedCat);
        var categoryOpts = _.collect(this.props.categories, function(catcount, catname){
//          var isChecked = filteredCats[catname] === true;

          return(
            <FilterCategoryItem
              key={"catfilter-" + catname}
              name={catname}
            />
          );
        });


        return(<div className="form-group">
          <select name="category" defaultValue={selectedCat} onChange={this.props.onFilterChange}>
            <FilterCategoryItem
              key={"catfilter-blank"}
              name=""
            />

            {categoryOpts}
          </select>
        </div>);
      }
  });

})();

