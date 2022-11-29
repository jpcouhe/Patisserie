import Pastry from "../models/pastry.models.js";


class PastryService{
/*    pastryList=[
        new Pastry("1", "Paris-brest", "Le paris-brest est une pâtisserie traditionnelle d'origine française, en forme de roue de vélo pour rendre hommage à la course cycliste Paris-Brest-Paris. ", "assets//paris_brest_1.jpg"),
        new Pastry("2", "Kouign-amann", "Le kouign-amann est une pâtisserie-boulangère et spécialité culinaire emblématique de la cuisine bretonne, originaire de Douarnenez dans le Finistère en Bretagne, à base de pâte feuilletée, de beurre demi-sel et de sucre caramélisé. ", "assets//kouignamann_1.jpg"),
        new Pastry("3", "Saint-Honoré", "Le Saint-Honoré est un grand classique de la pâtisserie. Il a été créé par Chiboust en 1840, un pâtissier de la rue Saint-Honoré à Paris. Il se compose d’une base de pâte feuilletée, de deux bandes de pâte à choux sur lesquels sont posés des choux garnis de crème Chiboust. Cette crème recouvre aussi le centre, sous la crème Chantilly… dressée bien sûr à la douille Saint-Honoré !", "assets//saint_honore_1.jpg")

    ]*/


