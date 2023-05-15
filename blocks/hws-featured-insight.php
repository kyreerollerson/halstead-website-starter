<?php 
$id = $component['id'] ?: hws_generate_id();
?>

<div id="<?= $id ?>" class="hws-featured-insight hws-block--sticky-outer-500 hws-block--padded">
  <div class="hws-featured-insight__sticky hws-block--sticky hws-block--full-height">
    <div class="hws--vertical-center">
      <div class="hws-featured-insight__flex">
        <div class="hws-featured-insight__flex__left">
          <div class="hws-featured-insight__insight-box">
            <div class="hws--vertical-center-abs">
              <h2><span>Insights</span></h2>
              <a class="hws-button hws-button--white" href="#">
                View All Insights
              </a>
            </div>
          </div>
          <a href="#" class="hws-button hws-button--black">Sign Up For Updates</a>
        </div>
        <div class="hws-featured-insight__flex__right">
          <article class="hws-featured-insight__article">
            <div class="hws-featured-insight__article__top">
              <h3><a href="#">Read Article</a></h3>
              <h2>Trends to Watch in 2023</h2>
            </div>
            <div class="hws-featured-insight__article__bottom">
              
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>
</div>

<div id="<?= $id ?>-mobile"  class="hws-featured-insight-mobile hws-block--padded">
  <article class="hws-featured-insight-mobile__article">
    <div class="hws-featured-insight-mobile__article__top">
      <h3><a href="#">Read Article</a></h3>
      <h2>Trends to Watch in 2023</h2>
    </div>
    <div class="hws-featured-insight-mobile__article__bottom">
      
    </div>
    <a class="hws-button hws-button--black" href="#">
      View All Insights
    </a>
  </article>
</div>