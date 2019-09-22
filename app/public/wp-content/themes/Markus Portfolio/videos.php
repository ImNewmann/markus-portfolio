<?php 
    $videoPosts = new WP_Query(array(
        'post_type' => 'video',
        'posts_per_page' => -1
    ));

    while ($videoPosts->have_posts()) {
        $videoPosts->the_post();
        if (get_field('video_url')) {
            $videoUrl = get_field('video_url');
            $exploded = explode('/', $videoUrl);
            $videoQuery = end($exploded);
        }
        if (get_field('video_description')) {
            $videoDesc = get_field('video_description');
        }
        if (get_field('video_maker')) {
            $videoMaker = get_field('video_maker');
        } ?>

        <div class="video">
            <div class="video__thumbnail">
                <a href="<?php echo $videoUrl ?>" 
                    data-featherlight="iframe" data-featherlight-iframe-frameborder="0" 
                    data-featherlight-iframe-allow="autoplay; encrypted-media" 
                    data-featherlight-iframe-allowfullscreen="true" 
                    data-featherlight-iframe-style="display:block;
                    border:none;
                    height:85vh;
                    width:85vw;"> 
                    <img src="<?php echo get_the_post_thumbnail_url(); ?>" alt="" />
                    <span class="play"></span> 
                    <div class="video__title">
                        <span class="video__title-text"><?php echo the_title(); ?></span>
                        <span class="overlay-line overlay-line-1"></span>
                        <span class="overlay-line overlay-line-2"></span>
                        <span class="overlay-line overlay-line-3"></span>
                        <span class="overlay-line overlay-line-4"></span>
                    </div>
                </a>
            </div>
            <div class="video-info">
                <div class="video-info__title">
                    <span><?php echo the_title(); ?></span>
                </div>
                <div class="video-info__description">
                    <p><?php echo $videoDesc ?></p>
                    <p><strong>Video Maker: </strong><?php echo $videoMaker ?></p>
                </div>
            </div>
        </div> <?php
    }
?>