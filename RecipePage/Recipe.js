
var check = true;
var category_data={
    "Biryani's" : [0 , "../assets/images/Categories/biryani.jpg"],
    "Starter's" : [1 , "../assets/images/Categories/starters.jpeg"],
    "Dessert's" : [2 , "../assets/images/Categories/Desserts.jpg" ],
    "Burger's"  : [3 , "https://images.immediate.co.uk/production/volatile/sites/2/2021/05/Burger-fdbcbf4.jpg?quality=90&webp=true&resize=2200,1465"],
    "Non-Veg" : [4 , "https://img.freepik.com/premium-photo/bowl-chicken-curry-with-green-white-rim_1239531-87.jpg?w=1380"],
    "StreetFood" : [5 , "https://img.freepik.com/free-photo/close-up-delicious-asian-food_23-2150535902.jpg?t=st=1722055934~exp=1722059534~hmac=93bc5380f11b95f9a06811371cb77f055e9bbc132c2c5c003ba13aed6ce9aecd&w=360"],
    "Pizza" : [6 , "https://img.freepik.com/premium-photo/margherita-pizza-with-mozzarella-cheese-bubbling_1194832-19275.jpg?w=996"],
    "Veg Items" : [7 , "https://img.freepik.com/free-photo/high-angle-delicious-pakistan-dish-assortment_23-2148821527.jpg?t=st=1722056396~exp=1722059996~hmac=3de8c6d0b58a4000812b7dea90ffc11f1dd1d63299a6b672cf6f25cc224775ca&w=996" ],
    "Salads" : [8 , "https://img.freepik.com/free-photo/side-view-salad-herring-fur-coat-with-tomatoes-radishes_140725-13979.jpg?t=st=1722057296~exp=1722060896~hmac=2f6b9c5b5299de15a1948468f63ffe54848422cb7216b3b055bd4e5acbcbc208&w=740"],
    "Pickles" : [9 , "https://athithigruhafoods.in/wp-content/uploads/2018/09/Garlic-Pickle.jpg"],
    "HomeMakes" : [10 , "../assets/images/Categories/Desserts.jpg" ],
    "Tiffins" : [11 , "../assets/images/Categories/Desserts.jpg" ]
  }
// console.log(category_data)