    pastryList=[
        {
            "id": 1,
            "name": "Paris-brest",
            "description": "Le paris-brest est une pâtisserie traditionnelle d'origine française, en forme de roue de vélo pour rendre hommage à la course cycliste Paris-Brest-Paris. ",
            "recipeSummary": "Amandes, beurre pommade, eau, farine, lait, œufs, praliné, sel, sucre",
            "origin": {
                "id": 1,
                "name": "Maisons-Laffitte",
                "latitude": 48.9461437,
                "longitude": 2.1450951
            },
            "images": [
                {
                    "id": 1,
                    "name": "paris_brest_1.jpg"
                },
                {
                    "id": 2,
                    "name": "paris_brest_2.jpg"
                }
            ]
        },
        {
            "id": 2,
            "name": "Kouign-amann",
            "description": "Le kouign-amann est une pâtisserie-boulangère et spécialité culinaire emblématique de la cuisine bretonne, originaire de Douarnenez dans le Finistère en Bretagne, à base de pâte feuilletée, de beurre demi-sel et de sucre caramélisé.",
            "recipeSummary": "Farine, eau, levure, sel, beurre demi-sel, sucre et lait",
            "origin": {
                "id": 2,
                "name": "Douarnenez",
                "latitude": 48.093228,
                "longitude": -4.328619
            },
            "images": [
                {
                    "id": 3,
                    "name": "kouignamann_1.jpg"
                },
                {
                    "id": 4,
                    "name": "kouignamann_2.jpg"
                }
            ]
        },
        {
            "id": 3,
            "name": "Saint-Honoré",
            "description": "Le Saint-Honoré est un grand classique de la pâtisserie. Il a été créé par Chiboust en 1840, un pâtissier de la rue Saint-Honoré à Paris. Il se compose d’une base de pâte feuilletée, de deux bandes de pâte à choux sur lesquels sont posés des choux garnis de crème Chiboust. Cette crème recouvre aussi le centre, sous la crème Chantilly… dressée bien sûr à la douille Saint-Honoré !",
            "recipeSummary": "Lait entier, sucre semoule, jaunes d'oeufs, farine, maizena, vanille, mascarpone, sucre glace",
            "origin": {
                "id": 3,
                "name": "Paris",
                "latitude": 48.86472228587096,
                "longitude": 2.332367479119831
            },
            "images": [
                {
                    "id": 5,
                    "name": "saint_honore_1.jpg"
                },
                {
                    "id": 6,
                    "name": "saint_honore_2.webp"
                }
            ]
        },
        {
            "id": 4,
            "name": "Mochi",
            "description": "Le mochi fait partie de la grande famille des wagashis, pâtisseries traditionnelles japonaises parmi lesquelles figurent par exemple les yokans, gelées à base d’agar-agar, ainsi que les nerikiris, sculptures miniatures & comestibles.",
            "recipeSummary": "Farine de riz gluant, sucre blanc, eau, fécule de maïs",
            "origin": {
                "id": 4,
                "name": "Japon",
                "latitude": 35.6828387,
                "longitude": 139.7594549
            },
            "images": [
                {
                    "id": 7,
                    "name": "moshi_1.jpg"
                },
                {
                    "id": 8,
                    "name": "moshi_2.jpg"
                }
            ]
        },
        {
            "id": 5,
            "name": "Tarte au citron",
            "description": "La tarte au citron est une tarte sucrée garnie de crème à base de citron. Elle ne comprend aucun fruit. La crème est un mélange d'œufs, de sucre, de jus de citron et de zeste de citron. Également appelée lemon curd, c'est cette crème qui donne à la tarte son goût.",
            "recipeSummary": "80 g de sucre glace, 3 g de sel, 1 oeuf, 200 g de farine",
            "origin": {
                "id": 5,
                "name": "Rennes",
                "latitude": 48.1113387,
                "longitude": -1.6800198
            },
            "images": [
                {
                    "id": 9,
                    "name": "tarte_citron_1.jpg"
                },
                {
                    "id": 10,
                    "name": "tarte_citron_2.jpg"
                }
            ]
        },
        {
            "id": 6,
            "name": "Tarte au fraise",
            "description": "Une tarte (pour plusieurs convives) ou tartelette (déclinaison réduite pour un seul consommateur) est une spécialité culinaire, constituée d'une pâte servant de support à une garniture qui peut être sucrée ou salée.",
            "recipeSummary": "500 g de fraises, beurre , 30g de farine, 25cl de lait, 1 œufs, 40g de sucre",
            "origin": {
                "id": 6,
                "name": "Lamotte Beuvron",
                "latitude": 47.601677,
                "longitude": 2.025165
            },
            "images": [
                {
                    "id": 11,
                    "name": "tarte_fraises_1.jpg"
                },
                {
                    "id": 12,
                    "name": "tarte_fraises_2.jpg"
                }
            ]
        },
        {
            "id": 7,
            "name": "Cannelé",
            "description": "Le cannelé, également écrit canelé, est un petit gâteau bordelais, en forme de cylindre cannelé, à pâte molle et tendre, parfumé au rhum et à la vanille, et cuit dans un moule originellement en cuivre, qui lui donne une fine croûte caramélisée.",
            "recipeSummary": "50 cl de lait, 1/2 gousse de vanille, 1 c.a.s de rhum, 100g de farine, 250g de sucre, 50g de beurre doux, 1 pincé de sel, 2 oeufs entiers, 2 jaune d'oeuf",
            "origin": {
                "id": 7,
                "name": "Bordeaux",
                "latitude": 44.83,
                "longitude": -0.57
            },
            "images": [
                {
                    "id": 13,
                    "name": "cannele_1.jpg"
                },
                {
                    "id": 14,
                    "name": "cannele_2.jpg"
                }
            ]
        },
        {
            "id": 8,
            "name": "Chouquettes",
            "description": "La chouquette est une petite pâtisserie de pâte à choux saupoudrée de sucre en gros grains et cuite au four. Pour la petite histoire, l'origine de la chouquette également appelée pâte de choux date du 16e siècle. Elle a été inventée par un pâtissier italien nommé POPELINI qui à l'époque faisait partie de la suite de la Reine Catherine de Médicis. Il confectionnait un gâteau du nom de «Popelin». En effet, ce gâteau était réalisé à base d'une pâte desséchée sur le feu. Comme toute chose subite des modifications, en 1769, Avice perfectionna la pâte qui devient choux grillés.",
            "recipeSummary": "eau , beurre doux, farine, sucre semoule, sel, levure chimique, sucre vanillé, oeuf, sucre en grain",
            "origin": {
                "id": 8,
                "name": "Chaumont-sur-Loire",
                "latitude": 47.4781489,
                "longitude": 1.1903903
            },
            "images": [
                {
                    "id": 15,
                    "name": "chouquettes_1.jpg"
                },
                {
                    "id": 16,
                    "name": "chouquettes_2.jpg"
                }
            ]
        },
        {
            "id": 9,
            "name": "splatzchen",
            "description": "Voici des Plätzchen, c'est-à-dire des petits gâteaux secs (en général des sablés, mais ce sont aussi des pains d'épices, des roses des sables, et pleins de choses encore...) savoureux. A préparer en famille ou avec des amis. Recette différente et originale!",
            "recipeSummary": "250 beurre | 1 oeuf | 100 sucre | 100 noisettes | 150 farine | 2cc canelle |confiture",
            "origin": {
                "id": 9,
                "name": "Allemagne",
                "latitude": 51.165691,
                "longitude": 10.451526
            },
            "images": [
                {
                    "id": 17,
                    "name": "splatzchen_1.jpg"
                },
                {
                    "id": 18,
                    "name": "splatzchen_2.jpg"
                }
            ]
        },
        {
            "id": 10,
            "name": "Carrot cake",
            "description": "Il n’est pas si facile de retracer la première utilisation de la carotte dans des gâteaux\ncar elle a remplacé très tôt le sucre, denrée rare et onéreuse. On estime toutefois que\nles prémisses du carrot cake remontent au Moyen Âge, époque où il était commun d’utiliser\ndes légumes comme des courges pour préparer des puddings.\n\nCertains estiment même que le carrot cake est un dérivé d’une recette arabe datant du\nXe siècle, le T'Khabis al-jazar, une sorte de purée de carottes sucrée.\n\nLa première recette du carrot cake aurait été mise au point en Suisse allemande, et non en\nAngleterre comme on le pense souvent. On lui donnait alors le nom de « Rüeblitorte ».\n\nQuant à la première mention du carrot cake, elle date du XVIIIe siècle. Il faut dire que\nle gâteau connu une certaine célébrité à ce moment. On raconte qu’en 1783, le général\nGeorge Washington (il sera président des États-Unis en 1789), célébra le départ des\ncolons britanniques en mangeant le fameux gâteau aux carottes, le tout arrosé de 13\ntoasts symbolisant cette victoire historique.\n\nOn assimile le carrot cake à la cuisine anglaise car la recette est devenue célèbre dans\nle pays au XXe siècle. En effet, lors de la Seconde Guerre mondiale, les bombardiers anglais\nse démarquaient par la précision de leur tir. Le gouvernement britannique expliqua cela par\nleur grande consommation des carottes, réputées bonnes pour la vue. En réalité, c’était le\nradar, la nouvelle invention ultra secrète de l’époque, à qui l’on devait ces performances.\nMais pas question de divulguer cette information de haut-niveau, d’où cette rumeur sur\nles carottes. Qu’importe puisque les Anglais y crurent et commencèrent à en manger sous\ntoutes les formes possibles : soupe, jus et gâteaux de carottes ! [...]\n\nL’histoire du carrot cake ne se termine pas là ! On doit sa popularisation aux États-Unis\npar George C. Page. Au lendemain de la guerre, cet homme d’affaires posséda d’énormes\nquantités de boîtes de conserves de carottes. Il contacta un ami pâtissier en lui\ndemandant de transformer ces carottes en une recette appétissante. Il les cuisina en\ncarrot cake sucré, idée qui plut à d’autres pâtissiers qui proposèrent le dessert sur leur\nmenu. C’est ainsi que le gâteau aux carottes se popularisa aux États-Unis !\n\nLa recette connue encore plus de succès dans les années 60 lorsque l’on commença à servir\nle gâteau avec un glaçage au fromage à la crème (cream cheese). Depuis, la recette n’a plus\nchangé. Il existe même une journée dédiée au gâteau, c'est le National Carrot Cake Day que\nles Américains fêtent chaque 3 février.\n\nIngrid, « La drôle d’histoire du carrot cake »,\nwww.laminutegourmandeparis.com,\nédité le 19 avril 2022, https://www.laminutegourmandeparis.com/post/dr%C3%B4le-histoire-carrot-cake (consulté le 25/07/2022)",
            "recipeSummary": "Ingrédients pour 6 à 8 personnes: 280g de carottes, 240g de farine, 3 gros œufs ou 4 petits, 130g de sucre cassonade, 130g de beurre fondu, 1 gousse de vanille, 50g de raisins secs, 25g de noix de pécan concassées grossièrement, 25g de noix concassées grossièrement, 1 orange de bonne taille pour récupérer le zeste et le jus, 2 cuillères à café de cannelle, 1 cuillère à café de bicarbonate, Une demi cuillère à café de sel, Un demi sachet de levure chimique, Quelques tours de moulin poivre noir \nPour le glaçage: 200g sucre glace, 50g de beurre ramolli, 100g de fromage Philadelphia, 2 ou 3 gouttes de jus de citron",
            "origin": {
                "id": 10,
                "name": "Canton d'Argovie",
                "latitude": 47.1704896,
                "longitude": 7.7771688
            },
            "images": [
                {
                    "id": 19,
                    "name": "carrot_cake_1.jpg"
                },
                {
                    "id": 20,
                    "name": "carrot_cake_2.jpg"
                }
            ]
        },
        {
            "id": 11,
            "name": "Macaron",
            "description": "Le macaron est un petit gâteau français à l'amande...",
            "recipeSummary": "300g de sucre glace,80g de farine d'amandes,2 cuillères à soupe de cacao,Une pincée de sel,2 blancs d'œuf, à température ambiante,5 cuillères à soupe de sucre en poudre",
            "origin": {
                "id": 11,
                "name": "Saint-Émilion",
                "latitude": 44.8931452,
                "longitude": -0.1560662
            },
            "images": [
                {
                    "id": 21,
                    "name": "macaron_1.webp"
                },
                {
                    "id": 22,
                    "name": "macaron_2.jpg"
                }
            ]
        }
    ]

    getAll(){
        return this.pastryList
    }

    getById(id){
        return this.pastryList.filter(element => element.id === id)
    }

    delete(id){
        this.pastryList.filter(e => e.id != id)
    }

}

export default new PastryService()