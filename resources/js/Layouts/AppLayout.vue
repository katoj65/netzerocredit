<template>
<div class="nk-body  npc-general has-sidebar no-touch nk-nio-theme as-mobile">
<div class="nk-app-root">
<!-- main @s -->
<div class="nk-main">
<!-- sidebar @s -->
<div class="nk-sidebar nk-sidebar-fixed nk-sidebar-mobile" data-content="sidebarMenu">
<div class="nk-sidebar-element nk-sidebar-head border-0">
<div class="nk-menu-trigger">
<a href="#" class="nk-nav-toggle nk-quick-nav-icon d-xl-none" data-target="sidebarMenu"><em class="icon ni ni-arrow-left"></em></a>
<a href="#" class="nk-nav-compact nk-quick-nav-icon d-none d-xl-inline-flex" data-target="sidebarMenu"><em class="icon ni ni-menu"></em></a>
</div>
<div class="nk-sidebar-brand border-0">
<a href="html/index.html" class="logo-link nk-sidebar-logo" style="padding:5px;margin-top:10px;">
<img class="logo-light logo-img" :src="logo" srcset="" alt="logo">
<img class="logo-dark logo-img" :src="logo" srcset="">
</a>
</div>
</div><!-- .nk-sidebar-element -->












<div class="nk-sidebar-element nk-sidebar-body">
<div class="nk-sidebar-content">
<div class="nk-sidebar-menu simplebar-scrollable-y" data-simplebar="init"><div class="simplebar-wrapper" style="margin: -24px 0px -48px;"><div class="simplebar-height-auto-observer-wrapper"><div class="simplebar-height-auto-observer"></div></div><div class="simplebar-mask"><div class="simplebar-offset" style="right: 0px; bottom: 0px;"><div class="simplebar-content-wrapper" tabindex="0" role="region" aria-label="scrollable content" style="height: 100%; overflow: hidden scroll;"><div class="simplebar-content" style="padding: 24px 0px 48px;">
<ul class="nk-menu">
<li class="nk-menu-heading">
<h6 class="overline-title text-primary-alt">Use-Case Preview</h6>
</li><!-- .nk-menu-item -->
<li class="nk-menu-item">
<a href="html/crm/index.html" class="nk-menu-link">
<span class="nk-menu-icon"><em class="icon ni ni-user-list"></em></span>
<span class="nk-menu-text">CRM Panel</span><span class="nk-menu-badge">HOT</span>
</a>
</li><!-- .nk-menu-item -->
<li class="nk-menu-item">
<a href="html/hotel/index.html" class="nk-menu-link">
<span class="nk-menu-icon"><em class="icon ni ni-building"></em></span>
<span class="nk-menu-text">Hotel Management</span><span class="nk-menu-badge">HOT</span>
</a>
</li><!-- .nk-menu-item -->
<li class="nk-menu-heading">
<h6 class="overline-title text-primary-alt">Dashboards</h6>
</li><!-- .nk-menu-item -->
<li class="nk-menu-item">
<a href="html/index.html" class="nk-menu-link">
<span class="nk-menu-icon"><em class="icon ni ni-dashlite"></em></span>
<span class="nk-menu-text">Default Dashboard</span>
</a>
</li><!-- .nk-menu-item -->
<li class="nk-menu-item">
<a href="html/index-crypto.html" class="nk-menu-link">
<span class="nk-menu-icon"><em class="icon ni ni-bitcoin-cash"></em></span>
<span class="nk-menu-text">Crypto Dashboard</span>
</a>
</li><!-- .nk-menu-item -->
<li class="nk-menu-item">
<a href="html/index-analytics.html" class="nk-menu-link">
<span class="nk-menu-icon"><em class="icon ni ni-growth"></em></span>
<span class="nk-menu-text">Analytics Dashboard</span>
</a>
</li><!-- .nk-menu-item -->
<li class="nk-menu-item">
<a href="html/index-invest.html" class="nk-menu-link">
<span class="nk-menu-icon"><em class="icon ni ni-coins"></em></span>
<span class="nk-menu-text">Invest Dashboard</span>
</a>
</li><!-- .nk-menu-item -->
<li class="nk-menu-heading">
<h6 class="overline-title text-primary-alt">Pre-Built Pages</h6>
</li><!-- .nk-menu-heading -->
<li class="nk-menu-item has-sub">
<a href="#" class="nk-menu-link nk-menu-toggle">
<span class="nk-menu-icon"><em class="icon ni ni-tile-thumb"></em></span>
<span class="nk-menu-text">Projects</span>
</a>
<ul class="nk-menu-sub">
<li class="nk-menu-item">
<a href="html/project-card.html" class="nk-menu-link"><span class="nk-menu-text">Project Cards</span></a>
</li>
<li class="nk-menu-item">
<a href="html/project-list.html" class="nk-menu-link"><span class="nk-menu-text">Project List</span></a>
</li>
</ul><!-- .nk-menu-sub -->
</li><!-- .nk-menu-item -->
<li class="nk-menu-item has-sub">
<a href="#" class="nk-menu-link nk-menu-toggle">
<span class="nk-menu-icon"><em class="icon ni ni-users"></em></span>
<span class="nk-menu-text">User Manage</span>
</a>
<ul class="nk-menu-sub">
<li class="nk-menu-item">
<a href="html/user-list-regular.html" class="nk-menu-link"><span class="nk-menu-text">User List - Regular</span></a>
</li>
<li class="nk-menu-item">
<a href="html/user-list-compact.html" class="nk-menu-link"><span class="nk-menu-text">User List - Compact</span></a>
</li>
<li class="nk-menu-item">
<a href="html/user-details-regular.html" class="nk-menu-link"><span class="nk-menu-text">User Details - Regular</span></a>
</li>
<li class="nk-menu-item">
<a href="html/user-profile-regular.html" class="nk-menu-link"><span class="nk-menu-text">User Profile - Regular</span></a>
</li>
<li class="nk-menu-item">
<a href="html/user-card.html" class="nk-menu-link"><span class="nk-menu-text">User Contact - Card</span></a>
</li>
</ul><!-- .nk-menu-sub -->
</li><!-- .nk-menu-item -->
<li class="nk-menu-item has-sub">
<a href="#" class="nk-menu-link nk-menu-toggle">
<span class="nk-menu-icon"><em class="icon ni ni-user-list"></em></span>
<span class="nk-menu-text">Customers</span>
</a>
<ul class="nk-menu-sub">
<li class="nk-menu-item">
<a href="html/customer-list.html" class="nk-menu-link"><span class="nk-menu-text">Customer List</span></a>
</li>
<li class="nk-menu-item">
<a href="html/customer-details.html" class="nk-menu-link"><span class="nk-menu-text">Customer Details</span></a>
</li>
</ul><!-- .nk-menu-sub -->
</li><!-- .nk-menu-item -->
<li class="nk-menu-item has-sub">
<a href="#" class="nk-menu-link nk-menu-toggle">
<span class="nk-menu-icon"><em class="icon ni ni-file-docs"></em></span>
<span class="nk-menu-text">AML / KYCs</span>
</a>
<ul class="nk-menu-sub">
<li class="nk-menu-item">
<a href="html/kyc-list-regular.html" class="nk-menu-link"><span class="nk-menu-text">KYC List - Regular</span></a>
</li>
<li class="nk-menu-item">
<a href="html/kyc-details-regular.html" class="nk-menu-link"><span class="nk-menu-text">KYC Details - Regular</span></a>
</li>
</ul><!-- .nk-menu-sub -->
</li><!-- .nk-menu-item -->
<li class="nk-menu-item has-sub">
<a href="#" class="nk-menu-link nk-menu-toggle">
<span class="nk-menu-icon"><em class="icon ni ni-tranx"></em></span>
<span class="nk-menu-text">Transactions</span>
</a>
<ul class="nk-menu-sub">
<li class="nk-menu-item">
<a href="html/transaction-basic.html" class="nk-menu-link"><span class="nk-menu-text">Tranx List - Basic</span></a>
</li>
<li class="nk-menu-item">
<a href="html/transaction-crypto.html" class="nk-menu-link"><span class="nk-menu-text">Tranx List - Crypto</span></a>
</li>
</ul><!-- .nk-menu-sub -->
</li><!-- .nk-menu-item -->
<li class="nk-menu-item has-sub">
<a href="#" class="nk-menu-link nk-menu-toggle">
<span class="nk-menu-icon"><em class="icon ni ni-grid-alt"></em></span>
<span class="nk-menu-text">Applications</span>
</a>
<ul class="nk-menu-sub">
<li class="nk-menu-item">
<a href="html/apps-messages.html" class="nk-menu-link"><span class="nk-menu-text">Messages</span></a>
</li>
<li class="nk-menu-item">
<a href="html/apps-inbox.html" class="nk-menu-link"><span class="nk-menu-text">Inbox / Mail</span></a>
</li>
<li class="nk-menu-item">
<a href="html/apps-file-manager.html" class="nk-menu-link"><span class="nk-menu-text">File Manager</span></a>
</li>
<li class="nk-menu-item">
<a href="html/apps-chats.html" class="nk-menu-link"><span class="nk-menu-text">Chats / Messenger</span></a>
</li>
<li class="nk-menu-item">
<a href="html/apps-calendar.html" class="nk-menu-link"><span class="nk-menu-text">Calendar</span></a>
</li>
<li class="nk-menu-item">
<a href="html/apps-kanban.html" class="nk-menu-link"><span class="nk-menu-text">Kanban Board</span></a>
</li>
</ul><!-- .nk-menu-sub -->
</li><!-- .nk-menu-item -->
<li class="nk-menu-item has-sub">
<a href="#" class="nk-menu-link nk-menu-toggle">
<span class="nk-menu-icon"><em class="icon ni ni-file-docs"></em></span>
<span class="nk-menu-text">Invoice</span>
</a>
<ul class="nk-menu-sub">
<li class="nk-menu-item">
<a href="html/invoice-list.html" class="nk-menu-link"><span class="nk-menu-text">Invoice List</span></a>
</li>
<li class="nk-menu-item">
<a href="html/invoice-details.html" class="nk-menu-link"><span class="nk-menu-text">Invoice Details</span></a>
</li>
</ul><!-- .nk-menu-sub -->
</li><!-- .nk-menu-item -->
<li class="nk-menu-item has-sub">
<a href="#" class="nk-menu-link nk-menu-toggle">
<span class="nk-menu-icon"><em class="icon ni ni-card-view"></em></span>
<span class="nk-menu-text">Products</span>
</a>
<ul class="nk-menu-sub">
<li class="nk-menu-item">
<a href="html/product-list.html" class="nk-menu-link"><span class="nk-menu-text">Product List</span></a>
</li>
<li class="nk-menu-item">
<a href="html/product-card.html" class="nk-menu-link"><span class="nk-menu-text">Product Card</span></a>
</li>
<li class="nk-menu-item">
<a href="html/product-details.html" class="nk-menu-link"><span class="nk-menu-text">Product Details</span></a>
</li>
</ul><!-- .nk-menu-sub -->
</li><!-- .nk-menu-item -->
<li class="nk-menu-item">
<a href="html/pricing-table.html" class="nk-menu-link">
<span class="nk-menu-icon"><em class="icon ni ni-view-col"></em></span>
<span class="nk-menu-text">Pricing Table</span>
</a>
</li><!-- .nk-menu-item -->
<li class="nk-menu-item">
<a href="html/gallery.html" class="nk-menu-link">
<span class="nk-menu-icon"><em class="icon ni ni-img"></em></span>
<span class="nk-menu-text">Image Gallery</span>
</a>
</li><!-- .nk-menu-item -->
<li class="nk-menu-heading">
<h6 class="overline-title text-primary-alt">Misc Pages</h6>
</li><!-- .nk-menu-heading -->
<li class="nk-menu-item has-sub">
<a href="#" class="nk-menu-link nk-menu-toggle">
<span class="nk-menu-icon"><em class="icon ni ni-signin"></em></span>
<span class="nk-menu-text">Auth Pages</span>
</a>
<ul class="nk-menu-sub">
<li class="nk-menu-item">
<a href="html/pages/auths/auth-login.html" class="nk-menu-link" target="_blank"><span class="nk-menu-text">Login / Signin</span></a>
</li>
<li class="nk-menu-item">
<a href="html/pages/auths/auth-register.html" class="nk-menu-link" target="_blank"><span class="nk-menu-text">Register / Signup</span></a>
</li>
<li class="nk-menu-item">
<a href="html/pages/auths/auth-reset.html" class="nk-menu-link" target="_blank"><span class="nk-menu-text">Forgot Password</span></a>
</li>
<li class="nk-menu-item">
<a href="html/pages/auths/auth-success.html" class="nk-menu-link" target="_blank"><span class="nk-menu-text">Success / Confirm</span></a>
</li>
<li class="nk-menu-item">
<a href="#" class="nk-menu-link nk-menu-toggle"><span class="nk-menu-text">Classic Version - v2</span></a>
<ul class="nk-menu-sub">
<li class="nk-menu-item">
<a href="html/pages/auths/auth-login-v2.html" class="nk-menu-link" target="_blank"><span class="nk-menu-text">Login / Signin</span></a>
</li>
<li class="nk-menu-item">
<a href="html/pages/auths/auth-register-v2.html" class="nk-menu-link" target="_blank"><span class="nk-menu-text">Register / Signup</span></a>
</li>
<li class="nk-menu-item">
<a href="html/pages/auths/auth-reset-v2.html" class="nk-menu-link" target="_blank"><span class="nk-menu-text">Forgot Password</span></a>
</li>
<li class="nk-menu-item">
<a href="html/pages/auths/auth-success-v2.html" class="nk-menu-link" target="_blank"><span class="nk-menu-text">Success / Confirm</span></a>
</li>
</ul>
</li>
<li class="nk-menu-item">
<a href="#" class="nk-menu-link nk-menu-toggle"><span class="nk-menu-text">No Slider Version - v3</span></a>
<ul class="nk-menu-sub">
<li class="nk-menu-item">
<a href="html/pages/auths/auth-login-v3.html" class="nk-menu-link" target="_blank"><span class="nk-menu-text">Login / Signin</span></a>
</li>
<li class="nk-menu-item">
<a href="html/pages/auths/auth-register-v3.html" class="nk-menu-link" target="_blank"><span class="nk-menu-text">Register / Signup</span></a>
</li>
<li class="nk-menu-item">
<a href="html/pages/auths/auth-reset-v3.html" class="nk-menu-link" target="_blank"><span class="nk-menu-text">Forgot Password</span></a>
</li>
<li class="nk-menu-item">
<a href="html/pages/auths/auth-success-v3.html" class="nk-menu-link" target="_blank"><span class="nk-menu-text">Success / Confirm</span></a>
</li>
</ul>
</li>
</ul><!-- .nk-menu-sub -->
</li><!-- .nk-menu-item -->
<li class="nk-menu-item has-sub">
<a href="#" class="nk-menu-link nk-menu-toggle">
<span class="nk-menu-icon"><em class="icon ni ni-files"></em></span>
<span class="nk-menu-text">Error Pages</span>
</a>
<ul class="nk-menu-sub">
<li class="nk-menu-item">
<a href="html/pages/errors/404-classic.html" target="_blank" class="nk-menu-link"><span class="nk-menu-text">404 Classic</span></a>
</li>
<li class="nk-menu-item">
<a href="html/pages/errors/504-classic.html" target="_blank" class="nk-menu-link"><span class="nk-menu-text">504 Classic</span></a>
</li>
<li class="nk-menu-item">
<a href="html/pages/errors/404-s1.html" target="_blank" class="nk-menu-link"><span class="nk-menu-text">404 Modern</span></a>
</li>
<li class="nk-menu-item">
<a href="html/pages/errors/504-s1.html" target="_blank" class="nk-menu-link"><span class="nk-menu-text">504 Modern</span></a>
</li>
</ul><!-- .nk-menu-sub -->
</li><!-- .nk-menu-item -->
<li class="nk-menu-item has-sub active current-page">
<a href="#" class="nk-menu-link nk-menu-toggle">
<span class="nk-menu-icon"><em class="icon ni ni-files"></em></span>
<span class="nk-menu-text">Other Pages</span>
</a>
<ul class="nk-menu-sub" style="display: block;">
<li class="nk-menu-item active current-page">
<a href="html/_blank.html" class="nk-menu-link"><span class="nk-menu-text">Blank / Startup</span></a>
</li>
<li class="nk-menu-item">
<a href="html/pages/faqs.html" class="nk-menu-link"><span class="nk-menu-text">Faqs / Help</span></a>
</li>
<li class="nk-menu-item">
<a href="html/pages/terms-policy.html" class="nk-menu-link"><span class="nk-menu-text">Terms / Policy</span></a>
</li>
<li class="nk-menu-item">
<a href="html/pages/regular-v1.html" class="nk-menu-link"><span class="nk-menu-text">Regular Page - v1</span></a>
</li>
<li class="nk-menu-item">
<a href="html/pages/regular-v2.html" class="nk-menu-link"><span class="nk-menu-text">Regular Page - v2</span></a>
</li>
</ul><!-- .nk-menu-sub -->
</li><!-- .nk-menu-item -->
<li class="nk-menu-heading">
<h6 class="overline-title text-primary-alt">Components</h6>
</li><!-- .nk-menu-heading -->
<li class="nk-menu-item has-sub">
<a href="#" class="nk-menu-link nk-menu-toggle">
<span class="nk-menu-icon"><em class="icon ni ni-layers"></em></span>
<span class="nk-menu-text">Ui Elements</span>
</a>
<ul class="nk-menu-sub">
<li class="nk-menu-item">
<a href="html/components/elements/alerts.html" class="nk-menu-link"><span class="nk-menu-text">Alerts</span></a>
</li>
<li class="nk-menu-item">
<a href="html/components/elements/accordions.html" class="nk-menu-link"><span class="nk-menu-text">Accordions</span></a>
</li>
<li class="nk-menu-item">
<a href="html/components/elements/avatar.html" class="nk-menu-link"><span class="nk-menu-text">Avatar</span></a>
</li>
<li class="nk-menu-item">
<a href="html/components/elements/badges.html" class="nk-menu-link"><span class="nk-menu-text">Badges</span></a>
</li>
<li class="nk-menu-item">
<a href="html/components/elements/buttons.html" class="nk-menu-link"><span class="nk-menu-text">Buttons</span></a>
</li>
<li class="nk-menu-item">
<a href="html/components/elements/buttons-group.html" class="nk-menu-link"><span class="nk-menu-text">Button Group</span></a>
</li>
<li class="nk-menu-item">
<a href="html/components/elements/breadcrumb.html" class="nk-menu-link"><span class="nk-menu-text">Breadcrumb</span></a>
</li>
<li class="nk-menu-item">
<a href="html/components/elements/cards.html" class="nk-menu-link"><span class="nk-menu-text">Cards</span></a>
</li>
<li class="nk-menu-item">
<a href="html/components/elements/carousel.html" class="nk-menu-link"><span class="nk-menu-text">Carousel</span></a>
</li>
<li class="nk-menu-item">
<a href="html/components/elements/list-dropdown.html" class="nk-menu-link"><span class="nk-menu-text">List Dropdown</span></a>
</li>
<li class="nk-menu-item">
<a href="html/components/elements/modals.html" class="nk-menu-link"><span class="nk-menu-text">Modals</span></a>
</li>
<li class="nk-menu-item">
<a href="html/components/elements/pagination.html" class="nk-menu-link"><span class="nk-menu-text">Pagination</span></a>
</li>
<li class="nk-menu-item">
<a href="html/components/elements/popover.html" class="nk-menu-link"><span class="nk-menu-text">Popovers</span></a>
</li>
<li class="nk-menu-item">
<a href="html/components/elements/progress.html" class="nk-menu-link"><span class="nk-menu-text">Progress</span></a>
</li>
<li class="nk-menu-item">
<a href="html/components/elements/preloader.html" class="nk-menu-link"><span class="nk-menu-text">Preloader</span> <span class="nk-menu-badge">New</span></a>
</li>
<li class="nk-menu-item">
<a href="html/components/elements/placeholders.html" class="nk-menu-link"><span class="nk-menu-text">Placeholders</span> <span class="nk-menu-badge">New</span></a>
</li>
<li class="nk-menu-item">
<a href="html/components/elements/spinner.html" class="nk-menu-link"><span class="nk-menu-text">Spinner</span></a>
</li>
<li class="nk-menu-item">
<a href="html/components/elements/tabs.html" class="nk-menu-link"><span class="nk-menu-text">Tabs</span></a>
</li>
<li class="nk-menu-item">
<a href="html/components/elements/toast.html" class="nk-menu-link"><span class="nk-menu-text">Toasts</span></a>
</li>
<li class="nk-menu-item">
<a href="html/components/elements/tooltip.html" class="nk-menu-link"><span class="nk-menu-text">Tooltip</span></a>
</li>
<li class="nk-menu-item">
<a href="html/components/elements/typography.html" class="nk-menu-link"><span class="nk-menu-text">Typography</span></a>
</li>
<li class="nk-menu-item">
<a href="#" class="nk-menu-link nk-menu-toggle"><span class="nk-menu-text">Utilities</span></a>
<ul class="nk-menu-sub">
<li class="nk-menu-item"><a href="html/components/elements/util-border.html" class="nk-menu-link"><span class="nk-menu-text">Border</span></a></li>
<li class="nk-menu-item"><a href="html/components/elements/util-colors.html" class="nk-menu-link"><span class="nk-menu-text">Colors</span></a></li>
<li class="nk-menu-item"><a href="html/components/elements/util-display.html" class="nk-menu-link"><span class="nk-menu-text">Display</span></a></li>
<li class="nk-menu-item"><a href="html/components/elements/util-embeded.html" class="nk-menu-link"><span class="nk-menu-text">Embeded</span></a></li>
<li class="nk-menu-item"><a href="html/components/elements/util-flex.html" class="nk-menu-link"><span class="nk-menu-text">Flex</span></a></li>
<li class="nk-menu-item"><a href="html/components/elements/util-text.html" class="nk-menu-link"><span class="nk-menu-text">Text</span></a></li>
<li class="nk-menu-item"><a href="html/components/elements/util-sizing.html" class="nk-menu-link"><span class="nk-menu-text">Sizing</span></a></li>
<li class="nk-menu-item"><a href="html/components/elements/util-spacing.html" class="nk-menu-link"><span class="nk-menu-text">Spacing</span></a></li>
<li class="nk-menu-item"><a href="html/components/elements/util-others.html" class="nk-menu-link"><span class="nk-menu-text">Others</span></a></li>
</ul><!-- .nk-menu-sub -->
</li>
</ul><!-- .nk-menu-sub -->
</li><!-- .nk-menu-item -->
<li class="nk-menu-item has-sub">
<a href="#" class="nk-menu-link nk-menu-toggle">
<span class="nk-menu-icon"><em class="icon ni ni-dot-box"></em></span>
<span class="nk-menu-text">Crafted Icons</span>
</a>
<ul class="nk-menu-sub">
<li class="nk-menu-item">
<a href="html/components/misc/svg-icons.html" class="nk-menu-link">
<span class="nk-menu-text">SVG Icon - Exclusive</span>
</a>
</li>
<li class="nk-menu-item">
<a href="html/components/misc/nioicon.html" class="nk-menu-link">
<span class="nk-menu-text">Nioicon - HandCrafted</span>
</a>
</li>
</ul><!-- .nk-menu-sub -->
</li><!-- .nk-menu-item -->
<li class="nk-menu-item">
<a href="html/components/misc/icons.html" class="nk-menu-link">
<span class="nk-menu-icon"><em class="icon ni ni-menu-circled"></em></span>
<span class="nk-menu-text">Icon Libraries</span>
</a>
</li><!-- .nk-menu-item -->
<li class="nk-menu-item has-sub">
<a href="#" class="nk-menu-link nk-menu-toggle">
<span class="nk-menu-icon"><em class="icon ni ni-table-view"></em></span>
<span class="nk-menu-text">Tables</span>
</a>
<ul class="nk-menu-sub">
<li class="nk-menu-item">
<a href="html/components/tables/table-basic.html" class="nk-menu-link"><span class="nk-menu-text">Basic Tables</span></a>
</li>
<li class="nk-menu-item">
<a href="html/components/tables/table-special.html" class="nk-menu-link"><span class="nk-menu-text">Special Tables</span></a>
</li>
<li class="nk-menu-item">
<a href="html/components/tables/table-datatable.html" class="nk-menu-link"><span class="nk-menu-text">DataTables</span></a>
</li>
</ul><!-- .nk-menu-sub -->
</li><!-- .nk-menu-item -->
<li class="nk-menu-item has-sub">
<a href="#" class="nk-menu-link nk-menu-toggle">
<span class="nk-menu-icon"><em class="icon ni ni-card-view"></em></span>
<span class="nk-menu-text">Forms</span>
</a>
<ul class="nk-menu-sub">
<li class="nk-menu-item">
<a href="html/components/forms/form-elements.html" class="nk-menu-link"><span class="nk-menu-text">Form Elements</span></a>
</li>
<li class="nk-menu-item">
<a href="html/components/forms/checkbox-radio.html" class="nk-menu-link"><span class="nk-menu-text">Checkbox Radio</span></a>
</li>
<li class="nk-menu-item">
<a href="html/components/forms/advanced-controls.html" class="nk-menu-link"><span class="nk-menu-text">Advanced Controls</span></a>
</li>
<li class="nk-menu-item">
<a href="html/components/forms/input-group.html" class="nk-menu-link"><span class="nk-menu-text">Input Group</span></a>
</li>
<li class="nk-menu-item">
<a href="html/components/forms/form-upload.html" class="nk-menu-link"><span class="nk-menu-text">Form Upload</span></a>
</li>
<li class="nk-menu-item">
<a href="html/components/forms/datetime-picker.html" class="nk-menu-link"><span class="nk-menu-text">Date &amp; Time Picker</span></a>
</li>
<li class="nk-menu-item">
<a href="html/components/forms/number-spinner.html" class="nk-menu-link"><span class="nk-menu-text">Number Spinner</span></a>
</li>
<li class="nk-menu-item">
<a href="html/components/forms/nouislider.html" class="nk-menu-link"><span class="nk-menu-text">noUiSlider</span></a>
</li>
<li class="nk-menu-item">
<a href="html/components/forms/form-layouts.html" class="nk-menu-link"><span class="nk-menu-text">Form Layouts</span></a>
</li>
<li class="nk-menu-item">
<a href="html/components/forms/form-validation.html" class="nk-menu-link"><span class="nk-menu-text">Form Validation</span></a>
</li>
<li class="nk-menu-item">
<a href="#" class="nk-menu-link nk-menu-toggle"><span class="nk-menu-text">Wizard</span></a>
<ul class="nk-menu-sub">
<li class="nk-menu-item"><a href="html/components/forms/form-wizard.html" class="nk-menu-link"><span class="nk-menu-text">Basic Demo</span></a></li>
<li class="nk-menu-item"><a href="html/components/forms/wizard/create-project.html" class="nk-menu-link"><span class="nk-menu-text">Create Project</span></a></li>
<li class="nk-menu-item"><a href="html/components/forms/wizard/create-profile.html" class="nk-menu-link"><span class="nk-menu-text">Create Profile</span></a></li>
<li class="nk-menu-item"><a href="html/components/forms/wizard/two-factor-auth.html" class="nk-menu-link"><span class="nk-menu-text">Two Factor Auth</span></a></li>
<li class="nk-menu-item"><a target="_blank" href="html/components/forms/wizard/survey-v1.html" class="nk-menu-link"><span class="nk-menu-text">Survey</span></a></li>
<li class="nk-menu-item"><a target="_blank" href="html/components/forms/wizard/survey-v2.html" class="nk-menu-link"><span class="nk-menu-text">Survey v2</span></a></li>
</ul><!-- .nk-menu-sub -->
</li>
<li class="nk-menu-item">
<a href="#" class="nk-menu-link nk-menu-toggle"><span class="nk-menu-text">Rich Editor</span></a>
<ul class="nk-menu-sub">
<li class="nk-menu-item"><a href="html/components/forms/form-summernote.html" class="nk-menu-link"><span class="nk-menu-text">Summernote</span></a></li>
<li class="nk-menu-item"><a href="html/components/forms/form-quill.html" class="nk-menu-link"><span class="nk-menu-text">Quill</span></a></li>
<li class="nk-menu-item"><a href="html/components/forms/form-tinymce.html" class="nk-menu-link"><span class="nk-menu-text">Tinymce</span></a></li>
</ul><!-- .nk-menu-sub -->
</li>
</ul><!-- .nk-menu-sub -->
</li><!-- .nk-menu-item -->
<li class="nk-menu-item has-sub">
<a href="#" class="nk-menu-link nk-menu-toggle">
<span class="nk-menu-icon"><em class="icon ni ni-pie"></em></span>
<span class="nk-menu-text">Charts</span>
</a>
<ul class="nk-menu-sub">
<li class="nk-menu-item">
<a href="html/components/charts/chartjs.html" class="nk-menu-link"><span class="nk-menu-text">Chart JS</span></a>
</li>
<li class="nk-menu-item">
<a href="html/components/charts/knob.html" class="nk-menu-link"><span class="nk-menu-text">Knob JS</span></a>
</li>
</ul><!-- .nk-menu-sub -->
</li><!-- .nk-menu-item -->
<li class="nk-menu-item has-sub">
<a href="#" class="nk-menu-link nk-menu-toggle">
<span class="nk-menu-icon"><em class="icon ni ni-puzzle"></em></span>
<span class="nk-menu-text">Widgets</span>
</a>
<ul class="nk-menu-sub">
<li class="nk-menu-item">
<a href="html/components/widgets/cards.html" class="nk-menu-link"><span class="nk-menu-text">Card Widgets</span></a>
</li><!-- .nk-menu-item -->
<li class="nk-menu-item">
<a href="html/components/widgets/charts.html" class="nk-menu-link"><span class="nk-menu-text">Chart Widgets</span></a>
</li><!-- .nk-menu-item -->
<li class="nk-menu-item">
<a href="html/components/widgets/ratings.html" class="nk-menu-link"><span class="nk-menu-text">Ratings Widgets</span></a>
</li><!-- .nk-menu-item -->
</ul><!-- .nk-menu-sub -->
</li><!-- .nk-menu-item -->
<li class="nk-menu-item has-sub">
<a href="#" class="nk-menu-link nk-menu-toggle">
<span class="nk-menu-icon"><em class="icon ni ni-block-over"></em></span>
<span class="nk-menu-text">Miscellaneous</span>
</a>
<ul class="nk-menu-sub">
<li class="nk-menu-item">
<a href="html/components/misc/slick-sliders.html" class="nk-menu-link"><span class="nk-menu-text">Slick Slider</span></a>
</li><!-- .nk-menu-item -->
<li class="nk-menu-item">
<a href="html/components/misc/toastr.html" class="nk-menu-link"><span class="nk-menu-text">Toastr</span></a>
</li><!-- .nk-menu-item -->
<li class="nk-menu-item">
<a href="html/components/misc/sweet-alert.html" class="nk-menu-link"><span class="nk-menu-text">Sweet Alert</span></a>
</li><!-- .nk-menu-item -->
<li class="nk-menu-item">
<a href="html/components/misc/js-tree.html" class="nk-menu-link"><span class="nk-menu-text">jsTree</span></a>
</li><!-- .nk-menu-item -->
<li class="nk-menu-item">
<a href="html/components/misc/dual-listbox.html" class="nk-menu-link"><span class="nk-menu-text">Dual Listbox</span></a>
</li><!-- .nk-menu-item -->
<li class="nk-menu-item">
<a href="html/components/misc/dragula.html" class="nk-menu-link"><span class="nk-menu-text">Dragula</span></a>
</li><!-- .nk-menu-item -->
<li class="nk-menu-item">
<a href="html/components/misc/map.html" class="nk-menu-link"><span class="nk-menu-text">Google Map</span></a>
</li><!-- .nk-menu-item -->
</ul><!-- .nk-menu-sub -->
</li><!-- .nk-menu-item -->
<li class="nk-menu-item">
<a href="html/email-templates.html" class="nk-menu-link">
<span class="nk-menu-icon"><em class="icon ni ni-text-rich"></em></span>
<span class="nk-menu-text">Email Template</span>
</a>
</li>
</ul><!-- .nk-menu -->
</div></div></div></div><div class="simplebar-placeholder" style="width: 289px; height: 1816px;"></div></div><div class="simplebar-track simplebar-horizontal" style="visibility: hidden;"><div class="simplebar-scrollbar" style="width: 0px; display: none;"></div></div><div class="simplebar-track simplebar-vertical" style="visibility: visible;"><div class="simplebar-scrollbar" style="height: 199px; transform: translate3d(0px, 377px, 0px); display: block;"></div></div></div><!-- .nk-sidebar-menu -->
</div><!-- .nk-sidebar-content -->
</div><!-- .nk-sidebar-element -->
</div>
<!-- sidebar @e -->
<!-- wrap @s -->









