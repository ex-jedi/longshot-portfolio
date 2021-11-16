<!DOCTYPE html>
<html lang="en">
	<head>
	<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<link rel="stylesheet" href="/css/main.css?v=<?= filemtime($_SERVER['DOCUMENT_ROOT'].'/css/main.css');?>">
		<link rel="stylesheet" href="/css/gallery.css?v=<?= filemtime($_SERVER['DOCUMENT_ROOT'].'/css/gallery.css');?>">
		<!-- Typekit  -->
		<link rel="stylesheet" href="https://use.typekit.net/khl2mmy.css">
		<!-- Perch Meta -->
		<?php
		$domain        = 'https://'.$_SERVER["HTTP_HOST"];
		$hard_gallery_domain = 'https://longshot.photo/gallery/';

		$slug = perch_gallery_album_field(perch_get('s'), 'albumSlug', true);
		$mainsitename  = "Longshot Photography";
		$pagetitlename = " - Longshot Photography";
		$sharing_image =  perch_gallery_album_images(perch_get('s'), array(
																		'template' =>'sharing_image.html',
																		'count' => 1,
																	), true);
		$gallery_title = perch_gallery_album_field(perch_get('s'), 'albumTitle', true);
		$gallery_description = perch_gallery_album_field(perch_get('s'), 'description', true);
		$twitterName = perch_gallery_album_field(perch_get('s'), 'twitterName', true);


		PerchSystem::set_var('domain',$domain);
		PerchSystem::set_var('hard_gallery_domain',$hard_gallery_domain);
		PerchSystem::set_var('mainsitename',$mainsitename);
		PerchSystem::set_var('pagetitlename',$pagetitlename);
		PerchSystem::set_var('sharing_image',$sharing_image);
		PerchSystem::set_var('gallery_title',$gallery_title);
		PerchSystem::set_var('gallery_description',$gallery_description);
		PerchSystem::set_var('slug',$slug);
		PerchSystem::set_var('twitterName',$twitterName);

		perch_page_attributes(array(
			'template' => 'gallery/gallery.html'
		));
		?>
		<!-- TODO: Add Microsoft Clarity -->
	</head>
		<body class="gallery-album-page">
			<div class="site-wrapper" itemscope itemtype="http://schema.org/LocalBusiness">
				<header class="header main-header">
					<!-- Skip to main content link  -->
					<a class="show-on-focus"  href="#main-content">Skip to main content</a>
						<?php perch_pages_navigation(array(
								'hide-extensions' => true,
								'levels'    => 1
						)); ?>
				</header>