var item_data = [
      [
        {
          src: "https://vismaifood.com/storage/app/uploads/public/b3b/132/dc7/thumb__700_0_0_0_auto.jpg",
          stars:5,
          name : "Avakai Chicken Biryani",
          region:"",
        },
        {
          src  : "https://img.freepik.com/premium-photo/vibrant-photo-taste-tradition-heavenly-biri_1177965-4010.jpg",
          stars : 5,
          name :"Mutton Biryani ",
        },
        {
          src : "https://lh3.googleusercontent.com/EJvV6DVonRsslbtKliaaTg8FaTym80F1-mNKU_XU0o1QekSrqPGGg27nWdkapkX2RCD-9ckDS4uWKEAOBX7Mh69g0Qg=w1200-rw",
          stars : 5,
          name :"Pot Biryani",
        },
        {
          src : "https://img.freepik.com/free-photo/close-up-appetizing-ramadan-meal_23-2151182540.jpg",
          stars : 5,
          name : "Chicken Dum Biryani",
          region:"Hyderabad"
        },
        {
          src:"https://img.freepik.com/premium-photo/photo-bowl-delicious-chicken-biriyani-pot_1025753-27867.jpg",
          stars : 4,
          name :"Butter Chicken Biryani",
          region:"Kerala"
        },
        
        {
          src:"https://img.freepik.com/premium-photo/vibrant-colorful-biryani-cooked-with-variety-spices-herbs_979495-6091.jpg",
          stars:4,
          name : "Chicken 65 Biryani",
          region:"Vizag"
        },
        {
          src : "https://www.sandyathome.com/wp-content/uploads/2023/04/gongura-shrimp-biryani-500x500.jpg",
          stars : 4,
          name : "Gongura Royalla Biryani",
          region:"Vijayawada"
        },
        {
          src : "https://ruralkingz.com/wp-content/uploads/2020/08/fried.jpg",
          stars : 4,
          name : "Chicken Fry Piece Biryani",
          region:"Banglore"
        },
        {
          src : "https://img.freepik.com/premium-photo/spicy-indian-chicken-biryani-captured-stunning-food-photo-against-black-backdrop_117038-27113.jpg" , 
          stars : 5 ,
          name : "Chicken Lollipop Biryani",
          region:"Hyderabad"
        },
        {
          src : "https://i.pinimg.com/originals/24/ac/bb/24acbb7530fb22151d3f3f1581fb947d.png",
          stars : 4,
          name : "Mixed Non Veg Biryani",
          region:"Hyderabad"
        },
        {
          src : "https://www.pavaniskitchen.com/wp-content/uploads/2021/04/egg-recipes.jpg" ,
          stars : 5,
          name : "Chicken Mughlai Biryani",
          region:"Kolkata"
        },
        {
          src : "https://imagevars.gulfnews.com/2022/03/11/Guntur-Gongura-Biryani-_17f793bfa09_large.jpg",
          stars: 4, 
          name : "Gongura Chicken Biryani",
          region:"Ravulapalem"
        }
      ],
    [
      
      {
        src: "https://static.toiimg.com/thumb/75599496.cms?imgsize=1852719&width=800&height=800",
        stars:4,
        name : "Chicken Keema",
        region : "Delhi",
      },
      {
        src: "https://media.istockphoto.com/id/956293410/photo/samosas-with-spicy-lamb.jpg?s=612x612&w=0&k=20&c=yqeOcqdNiCd5RGly0eYanPf-yqMPS6Gz9nESJ9rigEk=",
        stars:5,
        name : "Mutton Keema Samosa",
        region : "Kolkata",
      },
      {
        src: "https://img.freepik.com/premium-photo/bowl-soup-with-tomatoes-green-leaves_975681-1750.jpg",
        stars:5,
        name : "Creamy Tomato Soup",
        region : "Italy",
      },
      {
        src: "https://img.freepik.com/premium-photo/plate-chicken-wings-with-ketchup-parsley_442337-71103.jpg?w=996",
        stars:5,
        name : "Grilled Chicken Wings",
        region : "Bangalore",
      },
      {
        src: "https://cdn.tarladalal.com/members/9306/big/big_paneer-samosa-(-paneer-snacks-)-1791.jpg",
        stars:4,
        name : "Mini Paneer Samosa",
        region : "Punjab",
      },
      {
        src: "https://img.freepik.com/free-photo/delicious-tacos-table_23-2150770479.jpg",
        stars:5,
        name : "Mexican Chicken Fajitas",
        region : "Mumbai",
      },
      {
        src: "https://img.freepik.com/free-photo/top-view-delicious-kebab-slate-with-salad-ketchup_23-2148685527.jpg?t=st=1721902110~exp=1721905710~hmac=af05f703bb0544430ba77633cc698fb494c4968b921e28b70a6607686be33c46&w=2000",
        stars:4,
        name : "Murgh Malai Kebab",
        region : "Lucknow",
      },
      {
        src: "https://img.freepik.com/premium-photo/platter-paneer-tikka-served-with-crispy-onion-bha_1196052-77.jpg" ,
        stars:4,
        name : "Paneer Pakora",
        region : "Rajasthan",
      },
      {
        src: "https://i0.wp.com/zulekhaskitchen.com/wp-content/uploads/2014/03/EzyWatermark1812050353121212.png?resize=750%2C500&ssl=1",
        stars:4,
        name : "Bheja Fry",
        region :"Hyderabad",
      },
      {
        src: "https://img.freepik.com/free-photo/chicken-skewers-with-slices-sweet-peppers-dill_2829-18809.jpg",
        stars:5,
        name : "Paneer Tikka",
        origin : "Vizag",
      },
      {
        src: "https://wearenotmartha.com/wp-content/uploads/Baked-Zucchini-Chips-2-2-500x500.jpg",
        stars:5,
        name : "Air Fryer Zucchini Chips",
        region : "United States",
      },
      {
        src: "https://www.ekunji.com/wp-content/uploads/2015/04/papdi-chaat-recipe.jpg",
        stars:4,
        name : "Papdi Chaat",
        region : "Varanasi",
      },
    ],
    [
      {
        src: "https://www.foodandwine.com/thmb/icW1Ihr9TrvgsKSfK2BYr0rJD9M=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/strawberryshortcake_ft_recipe201954-2000-2c0255ecbf6e4010929b25a9fe7edb4b.jpg",
        stars:5,
        name : "Strawberry Shortcake",
      },
      {
        src: "https://www.foodandwine.com/thmb/8kG9exL-yA6jgsy5n6rZpkLqxUc=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/HD-201301-r-choc-cupcake-peanut-butter-filling-9171713459fd4d97815ed4b5b8bd6ba9.jpg",
        stars:5,
        name : "Chocolate Cup Cake",
      },
      {
        src: "https://www.tasteofhome.com/wp-content/uploads/2021/01/soan-papdi-indian-dessert.jpg?fit=700,700",
        stars:5,
        name : "Soan Papdi",
        region:"Kakinada"
      },
      {
        src: "https://media.cnn.com/api/v1/images/stellar/prod/181127110638-21-50-sweets-travel-black-forest-cake.jpg?q=w_1015,c_fill/f_webp",
        stars:5,
        name : "Black Forest Cake",
        region :" Germany",
      },
      {
        src: "https://i.pinimg.com/736x/d9/ca/46/d9ca46ad7f0ea797cc75bbe7bf28c3bc.jpg",
        stars:5,
        name : "Gulab Jamun",
        region : "India",
      },
      {
        src: "https://media.cnn.com/api/v1/images/stellar/prod/181127111010-22-50-sweets-travel-cardamom-buns.jpg?q=w_1015,c_fill/f_webp",
        stars:5,
        name : "Cardamom Buns",
        region:"Sweden",
      },
      {
        src:"https://media.cnn.com/api/v1/images/stellar/prod/181127105254-08-50-sweets-travel-donuts.jpg?q=w_1015,c_fill/f_webp",
        stars:5,
        name : "Doughnuts",
        region:"United States",
      },
      {
        src: "https://media.cnn.com/api/v1/images/stellar/prod/181127113350-38-50-sweets-travel-kulfi.jpg?q=w_1015,c_fill/f_webp",
        stars:5,
        name : "Kulfi",
        region : "India",
      },
      {
        src: "https://www.tasteofhome.com/wp-content/uploads/2021/01/gajar-ka-halwa-indian-desserts.jpg?fit=700,700",
        stars:5,
        name : "Carrot Halwa",
        region:"India"
      },
      {
        src: "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/moumita.malla-gmail.com/traditional_rasmalai_recipe.jpg",
        stars:5,
        name : "Ras Malai",
        region:"Vizag"
      },
      {
        src: "https://static.toiimg.com/thumb/53099699.cms?width=1200&height=900",
        stars:5,
        name : "Jalebi ",
        region:"Kakinada"
      },
      {
        src: "https://www.tasteofhome.com/wp-content/uploads/2021/01/rasmalai-indian-dessert.jpg?fit=700,700",
        stars:5,
        name : "Strawberry Shortcake",
        region:"India"
      },
    ],
    [
      {
        src: "https://hips.hearstapps.com/hmg-prod/images/turkey-burger-lead-6481ed42f294e.jpg?crop=0.669xw:1.00xh;0.115xw,0&resize=980:*",
        stars:5,
        name : "Turkey Burger",
        region:""
      },
      {
        src: "https://hips.hearstapps.com/hmg-prod/images/singleimagebug-chicken-burger-1556207758.jpg?crop=1xw:0.9453781512605042xh;center,top&resize=980:*",
        stars:5,
        name : "Chicken Burger",
        region:"Kakinada"
      },
      {
        src: "https://hips.hearstapps.com/hmg-prod/images/210331-delish-burger-anatomy-21238-eb-1651775542.jpeg?crop=0.615xw:0.615xh;0.183xw,0.0687xh&resize=980:*",
        stars:5,
        name : "Classic Cheese Burger",
        region:"Kakinada"
      },
      {
        src: "https://images.immediate.co.uk/production/volatile/sites/2/2021/05/Burger-fdbcbf4.jpg?quality=90&webp=true&resize=2200,1465",
        stars:5,
        name : "Butter Burger",
        region:"Kakinada"
      },
      {
        src: "https://hips.hearstapps.com/hmg-prod/images/banh-mi-turkey-burger-secondary-6578982fea00a.jpg?crop=0.668xw:1.00xh;0.0612xw,0&resize=980:*",
        stars:5,
        name : "Bánh Mì Turkey Burger",
        region:"Kakinada"
      },
      {
        src: "https://hips.hearstapps.com/hmg-prod/images/copycat-shake-shack-burger-4-min-1649427734.jpg?crop=0.447xw:1.00xh;0.355xw,0&resize=980:*",
        stars:5,
        name : "Copycat Shack Burger",
        region:"Kakinada"
      },
      {
        src: "https://hips.hearstapps.com/hmg-prod/images/del039924-thai-sweet-chili-turkey-burger-web-002-bjg-hi-res-index-65faf87f04888.jpg?crop=0.335xw:1.00xh;0.643xw,0&resize=980:*",
        stars:5,
        name : "Chili Turkey Burger",
        region:"Kakinada"
      },
      {
        src: "https://www.tasteofhome.com/wp-content/uploads/2021/01/soan-papdi-indian-dessert.jpg?fit=700,700",
        stars:5,
        name : "Soan Papdi",
        region:"Kakinada"
      },
      {
        src: "https://www.tasteofhome.com/wp-content/uploads/2021/01/soan-papdi-indian-dessert.jpg?fit=700,700",
        stars:5,
        name : "Soan Papdi",
        region:"Kakinada"
      },
      {
        src: "https://images.immediate.co.uk/production/volatile/sites/2/2021/05/Burger-fdbcbf4.jpg?quality=90&webp=true&resize=2200,1465",
        stars:5,
        name : "Butter burgers",
        region:"Kakinada"
      },
      {
        src: "https://www.tasteofhome.com/wp-content/uploads/2021/01/soan-papdi-indian-dessert.jpg?fit=700,700",
        stars:5,
        name : "Soan Papdi",
        region:"Kakinada"
      },
      {
        src: "https://www.tasteofhome.com/wp-content/uploads/2021/01/soan-papdi-indian-dessert.jpg?fit=700,700",
        stars:5,
        name : "Soan Papdi",
        region:"Kakinada"
      },
    ],
    [
      {
        src: "https://img.freepik.com/premium-photo/bowl-chicken-curry-with-green-white-rim_1239531-87.jpg?w=1380",
        stars:5,
        name : "Naatukodi Pulusu",
        region:"Kakinada"
      },
      {
        src: "https://vismaifood.com/storage/app/uploads/public/770/92e/8e6/thumb__700_0_0_0_auto.jpg",
        stars:5,
        name : "Fish Curry",
        region:"Kakinada"
      },
      {
        src: "https://img.freepik.com/premium-photo/spicy-beef-curry-goan-style-beef-vindaloo-traditional-indian-lamb-beef-curry_781325-3643.jpg?w=1380",
        stars:5,
        name : "Mutton Curry",
        region:"Kakinada"
      },
      {
        src: "https://vismaifood.com/storage/app/uploads/public/8c6/190/485/thumb__700_0_0_0_auto.jpg",
        stars:5,
        name : "Prawns Curry",
        region:"Kakinada"
      },
      {
        src: "https://www.tasteofhome.com/wp-content/uploads/2021/01/soan-papdi-indian-dessert.jpg?fit=700,700",
        stars:5,
        name : "Soan Papdi",
        region:"Kakinada"
      },
      {
        src: "https://img.freepik.com/premium-photo/bowl-chicken-curry-with-green-white-rim_1239531-87.jpg?w=1380",
        stars:5,
        name : "Soan Papdi",
        region:"Kakinada"
      },
      {
        src: "https://images.immediate.co.uk/production/volatile/sites/2/2021/05/Burger-fdbcbf4.jpg?quality=90&webp=true&resize=2200,1465",
        stars:5,
        name : "Butter burgers",
        region:"Kakinada"
      },
      {
        src: "https://www.tasteofhome.com/wp-content/uploads/2021/01/soan-papdi-indian-dessert.jpg?fit=700,700",
        stars:5,
        name : "Soan Papdi",
        region:"Kakinada"
      },
      {
        src: "https://www.tasteofhome.com/wp-content/uploads/2021/01/soan-papdi-indian-dessert.jpg?fit=700,700",
        stars:5,
        name : "Soan Papdi",
        region:"Kakinada"
      },
      {
        src: "https://images.immediate.co.uk/production/volatile/sites/2/2021/05/Burger-fdbcbf4.jpg?quality=90&webp=true&resize=2200,1465",
        stars:5,
        name : "Butter burgers",
        region:"Kakinada"
      },
      {
        src: "https://www.tasteofhome.com/wp-content/uploads/2021/01/soan-papdi-indian-dessert.jpg?fit=700,700",
        stars:5,
        name : "Soan Papdi",
        region:"Kakinada"
      },
      {
        src: "https://www.tasteofhome.com/wp-content/uploads/2021/01/soan-papdi-indian-dessert.jpg?fit=700,700",
        stars:5,
        name : "Soan Papdi",
        region:"Kakinada"
      },
      {
        src: "https://images.immediate.co.uk/production/volatile/sites/2/2021/05/Burger-fdbcbf4.jpg?quality=90&webp=true&resize=2200,1465",
        stars:5,
        name : "Butter burgers",
        region:"Kakinada"
      },
      {
        src: "https://www.tasteofhome.com/wp-content/uploads/2021/01/soan-papdi-indian-dessert.jpg?fit=700,700",
        stars:5,
        name : "Soan Papdi",
        region:"Kakinada"
      },
      {
        src: "https://www.tasteofhome.com/wp-content/uploads/2021/01/soan-papdi-indian-dessert.jpg?fit=700,700",
        stars:5,
        name : "Soan Papdi",
        region:"Kakinada"
      },
      {
        src: "https://www.tasteofhome.com/wp-content/uploads/2021/01/soan-papdi-indian-dessert.jpg?fit=700,700",
        stars:5,
        name : "Soan Papdi",
        region:"Kakinada"
      },
    ],
    [
      {
      src:"https://img.freepik.com/free-photo/close-up-delicious-asian-food_23-2150535902.jpg?t=st=1722055934~exp=1722059534~hmac=93bc5380f11b95f9a06811371cb77f055e9bbc132c2c5c003ba13aed6ce9aecd&w=360",
      stars:4,
      name: "Pani Puri",
      region : "Kolkata"
      },
      {
      src:"https://img.freepik.com/premium-photo/bhelpuri-chaat-chat-is-road-side-tasty-food-from-india-served-bowl-plate-selective-focus_466689-37084.jpg?w=996",
      stars:4,
      name: "Chat",
      region : "Mumbai"
      },
      
      {
      src:"https://img.freepik.com/premium-photo/mumbai-style-pav-bhaji-is-fast-food-dish-from-india-consists-thick-vegetable-curry-served-with-soft-bread-roll-served-plate_466689-2286.jpg?w=360",
      stars:5,
      name: "Pav Bhaji",
      region : "Mumbai"
      },
      {
      src:"https://img.freepik.com/premium-photo/aalu-bonda-is-indian-pakora-batata-vada-served-with-ketchup_466689-72708.jpg?w=996",
      stars:5,
      name: "Vada Pav",
      region : "Gujarat"
      },
      
      ],
      [
        {
          src:"https://img.freepik.com/premium-photo/margherita-pizza-with-mozzarella-cheese-bubbling_1194832-19275.jpg?w=996",
          stars:4,
          name: "Margherita Pizza",
          region : "London"
          },
          {
          src:"https://img.freepik.com/free-photo/side-view-pizza-with-chicken-mushrooms-served-with-sauce-vegetables-salad-wooden-plate_140725-12018.jpg?t=st=1722056203~exp=1722059803~hmac=882ec5c3c85a05815355851b1ad7596f7867409fb7a6ea48608295850020ff61&w=740",
          stars:4,
          name: "BBQ Chicken Pizza",
          region : "Canada"
          },
          {
          src:"https://img.freepik.com/premium-photo/pizza-with-cheese-fries-wooden-table-top-view_124907-192.jpg?w=996",
          stars:3,
          name: "Veggie Pizza",
          region : "Paris"
          },
          {
          src:"https://img.freepik.com/free-photo/high-angle-composition-with-delicious-pakistan-meal_23-2148821540.jpg?t=st=1722056328~exp=1722059928~hmac=6b3de13c5765a4d49e2bd30c711eb39499fccb8f49e102730d49874c9515625b&w=996",
          stars:5,
          name: "Panner Butter Masala",
          region : "Delhi"
          },
      ],[
        {
          src:"https://img.freepik.com/free-photo/high-angle-delicious-pakistan-dish-assortment_23-2148821527.jpg?t=st=1722056396~exp=1722059996~hmac=3de8c6d0b58a4000812b7dea90ffc11f1dd1d63299a6b672cf6f25cc224775ca&w=996",
          stars:4,
          name: "Vegetable Biryani",
          region : "Hyderabad"
          },
          {
          src:"https://img.freepik.com/free-photo/pre-prepared-food-showcasing-ready-eat-delicious-meals-go_23-2151431675.jpg?t=st=1722056870~exp=1722060470~hmac=deedab757ea79bd7387d02d3c333a5bc6a76a9a69f95a0b42d6059b93028d244&w=996",
          stars:3,
          name: "Aloo Gobi",
          region : "Delhi"
          },
          {
          src:"https://img.freepik.com/free-photo/arrangement-apricots-cloth-with-jar-compote_23-2148647922.jpg?t=st=1722056988~exp=1722060588~hmac=f49189e7ef874e78433e2006cacb42efaa90c76baf082788cf34ee18b95aada2&w=996",
          stars:5,
          name: "Mango Pickle",
          region : "Old Delhi"
          },
          {
          src:"https://i.ytimg.com/vi/S5fYbjBb0zs/maxresdefault.jpg",
          stars:4,
          name: "Lemon Pickle",
          region : "Tamilnadu"
          },
      ],
      [
        {
          src:"https://img.freepik.com/free-photo/side-view-salad-herring-fur-coat-with-tomatoes-radishes_140725-13979.jpg?t=st=1722057296~exp=1722060896~hmac=2f6b9c5b5299de15a1948468f63ffe54848422cb7216b3b055bd4e5acbcbc208&w=740",
          stars:4,
          name: "Carrot Beetroot Salad",
          region : "Bhopal"
          },
          {
          src:"https://img.freepik.com/free-photo/salads-with-quinoa-arugula-radish-tomatoes-cucumber-bowl-wooden-table-healthy-food-diet-detox-vegetarian-concept_2829-6842.jpg?t=st=1722057356~exp=1722060956~hmac=b0c16d89805a163b1187f65fdd5236ed6d42ea0e52117e50c4bbc5503e74f50d&w=996",
          stars:3,
          name: "Sprouted Moong Salad",
          region : "Kerala"
          },
          {
          src:"https://athithigruhafoods.in/wp-content/uploads/2018/09/Garlic-Pickle.jpg",
          stars:4,
          name: "Garlic Pickle",
          region : "Rajasthan"
          },
          {
          src:"https://athithigruhafoods.in/wp-content/uploads/2018/09/Akula-Gongura-Pickle.jpg",
          stars:5,
          name: "Gongura Pickle",
          region : "Telangana"
          },
      ],
      [
        {
          src:"https://img.freepik.com/free-photo/delicious-bowl-with-sauce-top-view_23-2149358127.jpg?t=st=1722057045~exp=1722060645~hmac=a64d160c1c00a9835df5e439a5157f4c74a3725ed6794584cdfca932c7034ea6&w=996",
          stars:5,
          name: "Tomato Pickle",
          region : "Andhra Pradesh"
          },
          
          {
          src:"https://assets.tendercuts.in/product/P/K/d697240e-8fef-42c6-a97b-2d645e3aac04.webp",
          stars:4,
          name: "Chicken Pickle",
          region : "Andhra Pradesh"
          },
          {
          src:"https://img.freepik.com/free-photo/freshness-plate-healthy-salad-with-organic-vegetables-generated-by-artificial-intelligence_25030-65099.jpg?t=st=1722057467~exp=1722061067~hmac=45cdefe82deb1aa32a43185f640175eb6afd028008ac5b0720d3162b490920cd&w=1060",
          stars:4,
          name: "Kachumber Salad",
          region : "Jaipur"
          },
          {
          src:"https://img.freepik.com/free-photo/cold-soup-with-fresh-cucumbers-radishes-with-yoghurt-bowl-wooden-table-traditional-russian-food-okroshka-vegetarian-meal_2829-7174.jpg?t=st=1722057497~exp=1722061097~hmac=43b1e54b06ff806ca541c86494c455d2d08182a08c85e889c480945a03129bf2&w=996",
          stars:5,
          name: "Raita",
          region : "Tamilnadu"
          },
      ],
      [
        {
          src:"https://aahaaramonline.com/wp-content/uploads/2012/03/andhra_uppudu_pindi.jpg",
          stars:4,
          name: "Uppudu Pindi",
          region : "Andhra Pradesh"
          },
          {
          src:"https://img.freepik.com/free-photo/top-view-colorful-italian-pizza-with-various-ingredients_181624-59426.jpg?t=st=1722057674~exp=1722061274~hmac=a9b96c34de42e4300ff5bb587f1264e62c33db10764be2fc02177106804e9ec1&w=996",
          stars:4,
          name: "Mexican Corn Pizza",
          region : "Paris"
          },
          {
          src:"https://img.freepik.com/free-photo/delicious-arrangement-nutritious-roti_23-2149033982.jpg?t=st=1722057737~exp=1722061337~hmac=004fba0f7ce23d7ff08e007584677fd5b3b84b3d02decb426419cd4b37760dbb&w=996",
          stars:5,
          name: "Aloo Parata",
          region : "Bihar"
          },
          {
          src:"https://img.freepik.com/free-photo/delicious-indian-dosa-composition_23-2149086051.jpg?t=st=1722057833~exp=1722061433~hmac=8471aa0eabf2474b8082509fdb93d65204ea51d7d229370b83b5efd246d18887&w=996",
          stars:5,
          name: "Masala Dosa",
          region : "Chennai"
          },
      ],
      [
        {
          src:"https://img.freepik.com/premium-photo/south-indian-vada-medu-vada-dal-vadai-plate-bowl-isolated-plain_466689-1580.jpg?w=996",
          stars:4,
          name: "Vada",
          region : "Tamilnadu"
          },
          {
          src:"https://img.freepik.com/free-photo/curry-fried-rice_1339-1809.jpg?t=st=1722058054~exp=1722061654~hmac=9b5ba57626873ff213b2af28f29819ae57bb83c3335a09bfccae3333ed2d2b0f&w=996",
          stars:5,
          name: "Pulihora",
          region : "Telangana"
          },
          {
          src:"https://img.freepik.com/free-photo/wide-selection-marinated-fruits-vegetables-white-plate_114579-3586.jpg?t=st=1722058158~exp=1722061758~hmac=e12651e335f5e1ec31d6ba22cfdc46f6a94fce862f765b2ff2b3aefb531b818d&w=1060",
          stars:5,
          name: "Mixed Fruit Chaat",
          region : "Gujarat"
          },
          {
          src:"https://img.freepik.com/free-photo/flat-lay-tasty-tacos-arrangement_23-2148629342.jpg?t=st=1722058213~exp=1722061813~hmac=258a30b273807d4cea2644191dd189f82c5aba0397176ac248f7fa627a8d235f&w=996",
          stars:3,
          name: "Mexican Fruit Salad",
          region : "Mexico"
          },
          {
          src:"https://img.freepik.com/free-photo/fresh-tomato-salad-healthy-vegetarian-meal-summer-generated-by-artificial-intelligence_188544-128532.jpg?t=st=1722058265~exp=1722061865~hmac=c3901d35982b0c38519624af98413aec79645be10f46ede7c12f7be967a35502&w=1060",
          stars:3,
          name: "Watermelon Feta Salad",
          region : "Kerala"
          },
      ]
]

