let p = {
  fullName: function (city, country) {
    console.log(
      this.firstName + " " + this.lastName + " " + city + " " + country
    );
  },
};
let p1 = {
  firstName: "Marcus",
  lastName: "Vang",
};
let p2 = {
  firstName: "Morten",
  lastName: "Vang",
};

p.fullName.call(p1, "Rønne", "Danmark");
p.fullName.apply(p2, ["Rønne", "Danmark"]);