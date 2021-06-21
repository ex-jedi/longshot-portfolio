<?php include('perch/runtime.php'); ?>
<?php perch_layout('about-me-header'); ?>
<main class="main-content about-me-main-content" id="main-content">
  <?php perch_content("Page Content"); ?>
</main>
<?php perch_layout('main-footer'); ?>
<?php perch_layout('about-me-footer-end'); ?>
<!-- TODO: Remove debug -->
<?php PerchUtil::output_debug(); ?>
<!-- TODO: Validate HTML -->