const loaded = () =>{
  console.log("HGGCVC")
}

var middle = document.getElementsByClassName("middle")[0];
    var sideCat = document.createElement("div");
    sideCat.setAttribute("class" , "sideCat");

    var container = document.createElement("div");
    container.setAttribute("class" , "container");

    container.innerHTML = `<i class="fa-solid fa-x" onclick="openn()"></i>
    <center><p>Add New Recipe</p></center>
        <form id="recipeForm">
            <div class="form-group">
                <label for="recipeName">Recipe Name:</label>
                <input type="text" id="recipeName" name="recipeName" required>
                <div class="error" id="nameError"></div>
            </div>

            <div class="form-group">
                <label for="imageURL">Image URL:</label>
                <input type="url" id="imageURL" name="imageURL" required>
                <div class="error" id="imageURLError"></div>
            </div>

            <div class="form-group">
                <label for="stars">Stars (1-5):</label>
                <input type="number" id="stars" name="stars" min="1" max="5" required>
                <div class="error" id="starsError"></div>
            </div>

            <div class="form-group">
                <label for="category">Category:</label>
                <select id="category" name="category">
                    <option value="" selected>Select Category</option>
                    <option value="Biryani's">Biryani 's</option>
                    <option value="Starter's">Starter 's</option>
                    <option value="Dessert's">Dessert 's</option>
                    <option value="Burger's">Burger 's</option>
                    <option value="Non-Veg Curries">Non-Veg Curries</option>
                    <option value="appetizer">Appetizer</option>
                    <option value="main_course">Main Course</option>
                    <option value="dessert">Dessert</option>
                    <option value="beverage">Beverage</option>
                </select>
                <div class="error" id="categoryError"></div>
            </div>

            <div class="form-group">
                <label for="region">Region:</label>
                <input type="text" id="region" name="region" required>
                <div class="error" id="regionError"></div>
            </div>

            <div class="form-group">
                <label for="ingredients">Ingredients:</label>
                <textarea id="ingredients" name="ingredients" required></textarea>
                <div class="error" id="ingredientsError"></div>
            </div>

            <div class="form-group">
                <label for="process">Process:</label>
                <textarea id="process" name="process" required></textarea>
                <div class="error" id="processError"></div>
            </div>

            <div class="form-group">
                <label for="videoURL">Video URL:</label>
                <input type="url" id="videoURL" name="videoURL">
                <div class="error" id="videoURLError"></div>
            </div>

            <div class="form-group">
                <button type="submit">Submit</button>
            </div>
        </form>`

    var head = document.createElement("div");
    head.setAttribute("class" , "head");
    head.innerHTML = "Categories";

    var side = document.createElement("div");
    side.setAttribute("class" , "side");
    side.innerHTML= `<i class="fa-solid fa-x" onclick="closee()" ></i>`

    sideCat.appendChild(head);
    sideCat.appendChild(side);
    middle.appendChild(container);
    middle.appendChild(sideCat);

    


