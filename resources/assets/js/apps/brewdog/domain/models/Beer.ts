export default class Beer {
    public likes: number = 0;

    constructor(
        public id: number,
        public name: string,
        public image_url: string,
        public ebc: number // this could be a value object
    ) {}

    getType() {
        if (this.ebc <= 4)  { return 'Pale lager, Witbier, Pilsener, Berliner Weisse' }
        if (this.ebc <= 6)  { return 'Maibock, Blonde Ale'; }
        if (this.ebc <= 8)  { return 'Weissbier'; }
        if (this.ebc <= 12) { return 'American Pale Ale, India Pale Ale'; }
        if (this.ebc <= 16) { return 'Weissbier, Saison'; }
        if (this.ebc <= 20) { return 'English Bitter, ESB'; }
        if (this.ebc <= 26) { return 'Biere de Garde, Double IPA'; }
        if (this.ebc <= 33) { return 'Dark lager, Vienna lager, Marzen, Amber Ale'; }
        if (this.ebc <= 39) { return 'Brown Ale, Bock, Dunkel, Dunkelweizen'; }
        if (this.ebc <= 47) { return 'Irish Dry Stout, Doppelbock, Porter'; }
        if (this.ebc <= 57) { return 'Stout'; }
        if (this.ebc <= 69) { return 'Foreign Stout, Baltic Porter'; }
        if (this.ebc >= 70) { return 'Imperial Stout'; } // <= 79
    }
}
