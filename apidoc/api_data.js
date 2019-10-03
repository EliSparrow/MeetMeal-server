define({ "api": [
  {
    "type": "put",
    "url": "/events/:event_id/validateGuest/:acceptedGuest_id",
    "title": "acceptGuest",
    "name": "acceptGuest",
    "group": "events",
    "description": "<p>Permet a un utilisateur ayant cree un evenement ou un admin d'accepter un utilisateur</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "event_id",
            "description": "<p>Id de l'evenement concerne</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "acceptedGuest_id",
            "description": "<p>Id de l'utilisateur connecte</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "event",
            "description": "<p>Mise a jour du statut de l'invite sur l'evenement en &quot;Accepte&quot;</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n    \"msg\" : \"Utilisateur accepte\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AccesRefuse",
            "description": "<p>L'utilisateur connecte n'est pas en droit de modifier le statut de l'invite</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response",
          "content": "HTTP/1.1 400 KO\n{\n    \"msg\" : \"Acces refuse\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/event.controller.js",
    "groupTitle": "events"
  },
  {
    "type": "put",
    "url": "/events/:id/addGuest",
    "title": "addGuest",
    "name": "addGuest",
    "group": "events",
    "description": "<p>Permet a un utilisateur connecte de s'ajouter a un evenement</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>Id de l'utilisateur connecte</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "event",
            "description": "<p>Mise a jour de l'evenement</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NombreMaximalAtteint",
            "description": "<p>Nombre maximum d'invites deja atteint</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UtilisateurDejaInscrit",
            "description": "<p>L'utilisateur connecte est deja ajoute a l'evenement</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ImpossibleDeRejoindre",
            "description": "<p>L'utilisateur ayant cree l'evenement ne peut pas rejoindre son propre evenement comme invite</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response",
          "content": "HTTP/1.1 400 KO\n{\n    \"msg\" : \"Nombre maximum d'invites deja atteint\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/event.controller.js",
    "groupTitle": "events"
  },
  {
    "type": "post",
    "url": "/events/:id/comment",
    "title": "comment",
    "name": "comment",
    "group": "events",
    "description": "<p>Cette fonction permet a un utilisateur connecte de commenter un evenement</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>Id de l'evenement concerne</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "content",
            "description": "<p>Commentaire de l'utilisateur sur l'evenement</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "event",
            "description": "<p>L'evenement a ete mis a jour avec le commentaire de l'utilisateur</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/event.controller.js",
    "groupTitle": "events"
  },
  {
    "type": "post",
    "url": "/events/create",
    "title": "create",
    "name": "create",
    "group": "events",
    "description": "<p>Cette fonction cree un nouvel evenement</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id de l'utilisateur</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Titre de l'evenement</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "date",
            "description": "<p>Date de l'evenement</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "hour",
            "description": "<p>Heure de l'evenement</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "minutes",
            "description": "<p>Minutes de l'evenement</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "typeOfCuisine",
            "description": "<p>Type de l'evenement (dejeuner, brunch, diner...)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "typeOfMeal",
            "description": "<p>Type de cuisine (indien, francais, linanais...)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "zipCode",
            "description": "<p>Code postal du lieu de l'evenement</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Adresse du lieu de l'evenement</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>Ville du lieu de l'evenement</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description de l'evenement</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "menu",
            "description": "<p>Menu propose lors de l'evenement</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "allergens",
            "description": "<p>Risques d'allergies liees au menu</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "numberMaxOfGuests",
            "description": "<p>Nombre maximal d'invite pour l'evenement</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "cost",
            "description": "<p>Cout pour chaque invite de l'evenement</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "event",
            "description": "<p>Evenement cree</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n    \"msg\" : \"Evenement cree\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ChampsObligatoires",
            "description": "<p>Un certains nombre de champs sont obligatoires</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/event.controller.js",
    "groupTitle": "events"
  },
  {
    "type": "delete",
    "url": "/events/:event_id/:comment_id",
    "title": "deleteComment",
    "name": "deleteComment",
    "group": "events",
    "description": "<p>Cette fonction permet a l'utilisateur qui a commente de supprimer son commentaire</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "event_id",
            "description": "<p>Id de l'evenement concerne</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "comment_id",
            "description": "<p>Id du commentaire concerne</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>Id de l'utilisateur ayant laisse un commentaire</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "event",
            "description": "<p>Le commentaire de l'evenement a ete supprime</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CommentaireIntrouvable",
            "description": "<p>Le commentaire dont l'id a ete passe en parametre n'existe pas</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AccesRefuse",
            "description": "<p>L'utilisateur connecte n'a pas les droits de modification</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response",
          "content": "HTTP/1.1 404 KO\n{\n    \"msg\" : \"Ce commentaire n'existe pas\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/event.controller.js",
    "groupTitle": "events"
  },
  {
    "type": "delete",
    "url": "/events/:id",
    "title": "deleteEvent",
    "name": "deleteEvent",
    "group": "events",
    "description": "<p>Cette fonction permet a l'utilisateur ayant cree l'evenement ou a un administrateur de supprimer un evenement</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>Id de l'evenement concerne</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "event",
            "description": "<p>L'evenement a ete supprime</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n    \"msg\" : \"Evenement supprime\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "EvenementIntrouvable",
            "description": "<p>L'evenement dont l'id a ete passe en parametre n'existe pas</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AccesRefuse",
            "description": "<p>L'utilisateur connecte n'a pas les droits de modification</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response",
          "content": "HTTP/1.1 404 KO\n{\n    \"msg\" : \"Evenement non trouve\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/event.controller.js",
    "groupTitle": "events"
  },
  {
    "type": "get",
    "url": "/events",
    "title": "listEvents",
    "name": "listEvents",
    "group": "events",
    "description": "<p>Cette fonction liste l'ensemble des evenements disponibles</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "events",
            "description": "<p>Evenements trouves</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AucunEvenements",
            "description": "<p>Aucun evenement n'est disponible</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/event.controller.js",
    "groupTitle": "events"
  },
  {
    "type": "put",
    "url": "/events/:id/refuse",
    "title": "refuseEvent",
    "name": "refuseEvent",
    "group": "events",
    "description": "<p>Cette fonction permet a un administrateur de refuser un evenement</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>Id de l'evenement concerne</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "event",
            "description": "<p>Le statut de l'evenement est change de &quot;En attente&quot; a &quot;Refuse&quot;</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AucunEvenement",
            "description": "<p>Aucun evenement ne correspond a l'id donne</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response",
          "content": "HTTP/1.1 400 KO\n{\n    \"msg\" : \"Evenement non trouve\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/event.controller.js",
    "groupTitle": "events"
  },
  {
    "type": "put",
    "url": "/events/:event_id/refuseGuest/:refusedGuest_id",
    "title": "refuseGuest",
    "name": "refuseGuest",
    "group": "events",
    "description": "<p>Permet a un utilisateur ayant cree un evenement ou un admin de refuser un utilisateur</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "event_id",
            "description": "<p>Id de l'evenement concerne</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "acceptedGuest_id",
            "description": "<p>Id de l'utilisateur connecte</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "event",
            "description": "<p>Mise a jour du statut de l'invite sur l'evenement en &quot;Refuse&quot;</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n    \"msg\" : \"Utilisateur refuse\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AccesRefuse",
            "description": "<p>L'utilisateur connecte n'est pas en droit de modifier le statut de l'invite</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response",
          "content": "HTTP/1.1 400 KO\n{\n    \"msg\" : \"Acces refuse\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/event.controller.js",
    "groupTitle": "events"
  },
  {
    "type": "put",
    "url": "/events/:id/removeGuest",
    "title": "removeGuest",
    "name": "removeGuest",
    "group": "events",
    "description": "<p>Permet a un utilisateur connecte de se retirer d'un evenement</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>Id de l'utilisateur connecte</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "event",
            "description": "<p>Mise a jour de l'evenement</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AucunUtilisateur",
            "description": "<p>Aucun utilisateur ne correspond a l'id passe en parametre</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/event.controller.js",
    "groupTitle": "events"
  },
  {
    "type": "get",
    "url": "/events/:id/showEvents",
    "title": "showCreatedEvents",
    "name": "showCreatedEvents",
    "group": "events",
    "description": "<p>Cette fonction permet d'afficher les evenements que l'utilisateur dont l'id a ete passe en parametre a cree</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>Id de l'utilisateur</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "events",
            "description": "<p>Les evenements cree par l'utilisateur sont affiches</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "EvenementIntrouvable",
            "description": "<p>Aucun evenement n'a ete trouve</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UtilisateurIntrouvable",
            "description": "<p>L'utilisateur n'a pas ete trouve</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response",
          "content": "HTTP/1.1 404 KO\n{\n    \"msg\" : \"Evenements non trouves\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/event.controller.js",
    "groupTitle": "events"
  },
  {
    "type": "get",
    "url": "/events/:id",
    "title": "showEvent",
    "name": "showEvent",
    "group": "events",
    "description": "<p>Cette fonction affiche un evenement en fonction de son id</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>Id de l'evenement concerne</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "event",
            "description": "<p>Evenements trouves</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AucunEvenement",
            "description": "<p>Aucun evenement ne correspond a l'id donne</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response",
          "content": "HTTP/1.1 400 KO\n{\n    \"msg\" : \"Evenement non trouve\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/event.controller.js",
    "groupTitle": "events"
  },
  {
    "type": "get",
    "url": "/events/:id/guestsEvents",
    "title": "showGuestsEvents",
    "name": "showGuestsEvents",
    "group": "events",
    "description": "<p>Cette fonction permet d'afficher les evenements que l'utilisateur dont l'id a ete passe en parametre a rejoint</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>Id de l'utilisateur</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "events",
            "description": "<p>Les evenements que l'utilisateur a rejoint sont affiches</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "EvenementIntrouvable",
            "description": "<p>Aucun evenement n'a ete trouve</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UtilisateurIntrouvable",
            "description": "<p>L'utilisateur n'a pas ete trouve</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response",
          "content": "HTTP/1.1 404 KO\n{\n    \"msg\" : \"Evenements non trouves\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/event.controller.js",
    "groupTitle": "events"
  },
  {
    "type": "put",
    "url": "/events/:event_id/:comment_id",
    "title": "updateComment",
    "name": "updateComment",
    "group": "events",
    "description": "<p>Cette fonction permet a l'utilisateur qui a commente de mettre a jour son commentaire</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "event_id",
            "description": "<p>Id de l'evenement concerne</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "comment_id",
            "description": "<p>Id du commentaire concerne</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>Id de l'utilisateur ayant laisse un commentaire</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "content",
            "description": "<p>Commentaire mis a jour de l'utilisateur sur l'evenement</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "event",
            "description": "<p>Le commentaire de l'evenement a ete mis a jour</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CommentaireIntrouvable",
            "description": "<p>Le commentaire dont l'id a ete passe en parametre n'existe pas</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AccesRefuse",
            "description": "<p>L'utilisateur connecte n'a pas les droits de modification</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response",
          "content": "HTTP/1.1 404 KO\n{\n    \"msg\" : \"Ce commentaire n'existe pas\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/event.controller.js",
    "groupTitle": "events"
  },
  {
    "type": "put",
    "url": "/events/:id",
    "title": "updateEvent",
    "name": "updateEvent",
    "group": "events",
    "description": "<p>Cette fonction permet de mettre a jour un evenement si l'utilisateur est le createur de l'evenement ou un administrateur</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id de l'utilisateur connecte</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Titre mis a jour</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "date",
            "description": "<p>Date mise a jour</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "hour",
            "description": "<p>Heure mise a jour</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "minutes",
            "description": "<p>Minutes mises a jour</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "typeOfCuisine",
            "description": "<p>Type de l'evenement mis a jour (dejeuner, brunch, diner...)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "typeOfMeal",
            "description": "<p>Type de cuisine mise a jour (indien, francais, linanais...)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "zipCode",
            "description": "<p>Code postal mis a jour</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Adresse mise a jour</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>Ville du lieu mis a jour</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description mise a jour</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "menu",
            "description": "<p>Menu propose mis a jour</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "allergens",
            "description": "<p>Risques d'allergies liees au menu mis a jour</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "numberMaxOfGuests",
            "description": "<p>Nombre maximal d'invite pour l'evenement mis a jour</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "cost",
            "description": "<p>Cout pour chaque invite de l'evenement mis a jour</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "event",
            "description": "<p>Evenement mis a jour</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "EvenementIntrouvable",
            "description": "<p>Aucun evenement ne correspond a l'id donne</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AccesRefuse",
            "description": "<p>L'utilisateur connecte n'a pas les droits necessaires pour la mise a jour de l'evenement</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/event.controller.js",
    "groupTitle": "events"
  },
  {
    "type": "put",
    "url": "/events/:id/validate",
    "title": "validEvent",
    "name": "validEvent",
    "group": "events",
    "description": "<p>Cette fonction permet a un administrateur de valider un evenement</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>Id de l'evenement concerne</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "event",
            "description": "<p>Le statut de l'evenement est change de &quot;En attente&quot; a &quot;Accepte&quot;</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AucunEvenement",
            "description": "<p>Aucun evenement ne correspond a l'id donne</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response",
          "content": "HTTP/1.1 400 KO\n{\n    \"msg\" : \"Evenement non trouve\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/event.controller.js",
    "groupTitle": "events"
  },
  {
    "type": "post",
    "url": "/orders/adminOrder",
    "title": "adminOrder",
    "name": "adminOrder",
    "group": "orders",
    "description": "<p>Cette fonction permet a un administrateur d'ajouter des &quot;toques&quot; au compte d'un utilisateur</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>Id de l'utilisateur auquel les &quot;toques&quot; doivent etre ajoutes</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "numberOfToques",
            "description": "<p>Le nombre de &quot;toques&quot; de l'utilisateur auquel les &quot;toques&quot; doivent etre ajoutes</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "order",
            "description": "<p>Creation d'un objet order</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "user",
            "description": "<p>Mise a jour du profil de l'utilisateur dont l'id a ete passe en parametre</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "user.toquesAvailable",
            "description": "<p>Mise a jour du nombre de &quot;toques&quot; de l'utilisateur</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n[{\n    \"msg\" : \"Commande effectuee\"\n},\n    user\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ChampsNonRenseignes",
            "description": "<p>Tous les champs sont a renseigner</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/order.controller.js",
    "groupTitle": "orders"
  },
  {
    "type": "post",
    "url": "/orders/create",
    "title": "create",
    "name": "create",
    "group": "orders",
    "description": "<p>Cette fonction permet d'ajouter des &quot;toques&quot; au compte de l'utilisateur connecte</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>Id de l'utilisateur</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "numberOfToques",
            "description": "<p>Le nombre de &quot;toques&quot; de l'utilisateur connecte</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "order",
            "description": "<p>Creation d'un objet order</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "user",
            "description": "<p>Mise a jour du profil de l'utilisateur connecte</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "user.toquesAvailable",
            "description": "<p>Mise a jour du nombre de &quot;toques&quot; de l'utilisateur</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n[{\n    \"msg\" : \"Commande passee\"\n},\n    user\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ChampsNonRenseignes",
            "description": "<p>Tous les champs sont a renseigner</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/order.controller.js",
    "groupTitle": "orders"
  },
  {
    "type": "delete",
    "url": "/orders/:id",
    "title": "deleteOrder",
    "name": "deleteOrder",
    "group": "orders",
    "description": "<p>Cette fonction permet a un utilisateur d'annuler une commande passee</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>Id d'un utilisateur</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "user",
            "description": "<p>Mise a jour du profil de l'utilisateur</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "user.toquesAvailable",
            "description": "<p>Mise a jour du nombre de &quot;toques&quot; de l'utilisateur selectionne</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "order",
            "description": "<p>Suppression de la commande de &quot;toques&quot; de l'utilisateur</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n[{\n    \"msg\" : \"Commande annulee\"\n},\n    user\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CommandeIntrouvable",
            "description": "<p>Aucune commande trouvee pour l'utilisateur dont l'id a ete passe en parametre</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/order.controller.js",
    "groupTitle": "orders"
  },
  {
    "type": "get",
    "url": "/orders/listOrders",
    "title": "listOrders",
    "name": "listOrders",
    "group": "orders",
    "description": "<p>Cette fonction permet de visualiser l'ensemble des commandes de &quot;toques&quot; effectuees sur le site</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "orders",
            "description": "<p>Affichage de l'ensemble des commandes</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CommandeIntrouvable",
            "description": "<p>Aucune commande n'a ete trouve</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/order.controller.js",
    "groupTitle": "orders"
  },
  {
    "type": "get",
    "url": "/orders/:id",
    "title": "showOrder",
    "name": "showOrder",
    "group": "orders",
    "description": "<p>Cette fonction permet de visualiser une commande de &quot;toques&quot;</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>Id d'une commande de &quot;toques&quot;</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "order",
            "description": "<p>Affichage d'une commande passee</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CommandeIntrouvable",
            "description": "<p>La commande dont l'id a ete renseigne est introuvable</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/order.controller.js",
    "groupTitle": "orders"
  },
  {
    "type": "get",
    "url": "/orders/userorder/:user_id",
    "title": "userOrders",
    "name": "userOrders",
    "group": "orders",
    "description": "<p>Cette fonction permet de visualiser les commandes de &quot;toques&quot; d'un utilisateur donne</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>Id d'un utilisateur</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "orders",
            "description": "<p>Affichage des commandes passees par un utilisateur</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CommandeIntrouvable",
            "description": "<p>Aucune commande trouvee pour l'utilisateur dont l'id a ete passe en parametre</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/order.controller.js",
    "groupTitle": "orders"
  },
  {
    "type": "post",
    "url": "/search/event",
    "title": "event",
    "name": "event",
    "group": "search",
    "description": "<p>Cette fonction permet d'afficher les evenements recherches</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "result",
            "description": "<p>Tableau contenant les mots-cles de l'utilisateur recherchant un ou des evenement(s)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "result",
            "description": "<p>Affichage des evenements crees correspondant a la recherche de l'utilisateur</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ChampVide",
            "description": "<p>Entrer obligatoirement un mot-cle pour effectuer une recherche</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "EvenementIntrouvable",
            "description": "<p>L'evenement n'a pas ete trouve</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/search.controller.js",
    "groupTitle": "search"
  },
  {
    "type": "post",
    "url": "/search/users",
    "title": "user",
    "name": "user",
    "group": "search",
    "description": "<p>Cette fonction permet d'afficher les utilisateurs recherches</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "search",
            "description": "<p>Mot(s)-cle(s) entres par l'utilisateur pour rechercher un autre utilisateur enregistre</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "result",
            "description": "<p>Affichage des utilisateurs enregistres correspondant a la recherche de l'utilisateur</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ChampVide",
            "description": "<p>Entrer obligatoirement un mot-cle pour effectuer une recherche</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UtilisateurIntrouvable",
            "description": "<p>L'utilisateur n'a pas ete trouve</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/search.controller.js",
    "groupTitle": "search"
  },
  {
    "type": "delete",
    "url": "/users/:id",
    "title": "deleteUser",
    "name": "deleteUser",
    "group": "users",
    "description": "<p>Suppression de l'utilisateur connecte</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id de l'utilisateur a supprimer</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n    \"msg\" : \"Utilisateur supprime\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UtilisateurNonTrouve",
            "description": "<p>L'utilisateur dont l'id est passe en parametre n'a pas ete trouve</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/user.controller.js",
    "groupTitle": "users"
  },
  {
    "type": "put",
    "url": "/users/",
    "title": "listUsers",
    "name": "listUsers",
    "group": "users",
    "description": "<p>Affichage des profils des utilisateurs inscrits</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "users",
            "description": "<p>Liste des utilisateurs inscrits</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/user.controller.js",
    "groupTitle": "users"
  },
  {
    "type": "post",
    "url": "/users/login",
    "title": "login",
    "name": "login",
    "group": "users",
    "description": "<p>Cette fonction permet a un utilisateur de se connecter</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email de l'utilisateur</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Mot de passe de l'utilisateur</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token de la session defini</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id de l'utilisateur</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "EmailNecessaire",
            "description": "<p>Le champs email est vide</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PasswordNecessaire",
            "description": "<p>Le champs mot de passe est vide</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UtilisateurInconnu",
            "description": "<p>L'email entre n'est pas reconnu</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PasswordInvalide",
            "description": "<p>Le mot de passe lie a l'email entre n'est pas valide</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/user.controller.js",
    "groupTitle": "users"
  },
  {
    "type": "get",
    "url": "/users/my-profile",
    "title": "myProfile",
    "name": "myProfile",
    "group": "users",
    "description": "<p>Permet d'afficher le profil de l'utilisateur connecte</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id de l'utilisateur</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "user",
            "description": "<p>Profil de l'utilisateur</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.firstname",
            "description": "<p>Prenom de l'utilisateur</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.lastname",
            "description": "<p>Nom de l'utilisateur</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.avatar",
            "description": "<p>Avatar de l'utilisateur</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.loveStatus",
            "description": "<p>Situation amoureuse de l'utilisateur</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "user.zipCode",
            "description": "<p>Code postal de l'utilisateur</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.city",
            "description": "<p>Ville de l'utilisateur</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.bio",
            "description": "<p>Description de l'utilisateur</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/user.controller.js",
    "groupTitle": "users"
  },
  {
    "type": "get",
    "url": "/users/profile/:id",
    "title": "profile",
    "name": "profile",
    "group": "users",
    "description": "<p>Permet d'afficher le profil d'un utilisateur dont l'id est passe en parametre</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id de l'utilisateur dont on souhaite afficher le profil</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "user",
            "description": "<p>Profil de l'utilisateur</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.avatar",
            "description": "<p>Avatar de l'utilisateur</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.firstname",
            "description": "<p>Prenom de l'utilisateur</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.lastname",
            "description": "<p>Nom de l'utilisateur</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "user.age",
            "description": "<p>Age de l'utilisateur</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.bio",
            "description": "<p>Description de l'utilisateur</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.loveStatus",
            "description": "<p>Situation amoureuse de l'utilisateur</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.address",
            "description": "<p>Adresse de l'utilisateur</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "user.zipCode",
            "description": "<p>Code postal de l'utilisateur</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.city",
            "description": "<p>Ville de l'utilisateur</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "user.toquesAvailable",
            "description": "<p>Nombre de toques disponibles de l'utilisateur</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/user.controller.js",
    "groupTitle": "users"
  },
  {
    "type": "post",
    "url": "/users/register",
    "title": "register",
    "name": "register",
    "group": "users",
    "description": "<p>Cette fonction enregistre un utilisateur si tous les champs sont entres</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Prenom de l'utilisateur</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Nom de l'utilisateur</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "age",
            "description": "<p>Age de l'utilisateur</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email de l'utilisateur</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Mot de passe de l'utilisateur</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "user",
            "description": "<p>Profil utilisateur cree</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n    \"msg\" : \"Utilisateur enregistre\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ChampsObligatoires",
            "description": "<p>Tous les champs sont obligatoires</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AgeInvalide",
            "description": "<p>L'age entre n'est pas un nombre</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AgeMinimum",
            "description": "<p>L'utilisateur doit avoir 18 ans ou plus pour s'enregistrer</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "EmailInvalide",
            "description": "<p>L'email entre n'est pas conforme</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PasswordInvalide",
            "description": "<p>Le mot de passe doit avoir entre 6 et 20 caracteres</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UtilisateurDejaEnregistre",
            "description": "<p>L'utilisateur existe deja</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/user.controller.js",
    "groupTitle": "users"
  },
  {
    "type": "get",
    "url": "/users/:id",
    "title": "updateProfile",
    "name": "updateProfile",
    "group": "users",
    "description": "<p>Permet de mettre a jour son propre profil</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id de l'utilisateur dont on souhaite modifier le profil</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "user",
            "description": "<p>Profil de l'utilisateur mis a jour</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.firstname",
            "description": "<p>Prenom de l'utilisateur</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.lastname",
            "description": "<p>Nom de l'utilisateur</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "user.age",
            "description": "<p>Age de l'utilisateur</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.email",
            "description": "<p>Email de l'utilisateur</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.password",
            "description": "<p>Mot de passe de l'utilisateur</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.avatar",
            "description": "<p>Avatar de l'utilisateur</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.bio",
            "description": "<p>Description de l'utilisateur</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.loveStatus",
            "description": "<p>Situation amoureuse de l'utilisateur</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.address",
            "description": "<p>Adresse de l'utilisateur</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "user.zipCode",
            "description": "<p>Code postal de l'utilisateur</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.city",
            "description": "<p>Ville de l'utilisateur</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "user.toquesAvailable",
            "description": "<p>Nombre de toques disponibles de l'utilisateur</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "EmailDejaUtilise",
            "description": "<p>L'email entre est deja utilise</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/user.controller.js",
    "groupTitle": "users"
  }
] });