const createItems = (ind) =>{
  var container = document.getElementsByClassName("card_container")[0];
  container.replaceChildren();
  var data = item_data[ind];
  // console.log(ar[0])
  data.map((ele) =>{
    var star = document.createElement("div");
    for(let k = 0 ; k  < ele.stars; k++){
        star.innerHTML +=  `<i class="fa-solid fa-star"></i>`;
     }

    var card = document.createElement("div");
    card.setAttribute("class" , "card")

    var photo = document.createElement("div");
    photo.setAttribute("class","photo");

    var img = document.createElement("img");
    img.setAttribute("src",`${ele.src}`);

    var cover = document.createElement("div");
    cover.setAttribute("class","cover");

    var i = document.createElement("i");
    i.setAttribute("class","fa-regular fa-heart")
  
    i.addEventListener("click", function() {
        // console.log(ele.name)
        var arr =[ele.name , ele.stars  , ele.region , ele.src ]
        console.log(typeof arr)
          // ele.setAttribute("class" , "selected");
          if(this.style.color == "red"){
              this.setAttribute("style" , "font-weight:0");
              this.style.color = "white";
              localStorage.removeItem(ele.name);
              
          }
          else{
              this.setAttribute("style" , "font-weight:1000");
              this.style.color = "red"; 
              localStorage.setItem(ele.name, arr);
          }
      
      }
    );

    var content = document.createElement("div");
    content.setAttribute("class" , "content");

    var left = document.createElement("div");
    left.setAttribute("class" , "left");

    var right = document.createElement("div");
    right.setAttribute("class" , "right");

    var stars = document.createElement("div");
    stars.setAttribute("class" , "stars");

    for(let k = 0 ; k < ele.stars ; k++){
        let i = document.createElement("i");
        i.setAttribute("class" , "fa-solid fa-star")
        stars.appendChild(i);
    }

    var name = document.createElement("p");
    name.setAttribute("class" , "name");
    name.innerHTML = ele.name;

    var region = document.createElement("p");
    region.setAttribute("class" , "region");
    region.innerHTML = ele.region;
    var send = ele.name;
    // console.log(send)
    var button = document.createElement("button");
    button.setAttribute("class" , "learn-more");
    // console.log(ele.name)
    button.innerHTML = `<span aria-hidden="true" class="circle">
                        <span class="icon arrow"></span>
                        </span>
                        <span class="button-text">Open Now</span>`
    button.addEventListener('click' , function(){
      sessionStorage.setItem(ele.name , ele);
      location.href = "../RecipeViewPageOverAll/RecipeViewPage/RecipeViewPage.html";
    });
    
    var na = document.createElement("div");
    na.setAttribute("class" , "name")
    na.innerHTML = ele.name;
    var st = document.createElement("div");
    st.setAttribute("class","stars");
    for(let k = 0 ; k < ele.stars ; k++){
        st.innerHTML += `<i class="fa-solid fa-star" style = "color : white"></i>`;
    }

    cover.appendChild(na);
    cover.appendChild(st);
    cover.appendChild(region);
    cover.appendChild(button);

    left.appendChild(name);
    left.appendChild(img);
    left.appendChild(stars)
    content.appendChild(left);
    content.appendChild(right);
    // content.appendChild(button)

    container.appendChild(card);
    photo.appendChild(img);
    card.appendChild(cover);
    photo.appendChild(i);
    card.appendChild(photo);
    card.appendChild(content);
})


var ind1 = 1;
}
var clos = false;
const closee = () =>{
  var card_container = document.getElementsByClassName("card_container")[0];
  var add = document.getElementsByClassName("add")[0];
  var filter = document.getElementsByClassName("filter")[0];
  var item = document.getElementsByClassName("items")[0];
  if(clos === false){
    // var item = document.getElementsByClassName("item")[0];
    clos = true;
    sideCat.style.left = "0px";
    sideCat.style.width = "80%";
    card_container.style.opacity = 0.2;
    filter.style.color = "#FF8225";
    filter.style.scale = 1.2;
    add.style.display = "none";
    open1 = true;
    openn();
  }
  else{
    clos = false;
    // item.innerHTML = "items :";
    sideCat.style.left = "-20px";
    sideCat.style.width = "0%";
    filter.style.color = "#222325";
    filter.style.scale = 1.1;
    card_container.style.opacity = 1;
    add.style.display = "flex";
    item.style.opacity = 1
    
  }
}