<div class="nk-wrap">
<!-- main header @s -->
<div class="nk-header nk-header-fixed bg-white">
<div class="container-fluid">
<div class="nk-header-wrap">
<div class="nk-menu-trigger d-xl-none ms-n1 ">
<a href="#" class="nk-nav-toggle nk-quick-nav-icon" data-target="sidebarMenu">
    <em class="icon ni ni-menu"></em></a>
</div>
<div class="nk-header-brand d-xl-none">
<a href="html/index.html" class="logo-link">
<img class="logo-light logo-img" :src="logo" srcset="" alt="logo">
<img class="logo-dark logo-img" :src="logo" srcset="" alt="logo-dark">
</a>
</div><!-- .nk-header-brand -->
<div class="nk-header-news d-none d-xl-block">
<div class="nk-news-list">

    <Link class="nk-news-item" :href="route('carbon.markets')">
        <div class="nk-news-icon">
            <em class="icon ni ni-coins"></em>
        </div>
        <div class="nk-news-text">
            <p>Carbon Markets<span class="ml-3"> A overview of our is now available on YouTube</span></p>
            <em class="icon ni ni-external"></em>
        </div>
    </Link>
















</div>
</div><!-- .nk-header-news -->

<div class="nk-header-tools">

<ul class="nk-quick-nav">








