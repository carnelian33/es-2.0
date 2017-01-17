window.addEventListener("load", function () {

               

                var texte = ['J le branche, j me couche, je l recupère le lendemain',
                             'Même une feuille de papier est plus légére quand on la porte a deux', 'Trois choses ne peuvent se cacher éternellement : le soleil, la lune et la vérité',
                             'S il n y a pas de solution, c est qu il n y a pas de probleme',
                             'Furet pas ça si j étais toi!',
                             'Exige beaucoup de toi-même et attends peu des autres. Ainsi beaucoup d ennuis te seront épargnés.'];

                var auteur = ['Jesus dit chris', 'Proverbe Coréen', 'Boudha', 'Devise Shadock', 'Papy', 'Confucius'];

                var date = ['', ''];

                var tirage = [Math.round(Math.random()*(texte.length-1))];

               

                var quoi = texte[tirage];

                var qui = auteur[tirage];

                var quand = date[tirage];

               

                // mettre dom du site

                document.getElementById('citation').innerHTML = '<p>' + quoi + ' ' + '.</div>'

                document.getElementById('auteur').innerHTML = '<p>' + qui + ' ' + '.</div>'

               

                console.log("Bon anniv Nico?");

});