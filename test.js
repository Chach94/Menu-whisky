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
      /*  $.each(data, function (index, item) {
        $(".navbar-nav").append(
          "<li class='nav-item fs-3 mb-4'><a class='nav-link " +
            item.id +
            "' href='#' >" +
            item.nom +
            "</a></li>"
        );

        const test = `
        <div class="sous-menu menu-${item.id}">
         ${
           item.selection
             ? `
          <div class="nav-container">
            <h2>Sélection</h2>
            <ul class="submenu-list selection ${item.id}"></ul>
          </div>`
             : ""
         }
          ${
            item.marques
              ? `
          <div class="nav-container">
            <h2>Marques</h2>
            <ul class="submenu-list marques ${item.id}"></ul>
          </div>`
              : ""
          }
          ${
            item.region
              ? `
          <div class="nav-container">
            <h2>Région</h2>
            <ul class="submenu-list region ${item.id}"></ul>
          </div>`
              : ""
          }
          ${
            item.pays
              ? `
          <div class="nav-container">
            <h2>Pays</h2>
            <ul class="submenu-list pays ${item.id}"></ul>
          </div>`
              : ""
          }
        </div>`;

        $(".sub-menu").append(test);
        // Boucles pour afficher un par un les éléments de selection
        if (item.selection) {
          $.each(item.selection, function (i, select) {
            $(`.selection.${item.id}`).append(`<li>${select}</li>`);
          });
        }
        if (item.marques) {
          $.each(item.marques, function (i, marques) {
            $(`.marques.${item.id}`).append(`<li>${marques}</li>`);
          });
        }

        if (item.region) {
          $.each(item.region, function (i, region) {
            $(`.region.${item.id}`).append(`<li>${region}</li>`);
          });
        }
        if (item.pays) {
          $.each(item.pays, function (i, pays) {
            $(`.pays.${item.id}`).append(`<li>${pays}</li>`);
          });
        }
      });*/

      $.map(data, function (menu, menuKey) {
        $(".navbar-nav").append(
          "<li class='nav-item fs-3 mb-4'><a class='nav-link showMenu' data-id='" +
            menu.id +
            "'href='#'>" +
            menu.nom +
            "</a></li>"
        );
        $(".sub-menu").append(
          '<div class="nav-container d-none"><h2>Sélection</h2> <ul class="submenu-list  selection_' +
            menu.id +
            ' d-none"></ul></div>',
          '<div class="nav-container d-none"><h2>Marques</h2> <ul class="submenu-list marques_' +
            menu.id +
            ' d-none"></ul></div>',
          '<div class="nav-container d-none"><h2>Région</h2> <ul class="submenu-list region_' +
            menu.id +
            'd-none "></ul></div>'
        );

        if (menu.selection) {
          $.each(menu.selection, function (i, test) {
            $(".selection_" + menu.id).append("<li>" + test + "</li>");
          });
        }

        if (menu.marques) {
          $.each(menu.marques, function (i, test) {
            $(".marques_" + menu.id).append("<li>" + test + "</li>");
          });
        }

        if (menu.region) {
          $.each(menu.region, function (i, test) {
            $(".region_" + menu.id).append("<li>" + test + "</li>");
          });
        }

        $(".showMenu").on("click", function () {
          var idMenu = $(this).attr("data-id");

          $(".nav-container").addClass("d-none");

          $(".selection_" + menu.id).removeClass("d-none");

          $(".marques_" + menu.id).removeClass("d-none");

          $(".region_" + menu.id).append("<li>" + test + "</li>");
        });
      });
    },
    error: function (error) {
      // Gérer les erreurs ici si le chargement du fichier JSON échoue.
      console.error("Erreur lors du chargement du fichier JSON:", error);
    },
  });
});
