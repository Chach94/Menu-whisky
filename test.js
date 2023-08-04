$(".btn-nav").on("click", function () {
  $(".l1").toggleClass("active");
  $(".l2").toggleClass("active");
  $(".l3").toggleClass("active");

  $(".menu").toggleClass("active");
  $(".sous-menu").hide();
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
            item.nom +
            "' href='#' >" +
            item.nom +
            "</a></li>"
        );
        // création des divs pour submenu
        $(".sous-menu").append(
          '<div class="nav-container"><h2>Sélection</h2> <ul class="submenu-list selection"> </ul></div>',
          '<div class="nav-container"><h2>Marques</h2> <ul class="submenu-list marques"> </ul></div>',
          '<div class="nav-container"><h2>Région</h2> <ul class="submenu-list region"> </ul></div>'
        );
        // Boucles pour afficher un par un les éléments de selection
        for (var i = 0; i < item.selection.length; i++) {
          console.log(item.selection.length);
          $(".selection").append("<li>" + item.selection[i] + "</li>");
        }
        // test pour afficher les marques du premier element JSON
        $.each(data[0].marques, function (i, test) {
          $(".marques").append("<li>" + test + "</li>");
        });
        // test pour afficher les marques du premier element JSON
        $.each(data[0].region, function (i, test) {
          $(".region").append("<li>" + test + "</li>");
        });
      }); // Vous pouvez faire des opérations sur les données ici.
    },
    error: function (error) {
      // Gérer les erreurs ici si le chargement du fichier JSON échoue.
      console.error("Erreur lors du chargement du fichier JSON:", error);
    },
  });
});
