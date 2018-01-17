export class DefaultFilters {
    static effective = [
        '0 salarié',
        '1 ou 2 salariés',
        'Unités non employeuses',
        '3 a 5 salariés',
        '6 à 9 salariés',
        '10 à 19 salariés',
        '20 à 49 salariés',
        '50 à 99 salariés',
        '100 à 199 salariés',
        '200 à 249 salariés',
        '250 à 499 salariés',
        '500 à 999 salariés',
        '1000 à 1999 salariés',
        '2000 à 4999 salariés',
        '5000 à 9999 salariés',
        '10000 salariés et plus',
    ];

    static categories = [
        'PME',
        'ETI',
        'GE',
    ];

    static postals() {
        let postalsArray = new Array();
        postalsArray['01'] = 'Ain';
        postalsArray['02'] = 'Aisne';
        postalsArray['03'] = 'Allier';
        postalsArray['04'] = 'Alpes de Haute Provence';
        postalsArray['05'] = 'Hautes Alpes';
        postalsArray['06'] = 'Alpes Maritimes';
        postalsArray['07'] = 'Ardèche';
        postalsArray['08'] = 'Ardennes';
        postalsArray['09'] = 'Ariège';
        postalsArray['10'] = 'Aube';
        postalsArray['11'] = 'Aude';
        postalsArray['12'] = 'Aveyron';
        postalsArray['13'] = 'Bouches du Rhône';
        postalsArray['14'] = 'Calvados';
        postalsArray['15'] = 'Cantal';
        postalsArray['16'] = 'Charente';
        postalsArray['17'] = 'Charente Maritime';
        postalsArray['18'] = 'Cher';
        postalsArray['19'] = 'Corrèze';
        postalsArray['200'] = 'Corse du Sud';
        postalsArray['201'] = 'Haute-Corse';
        postalsArray['21'] = 'Côte d\'Or';
        postalsArray['22'] = 'Côtes d\'Armor';
        postalsArray['23'] = 'Creuse';
        postalsArray['24'] = 'Dordogne';
        postalsArray['25'] = 'Doubs';
        postalsArray['26'] = 'Drôme';
        postalsArray['27'] = 'Eure';
        postalsArray['28'] = 'Eure et Loir';
        postalsArray['29'] = 'Finistère';
        postalsArray['30'] = 'Gard';
        postalsArray['31'] = 'Haute Garonne';
        postalsArray['32'] = 'Gers';
        postalsArray['33'] = 'Gironde';
        postalsArray['34'] = 'Hérault';
        postalsArray['35'] = 'Ille et Vilaine';
        postalsArray['36'] = 'Indre';
        postalsArray['37'] = 'Indre et Loire';
        postalsArray['38'] = 'Isère';
        postalsArray['39'] = 'Jura';
        postalsArray['40'] = 'Landes';
        postalsArray['41'] = 'Loir et Cher';
        postalsArray['42'] = 'Loire';
        postalsArray['43'] = 'Haute Loire';
        postalsArray['44'] = 'Loire Atlantique';
        postalsArray['45'] = 'Loiret';
        postalsArray['46'] = 'Lot';
        postalsArray['47'] = 'Lot et Garonne';
        postalsArray['48'] = 'Lozère';
        postalsArray['49'] = 'Maine et Loire';
        postalsArray['50'] = 'Manche';
        postalsArray['51'] = 'Marne';
        postalsArray['52'] = 'Haute Marne';
        postalsArray['53'] = 'Mayenne';
        postalsArray['54'] = 'Meurthe et Moselle';
        postalsArray['55'] = 'Meuse';
        postalsArray['56'] = 'Morbihan';
        postalsArray['57'] = 'Moselle';
        postalsArray['58'] = 'Nièvre';
        postalsArray['59'] = 'Nord';
        postalsArray['60'] = 'Oise';
        postalsArray['61'] = 'Orne';
        postalsArray['62'] = 'Pas de Calais';
        postalsArray['63'] = 'Puy de Dôme';
        postalsArray['64'] = 'Pyrénées Atlantiques';
        postalsArray['65'] = 'Hautes Pyrénées';
        postalsArray['66'] = 'Pyrénées Orientales';
        postalsArray['67'] = 'Bas Rhin';
        postalsArray['68'] = 'Haut Rhin';
        postalsArray['69'] = 'Rhône';
        postalsArray['70'] = 'Haute Saône';
        postalsArray['71'] = 'Saône et Loire';
        postalsArray['72'] = 'Sarthe';
        postalsArray['73'] = 'Savoie';
        postalsArray['74'] = 'Haute Savoie';
        postalsArray['75'] = 'Paris';
        postalsArray['76'] = 'Seine Maritime';
        postalsArray['77'] = 'Seine et Marne';
        postalsArray['78'] = 'Yvelines';
        postalsArray['79'] = 'Deux Sèvres';
        postalsArray['80'] = 'Somme';
        postalsArray['81'] = 'Tarn';
        postalsArray['82'] = 'Tarn et Garonne';
        postalsArray['83'] = 'Var';
        postalsArray['84'] = 'Vaucluse';
        postalsArray['85'] = 'Vendée';
        postalsArray['86'] = 'Vienne';
        postalsArray['87'] = 'Haute Vienne';
        postalsArray['88'] = 'Vosges';
        postalsArray['89'] = 'Yonne';
        postalsArray['90'] = 'Territoire de Belfort';
        postalsArray['91'] = 'Essonne';
        postalsArray['92'] = 'Hauts de Seine';
        postalsArray['93'] = 'Seine Saint Denis';
        postalsArray['94'] = 'Val de Marne';
        postalsArray['95'] = 'Val d\'Oise';
        postalsArray['971'] = 'Guadeloupe';
        postalsArray['972'] = 'Martinique';
        postalsArray['973'] = 'Guyane';
        postalsArray['974'] = 'Réunion';
        postalsArray['975'] = 'Saint Pierre et Miquelon';
        postalsArray['976'] = 'Mayotte';
    }


    static turnover = [
        'Moins de 0,5 millions d\'euros',
        'De 0,5 à moins de 1 millions d\'euros',
        'De 1 millions à moins de 2 millions d\'euros',
        'De 2 millions à moins de 5 millions d\'euros',
        'De 5 millions à moins de 10 millions d\'euros',
        'De 10 millions à moins de 20 millions d\'euros',
        'De 20 millions à moins de 50 millions d\'euros',
        'De 50 millions à moins de 100 millions d\'euros',
        'De 100 millions à moins de 200 millions d\'euros',
        '200 millions d\'euros ou plus',
    ];
}
