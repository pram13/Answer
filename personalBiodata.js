function personalBiodata() {
  let myBiodata = {
    "name": "Putra Pramban Bagus Trisakti",
    "age": 22,
    "address": "Vila Mutiara Gading G4 20 RT.03 RW.14 Kecamatan Tarumajaya. Desa Setia Asih. Kabupaten Bekasi. 17215",
    "hobbies": ["Gaming", "Singing"],
    "is_married": false,
    "school": [
      {
        "name": "SMAN 1 Tarumajaya",
        "year_in": "2012",
        "year_out": "2015",
        "major": "IPA"
      }
    ],
    "skills": [
      {
        "html": "beginner",
        "css": "beginner",
        "javascript": "beginner",
        "jquery": "beginner"
      }
    ],
    "interest_in_coding": true,
  }
  return myBiodata;
}

console.log(personalBiodata())