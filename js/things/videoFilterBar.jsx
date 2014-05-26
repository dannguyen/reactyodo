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
  app.VideoFilterBar = React.createClass({
      render: function() {
        var categoryMenu = _.collect(this.props.categories, function(catcount, catname){
          return(
            <CategoryItem
              key={catname}
              name={catname}
              value={catname}
              itemCount={catcount}
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

