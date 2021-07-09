<!DOCTYPE html>
<html lang="en">
	<head>
	<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<link rel="stylesheet" href="/css/main.css?v=<?= filemtime($_SERVER['DOCUMENT_ROOT'].'/css/main.css');?>">
		<?php $page_css_file	=  perch_page_attribute('css', array('template' => 'bits.html'), true); ?>
		<link rel="stylesheet" href="<?php echo $page_css_file ?>?v=<?= filemtime($_SERVER['DOCUMENT_ROOT'].$page_css_file);?>">
		<!-- Typekit  -->
		<link rel="stylesheet" href="https://use.typekit.net/khl2mmy.css">
		<!-- Perch Meta -->
		<?php
		$domain        = 'https://'.$_SERVER["HTTP_HOST"];
		$mainurl           = perch_page_url(array(
													'hide-extensions'    => true,
													'hide-default-doc'   => true,
													'add-trailing-slash' => false,
													'include-domain'     => true,
											), true);
		$mainsitename      = "Longshot Photography";
		$pagetitlename = " - Longshot Photography";
		$sharing_image = '/images/default-sharing-image.png';

		PerchSystem::set_var('domain',$domain);
		PerchSystem::set_var('mainurl',$mainurl);
		PerchSystem::set_var('mainsitename',$mainsitename);
		PerchSystem::set_var('pagetitlename',$pagetitlename);
		PerchSystem::set_var('sharing_image',$sharing_image);

		perch_page_attributes(array(
			'template' => 'default.html'
		));
		?>
	</head>
		<body class="<?php perch_page_attribute('bodyClass', array('template' => 'bits.html' )); ?>">
			<div class="site-wrapper">
				<header class="legals-header main-header">
					<!-- Skip to main content link  -->
					<a class="show-on-focus"  href="#main-content">Skip to main content</a>
					<a href="/">
						<?php perch_content("Green Logo"); ?>
					</a>
					<?php perch_content("Header Content"); ?>
						<?php perch_pages_navigation(array(
								'hide-extensions' => true,
								'levels'    => 1
						)); ?>
				</header>