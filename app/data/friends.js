// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friendsData = [
    {
        "name": "Danny Zamora",
        "photo": "https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-9/23131663_10101104734834692_3987892265132549345_n.jpg?_nc_cat=0&oh=bb30c7bb0be8fcfdb779cb488b4e1e95&oe=5C078925",
        "scores": [
        "4",
        "5",
        "5",
        "3",
        "4",
        "2",
        "5",
        "3",
        "1",
        "5"
        ]
    },
    {
        "name": "Ahmed",
        "photo": "https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAq7AAAAJDAwYzI4NTQ4LWYwZWUtNGFkYS1hNTYwLTZjYzkwY2ViZDA3OA.jpg",
        "scores": [
        "5",
        "1",
        "4",
        "4",
        "5",
        "1",
        "2",
        "5",
        "4",
        "1"
        ]
    },
  ];
  
  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = friendsData;