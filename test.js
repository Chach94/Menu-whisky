$(".btn-nav").on("click", function () {
  $(".l1").toggleClass("active");
  $(".l2").toggleClass("active");
  $(".l3").toggleClass("active");

  $(".menu").toggleClass("active");
  $(".sous-menu").show();
});
$(document).ready(function () {
  // appel de fichier JSON
  $.ajax({
    url: "data-menu.json",
    dataType: "json",
    success: function (data) {
      console.log(data);
      // Boucle pour afficher les données et affichage du nom pour chaques elements
      $.each(data, function (index, item) {
        $(".navbar-nav").append(
          "<li class='nav-item fs-3 mb-4'><a class='nav-link " +
            item.id +
            "' href='#' >" +
            item.nom +
            "</a></li>"
        );
        // création des divs pour submenu
        $(".sub-menu").append(
          '<div class="sous-menu menu-' +
            item.id +
            '"><div class="nav-container"><h2>Sélection</h2> <ul class="submenu-list selection"></ul></div><div class="nav-container"><h2>Marques</h2> <ul class="submenu-list marques"> </ul></div><div class="nav-container"><h2>Région</h2> <ul class="submenu-list region"> </ul></div></div>'
        );
        // Boucles pour afficher un par un les éléments de selection
        if (item.selection && item.id === "scotch") {
          $.each(item.selection, function (i, select) {
            $(".selection").append("<li>" + select + "</li>");
          });
        }
        if (item.selection && item.id === "japonais") {
          $.each(item.selection, function (i, select) {
            $(".selection").append("<li>" + select + "</li>");
          });
        }
      });
    },
    error: function (error) {
      // Gérer les erreurs ici si le chargement du fichier JSON échoue.
      console.error("Erreur lors du chargement du fichier JSON:", error);
    },
  });
});
