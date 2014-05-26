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
  var CategoryItem = app.CategoryItem;

  app.VideoFilterBar = React.createClass({

      render: function() {
        var handleFilterChange = this.props.onFilterChange;
        var filteredCats = this.props.filteredCategories;
            console.log("re-rendering videofilterbar, filteredCats is: " + filteredCats);

        var categoryMenu = _.collect(this.props.categories, function(catcount, catname){
          var isChecked = filteredCats[catname] === true;

          return(
            <CategoryItem
              key={catname}
              name={catname}
              isActive={isChecked}
              itemCount={catcount}
              onChange={handleFilterChange}
            >
            </CategoryItem>
          );
        });


        return (
            <form>
              <ul className="categoryMenu list-inline">Categories: {categoryMenu}</ul>
            </form>
        );
      }
  });

})();

