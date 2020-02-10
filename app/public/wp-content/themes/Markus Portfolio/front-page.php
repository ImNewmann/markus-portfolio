<?php get_header(); ?>
<div class="fixed-bg"></div>
<div id="fullpage">
    <section data-anchor="section1" class="section landing-page">
        <?php include ("landing-screen.php") ?>
    </section>
    <section data-anchor="section2" class="section music">
            <div class="wrapper">
                <h2 class="section__header">Music</h2>
                <?php include ("music-player.php") ?>
            </div>
    </section>
    <section data-anchor="section3" class="section videos">
        <div class="wrapper">
            <h2 class="section__header section__header--video">Video</h2>
            <?php include ("videos.php") ?>
        </div>
    </section>
    <section data-anchor="section4" class="section contact">
        <div class="wrapper wrapper--contact">
            <div class="contact__content"> 
                <h2 class="section__header section__header--contact">Get in touch</h2>
                <?php include ("contact.php") ?>
            </div> 
        </div>
        <footer><span><a href="http://www.bnewman.co.uk" target="_blank">Website created by Ben Newman</a></span></footer>
    </section>
</div>
<?php get_footer(); ?> 
