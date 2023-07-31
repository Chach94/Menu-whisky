$(".btn-nav").on("click", function () {
  $(".l1").toggleClass("active");
  $(".l2").toggleClass("active");
  $(".l3").toggleClass("active");

  $(".menu").toggleClass("active");
  $(".sous-menu").hide();
});
// Gérer le clic sur le bouton pour afficher/masquer
$(".japonais").on("click", function () {
  $(".sous-menu").hide();
  $(".menu-japonais").show().css("display", "flex");
});

$(".scotch").on("click", function () {
  $(".sous-menu").hide();
  $(".menu-scotch").show().css("display", "flex");
});

$(".monde").on("click", function () {
  $(".sous-menu").hide();
  $(".menu-monde").show().css("display", "flex");
});

$(".rhum").on("click", function () {
  $(".sous-menu").hide();
  $(".menu-rhum").show().css("display", "flex");
});

$(".vodka").on("click", function () {
  $(".sous-menu").hide();
  $(".menu-vodka").show().css("display", "flex");
});

$(".gin").on("click", function () {
  $(".sous-menu").hide();
  $(".menu-gin").show().css("display", "flex");
});

$(".cognac").on("click", function () {
  $(".sous-menu").hide();
  $(".menu-cognac").show().css("display", "flex");
});

$(".armagnac").on("click", function () {
  $(".sous-menu").hide();
  $(".menu-armagnac").show().css("display", "flex");
});

$(".spiritueux").on("click", function () {
  $(".sous-menu").hide();
  $(".menu-spiritueux").show().css("display", "flex");
});

$(".champagne").on("click", function () {
  $(".sous-menu").hide();
  $(".menu-champagne").show().css("display", "flex");
});

$(".vin").on("click", function () {
  $(".sous-menu").hide();
  $(".menu-vin").show().css("display", "flex");
});
//NAVIGATION MOBILE
$(".btn-mobile").on("click", function () {
  $(".mobile").toggleClass("active");
  $(".l1").toggleClass("active");
  $(".l2").toggleClass("active");
  $(".l3").toggleClass("active");
});
$(".btn-back").on("click", function () {
  $(".sidebar-mobile").animate({ left: "0px" }, "slow").show();
  $(".submenu-mobile").animate({ right: "-800px" }, "slow").hide();
});

$(".nav-item").on("click", function () {
  $(".sidebar-mobile").animate({ left: "-800px" }, "slow").hide();
  $(".submenu-mobile").animate({ right: "0px" }, "slow").show();
});

$(".scotch-mobile").on("click", function () {
  $(".sous-menu-mobile").hide();
  $(".menu-scotch-mobile").show();
});
$(".japonais-mobile").on("click", function () {
  $(".sous-menu-mobile").hide();
  $(".menu-japonais-mobile").show();
});
$(".monde-mobile").on("click", function () {
  $(".sous-menu-mobile").hide();
  $(".menu-monde-mobile").show();
});
$(".rhum-mobile").on("click", function () {
  $(".sous-menu-mobile").hide();
  $(".menu-rhum-mobile").show();
});
$(".vodka-mobile").on("click", function () {
  $(".sous-menu-mobile").hide();
  $(".menu-vodka-mobile").show();
});
$(".gin-mobile").on("click", function () {
  $(".sous-menu-mobile").hide();
  $(".menu-gin-mobile").show();
});
$(".cognac-mobile").on("click", function () {
  $(".sous-menu-mobile").hide();
  $(".menu-cognac-mobile").show();
});
$(".armagnac-mobile").on("click", function () {
  $(".sous-menu-mobile").hide();
  $(".menu-armagnac-mobile").show();
});
$(".spiritueux-mobile").on("click", function () {
  $(".sous-menu-mobile").hide();
  $(".menu-spiritueux-mobile").show();
});
$(".champagne-mobile").on("click", function () {
  $(".sous-menu-mobile").hide();
  $(".menu-champagne-mobile").show();
});
$(".vin-mobile").on("click", function () {
  $(".sous-menu-mobile").hide();
  $(".menu-vin-mobile").show();
});
