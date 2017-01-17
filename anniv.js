

//requete en jquery pour recup fichier et mettre n json id de ma feuille : 1od20qYW8-q5nF1UArDO6kXUHP-O0BI4_t4Qr07x6bwI
// lien de publication google sheets : https://docs.google.com/spreadsheets/d/1od20qYW8-q5nF1UArDO6kXUHP-O0BI4_t4Qr07x6bwI/pubhtml

// ID de la Google Spreadsheet
 var spreadsheetID = "1od20qYW8-q5nF1UArDO6kXUHP-O0BI4_t4Qr07x6bwI";
 
 // s'assurer que le tableau est public et publié sur le web
 var url = "https://spreadsheets.google.com/feeds/list/" + spreadsheetID + "/od6/public/values?alt=json";
 
// appel d'un json via Google Data API
$.getJSON(url, function(data) {

// debut création variable pour recuperer la date etc..
 var date = new Date();
console.log(date);

var anneeActuel = date.getFullYear();
var moisActuel = date.getMonth() + 1;
var jourActuel = date.getDate();
  
//
  var entry = data.feed.entry;

      for (var i = 0; i < entry.length; i++) {
              
        var jour = parseInt((entry[i]['gsx$jour']['$t']), 10);
        var mois = parseInt((entry[i]['gsx$mois']['$t']), 10);
        var prenom = entry[i]['gsx$prenom']['$t'];
        var age = entry[i]['gsx$age']['$t'];
          
// boucle a condition pour verif si anniv et affichage
        if ((jour === jourActuel) && (mois === moisActuel)){
 
            alert("bon anniv " + prenom);
            
            document.getElementById('fete').innerHTML = '<p>' + "Bon anniv " + prenom + ". Félicitation pour tes " + age + " ans" + '.</p>'
            
        } else {
    //message pour les tests
      
        
        }
      }
});