var open1 = false;
const openn = () =>{
  var cont = document.getElementsByClassName("container")[0];
  var card_container = document.getElementsByClassName("card_container")[0];
  var categories = document.getElementsByClassName("categories")[0];
  var category = document.getElementsByClassName("category")[0];
  if(open1 == false){
    open1 = true;
    cont.style.scale = 1;
    cont.style.height = "90%"
    card_container.style.opacity = 0.2;
    categories.style.opacity = 0.2;
    category.style.opacity = 0.2;
  }
  else{
    open1 = false;
    cont.style.scale = 0;
    cont.style.height = "0%"
    card_container.style.opacity = 1;
    categories.style.opacity = 1;
    category.style.display = "block";
  }
}
var categories = document.getElementsByClassName("bottom")[0];
categories.innerHTML = `
                        <div class="add" onclick="openn()"><i class="fa-solid fa-plus"></i></div>
                        <div class="filter" onclick="closee()"><i class="fa-solid fa-filter"></i></div>
                        `

Object.entries(category_data).map((cat , ind) =>{
  // console.log(cat[0])
    var categories = document.getElementsByClassName("categories")[0];
    var catButton = document.createElement("catButton");

  
    var catBut = document.createElement("div");
    catBut.setAttribute("class" , "catBut");

    catBut.addEventListener("click", function() {
      createItems(ind);
    });
  
    catBut.addEventListener("click", function() {
      closee();
    });
  

    // catBut.setAttribute("onclick", );

    catButton.setAttribute("class" , "catButton");
    catButton.setAttribute("onclick", `createItems('${ind}')`);
    catButton.innerHTML = `<div class="catPhoto">
                              <img src= "${cat[1][1]}"alt=""> 
                            </div>
                            <div class="catName">
                              <p class="name">${cat[0]}</p>
                            </div>`
    catBut.innerHTML = `<div class="catPhoto">
                              <img src= "${cat[1][1]}"alt=""> 
                            </div>
                            <div class="catName">
                              <p class="name">${cat[0]}</p>
                            </div>`

    side.appendChild(catBut)
    categories.appendChild(catButton)
    createItems(2);
})


