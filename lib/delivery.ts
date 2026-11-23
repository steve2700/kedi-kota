// Areas we serve. Change them here. There is no fixed delivery price: collection is free and
// anything delivered is confirmed with the customer on WhatsApp (or ordered on Uber Eats).
export const DELIVERY = {
  zones: [
    "Norkem Park", "Kempton Park CBD", "Edleen", "Van Riebeeck Park", "Croydon", "Esther Park", "Terenure", "Chloorkop",
    "Tembisa", "Phomolong", "Glen Marais", "Rhodesfield", "Birchleigh", "Birchleigh North", "Birch Acres", "Bonaero Park",
    "Aston Manor", "Isando", "Spartan", "Pomona", "Kempton Park West",
  ],
  otherLabel: "Somewhere else",
}
export const slugify = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")
