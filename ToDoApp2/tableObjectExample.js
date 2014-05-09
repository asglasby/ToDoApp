var tableOjbect = {
    top: 'Shiny',
    legs: 4,
    surface: 'Wooden',
    screws: { phillips: 5, flathead: 15 },
    dimensions: [12, 36, 60],
    inUse: true,
    foldUp: function () {
        return this.legs = 0;
    }

    unFold: function () {
        this.legs = 4;
    }
};

va result = tableOjbect['foldUp']();

for (var tabelPropame in tableObject) {
    tableOjbect[tabkePropName];
}