// item_data[category_data["Biryani's"]].map((key)=>{
//   // console.log(ele);
// })

// dataBase = {
//     "Biryani's" :{
//                   "Avakai chicken biryani" : {
//                     src: 7,
//                     stars:5,
//                     name : "Avakai chicken biryani",
//                   },
//                   "Butter chicken biryani" : {
//                     src:8,
//                     stars : 4,
//                     name :"Butter chicken biryani",
//                   },
//                   "MUTTON Biryani" :{
//                     src  : 9,
//                     stars : 5,
//                     name :"MUTTON Biryani ",
//                   },
//                   "Pot biryani" :{
//                     src : 9 ,
//                     stars : 5,
//                     name :"Pot biryani",
//                   },
//                   "Chicken 65 biryani" : {
//                     src:9,
//                     stars:4,
//                     name : "Chicken 65 biryani",
//                   },
//                   "Chicken dum biryani" : {
//                     src : 9,
//                     stars : 5,
//                     name : "Chicken dum biryani",
//                   },
//                   "Gongura royalla biryani" : {
//                     src : 9,
//                     stars : 4,
//                     name : "Gongura royalla biryani",
//                   },
//                   "Chicken fry piece biryani" : {
//                         src : 9,
//                         stars : 4,
//                         name : "Chicken fry piece biryani",
//                   },
//                   "Chicken lollipop biryani" : {
//                     src : 9 , 
//                     stars : 5 ,
//                     name : "Chicken lollipop biryani",
//                   },
//                   "Mixed non veg biryani" : {
//                     src : 9,
//                     stars : 4,
//                     name : "Mixed non veg biryani",
//                   },
//                   "Chicken mughlai biryani" : {
//                     src : 9 ,
//                     stars : 5,
//                     name : "Chicken mughlai biryani",
//                   },
//                   "Gongura chicken biryani" : {
//                     src : 9,
//                     stars: 4, 
//                     name : "Gongura chicken biryani",
//                   },
//             }
    