<li class="d-none d-sm-block me-n1">
<!-- <search-bar class="mr-3"></search-bar> -->
<Link :href="route('dashboard')" class="pr-2" :active="route().current('dashboard')">
<em class="icon ni ni-home-fill" style="font-size:25px;color:#aeb6bf;"></em>
</Link>
</li>




    <li class="d-none d-sm-block me-n1">
    <!-- <search-bar class="mr-3"></search-bar> -->
    <Link :href="route('search')" class="pr-2" :active="route().current('search')">
    <em class="icon ni ni-search" style="font-size:25px;color:#aeb6bf;"></em>

    </Link>
    </li>




<li class="d-none d-sm-block me-n1">
<!-- <search-bar class="mr-3"></search-bar> -->
<Link :href="route('emissions')" class="pr-2" :active="route().current('notification')">
<em class="icon ni ni-grid" style="font-size:25px;color:#aeb6bf;"></em>
</Link>
</li>


<!-- <li class="d-none d-sm-block me-n1 pr-3">
<a href="#"> <em class="icon ni ni-chat-msg" style="font-size:25px;color:#aeb6bf;"></em></a>
</li> -->


<li class="d-none d-sm-block me-n1 pr-3">
    <Link :href="route('notification')" class="pr-2" :active="route().current('notification')"> <em class="icon ni ni-bell-fill" style="font-size:25px;color:#aeb6bf;"></em></Link>
