class Post {
  constructor(name, country, club, height, weight, foot, age, img) {
    this.name = name;
    this.country = country;
    this.club = club;
    this.height = height;
    this.weight = weight;
    this.foot = foot;
    this.age = age;
    this.img = img;
  }
}
const app = Vue.createApp({
  data() {
    return {
      inputname: "",
      inputcountry: "",
      inputclub: "",
      minage: "",
      maxage: "",
      preferredfoot: "",
      postList: [
        new Post(
          "Dries Mertens",
          "Belgium",
          "Galatasaray",
          "169 cm",
          "61 kg",
          "Right",
          "35",
          "./img/mertens.png"
        ),
        new Post(
          "Lucas Torreira",
          "Uruguay",
          "Galatasaray",
          "166 cm",
          "60 kg",
          "Right",
          "26",
          "./img/torre.webp"
        ),

        new Post(
          "Fernando Muslera",
          "Uruguay",
          "Galatasaray",
          "190 cm",
          "74 kg",
          "Right",
          "36",
          "./img/muslera.png"
        ),

        new Post(
          "Patrick V.Anholt",
          "Netherlands",
          "Galatasaray",
          "176 cm",
          "67 kg",
          "Left",
          "31",
          "./img/pva.png"
        ),
        new Post(
          "Léo Dubois",
          "France",
          "Galatasaray",
          "178 cm",
          "65 kg",
          "Right",
          "27",
          "./img/dubois.png"
        ),
        new Post(
          "Haris Seferović",
          "Switzerland",
          "Galatasaray",
          "189 cm",
          "85 kg",
          "Left",
          "30",
          "./img/sefer.png"
        ),
        new Post(
          "Kerem Aktürkoğlu",
          "Turkey",
          "Galatasaray",
          "173 cm",
          "71 kg",
          "Right",
          "23",
          "./img/kerem.png"
        ),
        new Post(
          "Erling Haaland",
          "Norway",
          "Borissia Dordmund",
          "173 cm",
          "71 kg",
          "Right",
          "23",
          "./img/halland.webp"
        ),
        new Post(
          "Christiano Ronaldo",
          "Portugal",
          "Manchester United",
          "187 cm",
          "83 kg",
          "Right",
          "37",
          "./img/ronaldo.png"
        ),
        new Post(
          "Lionel Messi",
          "Argentina",
          "Paris Saint-Germain",
          "187 cm",
          "83 kg",
          "Right",
          "37",
          "./img/messi.png"
        ),
      ],
      myArray: [],
      active: true,
      passive: false,
    };
  },

  methods: {
    getRandom() {
      this.postList.sort(() => 0.5 - Math.random());
    },

    searchbyAge() {
      this.active = false;
      this.passive = true;

      if (
        (this.inputname == "",
        this.inputcountry == "",
        this.inputclub == "",
        this.minage == "",
        this.maxage == "",
        this.preferredfoot == "")
      ) {
        alert("Please select");
      } else {
        this.myArray = this.postList.filter((item) => {
          return (
            item.country == this.inputcountry &&
            item.club == this.inputclub &&
            item.foot == this.preferredfoot &&
            item.age >= this.minage &&
            item.age <= this.maxage
          );
        });
      }
    },
  },

  beforeMount() {
    this.getRandom();
  },
});
app.mount("#app");