// }
// console.log(dataBase)

// Object.entries(dataBase).map(ele =>{
//   // console.log(dataBase[ele[0]]);
//   Object.entries(dataBase[ele[0]]).map(data =>{
//     // console.log(data[1].stars);
//   })
// })

var data = [
    {
        src : "../assets/images/biryani.jpg",
        name : "chicken biryani",
        stars : 4,
    } ,
    {
        src : "../assets/images/biryani.jpg",
        name : "chicken biryani",
        stars :5,
    } ,
    {
        src : "../assets/images/biryani.jpg",
        name : "chicken biryani",
        stars : 4,
    },
    {
        src : "../assets/images/biryani.jpg",
        name : "chicken biryani",
        stars : 5,
    },
    {
        src : "../assets/images/biryani.jpg",
        name : "chicken biryani",
        stars : 2,
    } ,
    {
        src : "../assets/images/biryani.jpg",
        name : "chicken biryani",
        stars : 4,
    } ,
    {
        src : "../assets/images/biryani.jpg",
        name : "chicken biryani",
        stars : 3,
    } ,
    {
        src : "../assets/images/biryani.jpg",
        name : "chicken biryani",
        stars : 4,
    } ,
    {
        src : "../assets/images/biryani.jpg",
        name : "chicken biryani",
        stars : 4,
    } ,
    {
        src : "../assets/images/biryani.jpg",
        name : "chicken biryani",
        stars : 4,
    } ,
    {
        src : "../assets/images/biryani.jpg",
        name : "chicken biryani",
        stars : 4,
    } ,
    {
        src : "../assets/images/biryani.jpg",
        name : "chicken biryani",
        stars : 4,
    }
      
]