</li>

<li class="dropdown user-dropdown">
<a href="#" class="dropdown-toggle" data-bs-toggle="dropdown" style="background:white;border-radius:20px;padding:4px;">
<div class="user-toggle">
<div class="user-avatar sm bg-dark">
<em class="icon ni ni-user-alt-fill"></em>
</div>
<div class="user-info d-none d-md-block">
<div class="user-status" style="text-transform:capitalize;color:green;">
{{ user.role }}
</div>
<div class="user-name dropdown-indicator" style="font-size:15px;">
{{ user.firstname }}
</div>
</div>
</div>
</a>
<div class="dropdown-menu dropdown-menu-md dropdown-menu-end dropdown-menu-s1 border-0">
<div class="dropdown-inner">
<ul class="link-list">
<li><a href="html/user-profile-regular.html"><em class="icon ni ni-user-alt"></em><span>View Profile</span></a></li>
<li><a href="html/user-profile-setting.html"><em class="icon ni ni-setting-alt"></em><span>Account Setting</span></a></li>
<li><a href="html/user-profile-activity.html"><em class="icon ni ni-activity-alt"></em><span>Login Activity</span></a></li>
<li><a class="dark-switch" href="#"><em class="icon ni ni-moon"></em><span>Dark Mode</span></a></li>
</ul>
</div>
<div class="dropdown-inner">
<ul class="link-list">
<li>
<signout-button></signout-button>
</li>
</ul>
</div>
</div>
</li><!-- .dropdown -->

