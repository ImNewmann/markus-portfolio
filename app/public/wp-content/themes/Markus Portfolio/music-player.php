<?php 
    $musicPosts = new WP_Query(array(
        'post_type' => 'music',
        'posts_per_page' => -1
    ))

    ?>
    <div class="music-player">
        <div class="music-player__artwork">
            <div class="music-player__artwork-wrapper">
                <span class="play-button amplitude-play"></span>
                <span class="amplitude-time-remaining" amplitude-main-time-remaining="true"></span>
            </div>
        </div>
        <div class="music-player__track-list">
            <?php 
            $index = 0;
            while($musicPosts->have_posts()) {
                global $index;
                $musicPosts->the_post();
                if (get_field('song_link')) {
                    $songUrl = get_field('song_link');
                } ?>
                <div class="song">
                    <div amplitude-song-index="<?php echo $index ?>" class="song-wrapper amplitude-play-pause amplitude-paused" data-song-url="<?php echo $songUrl ?>">
                        <progress amplitude-song-index="<?php echo $index ?>" class="song-played-progress amplitude-song-played-progress"></progress>
                        <span class="song__name"><?php echo the_title(); ?></span>
                        <span class="song__artist">Markus Siegel</span>
                    </div>
                </div> <?php $index = $index + 1;
            } ?>
        </div>
</div>