// const apend = (obj) => {
//   var k = obj.name;
//   var v = JSON.stringify(obj);
//   sessionStorage.setItem(k,v);
// };

// const nry=()=>{
//   const x = sessionStorage.getItem('Chocolate Cup Cake')
//   const y = JSON.parse(x)
//   console.log(y.src)
// }

// nry()


const fun = () =>{
  
  container.style.scale = 0;
}

document.getElementById('recipeForm').addEventListener('submit', function(event) {
            
  document.querySelectorAll('.error').forEach(el => el.textContent = '');
  event.preventDefault();
  let valid = true;

  const name = document.getElementById('recipeName').value.trim();
  const imageURL = document.getElementById('imageURL').value.trim();
  const stars = parseInt(document.getElementById('stars').value, 10);
  const region = document.getElementById('region').value.trim();
  const ingredients = document.getElementById('ingredients').value.trim();
  const process = document.getElementById('process').value.trim();
  const videoURL = document.getElementById('videoURL').value.trim();
  const category = document.getElementById('category').value;


  if (!name) {
      document.getElementById('nameError').textContent = 'Recipe name is required.';
      valid = false;
  }

  if (!imageURL) {
      document.getElementById('imageURLError').textContent = 'Image URL is required.';
      valid = false;
  }

  if (isNaN(stars) || stars < 1 || stars > 5) {
      document.getElementById('starsError').textContent = 'Stars must be between 1 and 5.';
      valid = false;
  }

  if (!ingredients) {
      document.getElementById('ingredientsError').textContent = 'Ingredients are required.';
      valid = false;
  }
  
  if (!region) {
    document.getElementById('region').textContent = 'Region is required.';
    valid = false;
}
  if (!process) {
      document.getElementById('processError').textContent = 'Process is required.';
      valid = false;
  }

  if (videoURL && !/^https?:\/\/.+/.test(videoURL)) {
      document.getElementById('videoURLError').textContent = 'Invalid video URL.';
      valid = false;
  }

  if (!category) {
      document.getElementById('categoryError').textContent = 'Category is required.';
      valid = false;
  }

  if (valid) {
      const recipe = {
          name: name,
          imageURL: "`${imageURL}`",
          stars: stars,
          ingredients: ingredients,
          process: process,
          videoURL: "`${videoURL}`",
          category: category,
          region : region,
      };
      var obj = {
        src : imageURL,
        name : name,
        stars : stars,
        region :region,
      }
      // console.log(obj);
      // console.log(recipe.category)
      // console.log(typeof recipe.category)
      // console.log(category_data[recipe.category])
      item_data[category_data[recipe.category][0]].push(obj);
      // console.log(item_data[category_data[recipe.category][0]]);
      createItems(category_data[recipe.category][0]);
      alert("Recipe is Added successfully!");
      var card_container = document.getElementsByClassName("card_container")[0];
      var categories = document.getElementsByClassName("categories")[0];
      var categoryy = document.getElementsByClassName("category")[0]
      // console.log(card_container)
      card_container.style.opacity = 1;
      categories.style.opacity = 1;
      categoryy.style.opacity = 1;
      document.getElementById("recipeForm").reset();
      container.style.height = "0%"
      setTimeout(fun , 0);
      apend(recipe);
  }
 
});
