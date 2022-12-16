let products={

    actionFigures:[
        'naruto',
        'goku',
        'ichigo',
        'tanjiro',
        'saitama',
        'luffy',
        'sakura',
        'sasuke',
        'zoro',
        'vegeta',
        'seiya',
        'kirito',
        'asuna',
        'levi',
        'eren'
    ],

    figures:[],

    
    createCardsFromFigures: function () {
        this.actionFigures.forEach((figure) => {
            this.figures.push(this.createCardId(figure));
        })

        return this.figures;
    },

    createCardId: function (figure) {

        return {
            id: this.createIdWithFigure(figure),
            icon: figure,
        }
    },

    createIdWithFigure: function (figure) {
        return figure + parseInt(Math.random() * 1000);
    },

}

export default products;