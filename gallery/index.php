<?php include('../perch/runtime.php'); ?>
<?php perch_layout('gallery-header'); ?>
<main id="main-content" class="main-content gallery-main-content">
		<section class="gallery-index-section">
			<h2 class="visually-hidden">
				Galleries
			</h2>
		<div class="gallery-index-wrapper">
			<?php
				perch_gallery_albums(array(
						'template'=>'gallery_index_page.html',
						'image'=>true
				));
				?>
		</div>
	</section>
</main>
<?php perch_layout('main-footer'); ?>
<?php perch_layout('gallery-footer-end'); ?>
<!-- TODO: Add rise up -->