</ul><!-- .nk-quick-nav -->
</div><!-- .nk-header-tools -->
</div><!-- .nk-header-wrap -->
</div><!-- .container-fliud -->
</div>
<!-- main header @e -->
<!-- content @s -->
<div class="nk-content pt-2">
<div class="container-fluid pt-0">
<div class="nk-content-inner pt-0">
<div class="nk-content-body pt-2">
<slot></slot>
</div>
</div>
</div>
</div>
<!-- content @e -->





<!-- footer @s -->
<div class="nk-footer">
<div class="container-fluid">
<div class="nk-footer-wrap">
<div class="nk-footer-copyright"> © 2024 DashLite. Template by <a href="https://softnio.com" target="_blank">Softnio</a>
</div>
<div class="nk-footer-links">
<ul class="nav nav-sm">
<li class="nav-item dropup">
<a href="#" class="dropdown-toggle dropdown-indicator has-indicator nav-link text-base" data-bs-toggle="dropdown" data-offset="0,10"><span>English</span></a>
<div class="dropdown-menu dropdown-menu-sm dropdown-menu-end">
<ul class="language-list">
<li>
<a href="#" class="language-item">
<span class="language-name">English</span>
</a>
</li>
<li>
<a href="#" class="language-item">
<span class="language-name">Español</span>
</a>
</li>
<li>
<a href="#" class="language-item">
<span class="language-name">Français</span>
</a>
</li>
<li>
<a href="#" class="language-item">
<span class="language-name">Türkçe</span>
</a>
</li>
</ul>
</div>
</li>
<li class="nav-item">
<a data-bs-toggle="modal" href="#region" class="nav-link"><em class="icon ni ni-globe"></em><span class="ms-1">Select Region</span></a>
</li>
</ul>
</div>
</div>
</div>
</div>
<!-- footer @e -->
</div>
<!-- wrap @e -->
</div>
<!-- main @e -->
</div>




<user-role-modal :user="user"></user-role-modal>
<!-- app-root @e -->



</div>
</template>
<script setup>
import { usePage, Link } from '@inertiajs/vue3';
import { computed } from 'vue';
import UserRoleModal from '@/Components/UserRoleModal.vue';
import SignoutButton from '@/Components/SignoutButton.vue';
import SearchBar from '@/Components/SearchBar.vue';




const props=defineProps({

});

const logo="http://localhost/netzerocredit/resources/images/logo2.png";
const page= usePage();
const user=computed(()=>page.props.auth.user);
const logout = () => {
router.post(route('logout'));
};










</script>
<style>
.nk-menu-text{
font-size:12px;
font-weight: normal;
}
h1,h2,h3,h4,h5,h6{
font-family: sans-serif;
}
.border1{
    border-top:solid 2px  #eaeded
}
#card{
    border:solid 1px  #eaeded;
    }
.bold{
font-weight: normal;
}
.capitalise{
text-transform:capitalize;
}
</style>