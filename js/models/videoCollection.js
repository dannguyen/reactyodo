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

  var VideoModel = app.VideoModel;

  var NewestVideoSort = PourOver.Sort.extend({
    fn: function(x,y){
      var a = x.published_at, b = y.published_at;
        if (b < a){
          return -1;
        } else if (b > a){
          return 1;
        } else {
          return 0;
        }
    }
  });

  var MostViewedVideoSort = PourOver.Sort.extend({
    attr: "view_count",
    fn: function(x,y){
      var a = x.view_count, b = y.view_count;

        if (b < a){
          return -1;
        } else if (b > a){
          return 1;
        } else {
          return 0;
        }
    }
  });



  // arr is a collection of videos
  var VideoCollection = app.VideoCollection = function(arr){
    this.videoHash = this.processVideoData(arr || []);

    var video_array_temp = _.values(this.videoHash);

    this.resultsLength = video_array_temp.length; // a temp workaround
    this.pouroverCollection = new PourOver.Collection( video_array_temp );
    this.currentView = undefined;
    this.categoriesCount = this.extractCategories(video_array_temp);

    // set up filters
    var categories_filter = PourOver.makeExactFilter("category", _.keys(this.categoriesCount));
    this.pouroverCollection.addFilters([categories_filter]);


    // set up sorts
    var ax = new MostViewedVideoSort("Most Viewed") , ay = new NewestVideoSort("Newest");
    this.pouroverCollection.addSorts([ax, ay]);

  };




  VideoCollection.prototype.getView = function(opts){
    var pView = new PourOver.View("default_view", this.pouroverCollection, { page_size: 100 });
    if(_.isUndefined(opts)){
      pView = this.filterVideosView(pView, {})
    }else{
      pView = this.filterVideosView(pView, opts.filters)
      pView = this.sortVideosView(pView, opts.sortType)
    }
   this.currentView = pView;

   return this.currentView;
  };



  // filter_opts is a Hash thgat looks like {categories: ['Airlines', 'Hotels'], dates: [tkETC, 2012] }
  VideoCollection.prototype.filterVideosView = function(pView, filter_opts){
    var coll = pView.collection;

    if( _.isUndefined(filter_opts)      === true ||      // filteropts is undefined
        _.isEmpty(filter_opts)          === true ||      // filteropts is empty
        _.every(_.values(filter_opts), function(a){ return _.isEmpty(a); })  === true         // every array of filteropts is empty
      ){
      // return all of the items
    console.log('ALL pourover')
      // i.e. leave pView and coll alone
    }else{
      // return some items
      // modify coll with stateful query filters
    console.log('filtered pourover')

      _.each(filter_opts, function(filtersHash, filterType){
        var active_filters = [];
        _.each(filtersHash, function(fName){
          if(fName && fName !== ''){ // a blank value indicates "all"
            active_filters.push(fName);
          }
        })
        // now filter
        coll.filters[filterType].query( active_filters );
      })
    }

    return pView;
  };


  VideoCollection.prototype.sortVideosView = function(pView, sort_type){
    console.log("sort_type is: " + sort_type);
    pView.setSort(sort_type);

    return pView;
  }

  VideoCollection.prototype.findVideoById = function(uid){
    if(uid === undefined || uid === null || _.isEmpty(this.videoHash)){
      return undefined;
    }else{
      return this.videoHash[uid];
    }
  };


  VideoCollection.prototype.selectedVideoCount =  function(){
    if(_.isUndefined(this.currentView)){
      return 0;
    }else{
      return this.currentView.getCurrentItems().length;
    }

  };

  VideoCollection.prototype.totalVideoCount =  function(){
    return this.resultsLength; // TK fix later
  };



/////////////////////////////////////////////////////////////////////
  // to be deprecated soon...
      // returns a group-counted array
  VideoCollection.prototype.extractCategories = function(videos){
    return _.reduce(videos, function(hsh, video){
      var cat = video.category;
      if( _.isUndefined(hsh[cat])){ hsh[cat] = 0; }
      hsh[cat] += 1;

      return hsh
    }, {});
  };


  // returns a Hash, where key is a video.uniqueidentifier,
  // and value is a Video object
  VideoCollection.prototype.processVideoData =  function(dataArr){
    return _.reduce( dataArr, function(h, res){
      var vid = new app.VideoModel(res);
      h[vid.t_id] = vid;
      return h;
    }, {});

  };



})();
