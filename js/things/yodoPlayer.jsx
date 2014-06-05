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
  app.YodoPlayer = React.createClass({
    getInitialState: function () {
      return { isPlaying: false };
    },

    render: function () {
      var video = this.props.video;
      if(video){
        return (
          <div className="yodoPlayer">
              <a name={"/video/" + video.t_id} id={"/video/" + video.t_id} />
              <div className="videoPlayback">
                <iframe width="1100" height="600" src={"//www.youtube.com/embed/" + video.t_id} frameBorder="0" allowFullScreen="true" />

              </div>
              <div className="videoInfo" display="none">
                <div className="row">
                  <div className="col-sm-9">
                    <h3 className="title">{video.title}</h3>
                    <h5 className="author">by  <a href={"//iq.skift.com/brands/" + video.brand_slug}>{video.brand_name}</a></h5>

                    <span className="published_date">{ video.published_date }</span>

                  </div>
                  <div className="col-sm-3">
                    <div className="meta">

                      <div className="view_count"> {numeral(video.view_count).format('0,0')} views</div>

                      <div className="approval">
                        <div className="likes">
                          {numeral(video.likes).format('0,0')} likes
                        </div>
                        <div className="dislikes">
                          {numeral(video.dislikes).format('0,0')} dislikes
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
          </div>
        );
      }else{
        return( <div className="yodoPlayer empty"></div>);
      }

    }
  });

})();
