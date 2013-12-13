'use strict';

angular.module('ngChoppedApp')
  .service('Desserts', function Desserts() {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var Desserts = ["prunes", "animal crackers", "cream cheese", "phyllo dough", "gorgonzola cheese", "pineapple rings", "blueberries", "brioche", "cantaloupe", "pecans", "avocados", "maple syrup", "black plums", "almond butter", "walnuts", "quick grits", "flour tortillas", "prosecco", "Canadian bacon", "roasted chestnuts", "beets", "goat cheese", "quick cook oatmeal", "crystallized ginger", "pitted dates", "frozen pie crust", "caramel candy", "stout beer", "plain donuts", "smoked gouda", "white chocolate", "dried apricots", "oranges", "grapefruit", "semi-sweet chocolate chips", "bacon", "ginger snaps", "crème fraîche", "instant coffee", "carrots", "marshmallow spread", "chocolate puff cereal", "semi-sweet chocolate chips", "dried strawberries", "black mission figs", "slivered almonds", "lemons", "blackberries", "kiwi", "wonton wrappers", "gummy bears", "jicama", "pepitas", "blueberries", "ancho chiles", "semi-sweet chocolate", "black plums", "tomatillos", "crème fraîche", "plain donuts", "sliced almonds", "Okinawan sweet potatoes", "brioche", "sambuca", "celery", "blood oranges", "frozen pie crust", "jaggery", "bulgur wheat", "pomegranate juice", "pineapple", "green papaya", "coffee liqueur", "avocados", "boiled ginkgo nuts", "honeycomb", "grape leaves", "sesame seeds", "honeydew melon", "pickled ginger", "biscuit dough", "pistachios", "dried hibiscus flowers", "black olives", "baby kiwi", "Israeli couscous", "rice paper", "saffron", "chocolate wafers", "manchego cheese", "passionfruit", "goji berries", "butter crackers", "grapefruit", "feta cheese", "gin", "matzo", "pomegranate molasses", "roasted chestnuts", "baby fennel", "carrots", "goat cheese", "quick grits", "pomelo", "parsnips", "limoncello", "soda crackers", "sharp cheddar cheese", "ripened plantains", "prosecco", "crystallized ginger", "bacon", "cherries", "pumpernickel bread", "curry powder", "yuzu juice", "mangoes", "puff pastry", "coffee beans", "rose water", "garnet yams", "brie", "sparkling wine", "cranberries", "blackberries", "apple cider", "shredded phyllo dough", "fresh chickpeas", "carrot juice", "white chocolate chips", "baby beets", "hominy", "cherry tomatoes", "silken tofu", "ginger snaps", "cocoa nibs", "lychees", "phyllo dough", "Canadian bacon", "candy canes", "sugar cookie dough", "bittersweet chocolate", "figs", "yellow miso paste", "corn tortillas", "dried chipotle peppers", "blueberries", "violet mustard", "Greek yogurt", "sugar cane", "cactus pears", "popcorn kernels", "yucca", "calimyrna figs", "hoisin sauce", "red jalapeños", "clementine oranges", "scotch whiskey", "basil", "toasted oats cereal", "canned peaches", "cherry tomatoes", "pretzel sticks", "emu eggs", "avocadoes", "oyster sauce", "tofu skins", "star fruit", "saltine crackers", "green papaya", "dried mangoes", "cotton candy", "baby bananas", "coconut flakes", "pumpernickel rye", "soy sauce", "polenta", "lambic beer", "pineapple", "hot dogs", "matzo", "salty peanuts", "dried strawberries", "cocoa nibs", "brie", "rutabaga", "frozen cranberries", "English muffins", "white bread", "unsalted pistachios", "buckwheat honey", "zucchini", "buttermilk", "braeburn apples", "kiwis", "amaranth grain", "oranges", "red miso paste", "cottage cheese", "kettle-cooked potato chips", "puffed rice cereal", "cognac", "butterscotch candy", "pancetta", "vodka", "crescent roll dough", "sesame seeds", "blueberry jelly beans", "papaya", "rice crackers", "sake", "jura erguel", "celery root", "cinnamon candies", "blackberries", "marshmallow spread", "Yukon Gold potatoes", "condensed milk", "pomegranates", "peanut butter taffy", "key lime juice", "pepitas", "halloumi cheese", "hot dog buns", "blueberries", "bread & butter pickles", "saffron", "fruit ring cereal", "taco shells", "Bosc pears", "crema", "red curry paste", "champagne", "dragon fruit", "tahini", "cake flour", "Israeli couscous", "cherimoya", "guanciale", "Irish whiskey", "shiso leaves", "pita bread", "feta", "adzuki beans", "kumquats", "cheddar pennies", "chipotle chiles", "grasshoppers", "puff pastry", "enoki mushrooms", "seedless red grapes", "plum sauce", "pasilla chiles", "peppermint patties", "sour cream", "boniatos", "peanut brittle", "marsala wine", "wonton wrappers", "durian", "puffed rice cereal", "horned melon", "cashew butter", "gummy worms", "pineapple", "sunflower seeds", "red curry paste", "Neapolitan ice cream", "coquitos", "turmeric", "empanada wrappers", "corn on the cob", "plum tomatoes", "jalapeño peppers", "crema", "malanga coco", "red carrots", "goat's butter", "paneer", "potato crisps", "ladyfingers", "baby fennel", "almond paste", "root beer jelly beans", "granola bars", "heirloom cherry tomatoes", "Chinese five spice", "piloncillo", "green plantains", "Chinese bacon", "peanut butter puff cereal", "frozen lemonade", "sesame candies", "ruby red grapefruit", "chayotes", "chickpeas", "Italian orange liqueur", "cheese crackers", "cherimoya", "Jordan almonds", "mission figs", "robiola cheese", "shelled pistachios", "taco shells", "bananas", "pomegranate juice", "phyllo dough", "white miso", "strawberry popsicles", "blue corn tortilla chips", "condensed milk", "celery", "Meyer lemons", "cottage cheese", "passionfruit", "soba noodles", "crumpets", "cream cheese", "aloe vera juice", "orange slice candy", "mayonnaise", "bananas", "prickly pear cactus", "pre-cooked pizza crust", "challah", "almond butter", "tamarind pods", "delicata squash", "labne", "chickpea flour", "Asian pears", "rose water syrup", "cocoa nibs", "blackberries", "corn tortillas", "ginger", "dried apricots", "gingerbread cookie dough", "elderflower liqueur", "halva", "Mexican chocolate", "mostarda", "soft tofu", "pretzel rods", "grape flavored gelatin", "lemon verbena", "brie", "shortbread cookies", "crescent roll dough", "dried currants", "key lime juice", "creamed corn", "duck eggs", "Russet potatoes", "farmer's cheese", "honey herb cough drops", "cactus pear", "soft pretzels", "farmhouse cheddar", "wheat beer", "matzo", "Lady Gala apples", "walnuts", "borscht", "Thai basil", "marinated cippolini onions", "Black Oxford apples", "rolled oats", "nopales", "sweet potatoes", "pie crust", "mezcal", "cacao beans", "masa", "pisco", "gorgonzola dolce", "vanilla cognac", "guava paste", "barley flour", "duck fat", "macaroni and cheese", "apples", "raw cashews", "cane syrup", "araucana eggs", "bread flour", "turbinado sugar", "goat's milk", "margarita mix", "quick cook grits", "marionberry preserves", "vanilla yogurt", "falooda glass noodles", "oranges", "graham crackers", "Armenian string cheese", "ossa dei morti", "apple cider", "ricotta salata", "black licorice", "gingerbread cookie dough", "goat cheese", "garam masala", "strawberry syrup", "Kirby cucumbers", "beignet mix", "lemon-lime soda", "nata de coco", "sour beer", "cherimoya", "raspberries", "brown bread in a can", "pumpkin beer", "fresh cranberries", "pecans", "instant potatoes", "sunflower seeds", "grapes", "cream cheese", "canned pineapple", "black pepper crackers", "plums", "kefir", "chamomile flowers", "plums", "candy canes", "fruitcake", "hot cocoa mix", "chocolate chips", "chestnuts", "dried strawberries", "duck eggs", "fino sherry", "granola", "dried persimmon", "vanilla ice cream", "cinnamon toast cereal", "Asian pears", "chocolate covered raisins", "camembert", "corn flakes cereal", "sweet chili sauce", "golden raspberries", "labne", "white balsamic vinegar", "chocolate covered peanuts", "dried cranberries", "masa harina", "fresh pasta sheets", "plum tomatoes", "basil", "white chocolate", "clove candies", "loquats", "kaiser rolls", "cheese wedges", "chicha morada", "Cotija cheese", "mangoes", "shoestring potato sticks", "cosmopolitan mix", "dried apples", "biscotti", "edible flowers", "sour cherries", "croissants", "clotted cream", "lemongrass", "leftover vanilla milkshake", "leftover refried beans", "butter crackers", "kiwi", "baby eggplants", "gooseberries", "eggroll skins", "lapchang", "cinnamon-flavored candy coal", "crescent roll dough", "sour cream", "hot chocolate mix", "dried black licorice root", "pork rinds", "macadamia nuts", "limoncello", "plums", "coconut rum", "black beans", "queso fresco", "coconut water", "garnet yams", "Thai basil", "roasted noodles", "ostrich eggs", "plantains", "dried strawberries", "galangal", "hollandaise sauce", "strawberries", "walnuts", "blue corn tortilla chips", "mango chutney", "white apricots", "blue cornmeal", "bacon bits", "cake flour", "farmer's cheese", "baby beets", "cola", "pasilla chiles", "pineapple", "Israeli couscous", "Mexican chocolate", "panforte", "pancetta", "pink currants", "crème fraîche", "sourdough bread", "dried figs", "baby fennel", "coffee beans", "stout beer", "empanada wrappers", "peaches", "marshmallow spread", "spearmint leaf candy", "knodel", "almond flour", "raisins on the vine", "kombucha", "rambutan", "egg white powder", "candied nuts", "marzipan", "membrillo", "ladyfingers", "chocolate lips", "gin liqueur", "huckleberries", "beignet mix", "chicory coffee", "peaches", "breakfast toaster pastries", "bourbon whiskey", "corn on the cob", "red jalapeños", "shortbread cookies", "sharon fruit", "cream cheese frosting", "fenugreek", "cinnamon toast cereal", "Japanese mayonnaise", "frozen peas", "oil-cured black olives", "peaches", "piloncillo", "chocolate graham cracker pies", "cactus pears", "Italian wafer cookies", "goat's milk ricotta", "single malt whiskey", "arak", "canned pumpkin", "amaretti cookies", "cayenne pepper", "Meyer lemons", "marshmallows", "charcoal biscuits", "zucchini", "caramel popcorn", "red plums", "prosecco", "udon noodles", "tofu", "green plantains", "maple-bacon ale", "mangoes", "grape jelly beans", "buttermilk", "wonton wrappers", "sweet potatoes", "quail eggs", "pound cake", "whole coconut", "strawberry cream tequila", "polenta", "Pedro Ximénez sherry", "beets", "whipped topping", "frozen pancakes", "tamarind paste", "farmer's cheese", "orange sherbet", "babka", "rhubarb", "baby bananas", "Beaumes de Venise", "corn flakes", "carrots", "skim milk", "blueberries", "zucchini", "chocolate cake mix", "crème fraîche", "movie theatre popcorn", "honey flavored cereal", "soy sauce", "anjou pears", "cocktail franks", "puffed rice cereal bars", "spiced rum", "rambutan", "tequila lollipops", "pig tails", "dragonfruit", "sorghum flour", "lard", "marshmallow spread", "balsamic vinegar", "ancho chiles", "almond butter cookies", "lavash", "kumquats", "mulling spices", "chocolate turkeys", "lime curd", "cactus pear", "candied orange slices", "hot dog buns", "eggnog", "panettone", "pomegranate molasses", "Hanukkah gelt", "chickpea flour", "raspberries", "ricotta salata", "rose water syrup", "carob syrup", "spaghetti squash", "figs", "walnuts", "dulce de leche", "pineapple", "sesame seed buns", "apricot paste", "acorn squash", "orange sherbet pops", "sour cream", "wheatgrass", "whole coconuts", "pepitas", "piloncillo", "yucca", "tangerines", "cranberry sauce", "chocolate chip cookies", "gorgonzola dolce", "cinnamon chips", "baby red grapes", "earl grey tea leaves", "pound cake", "ice cream sundae", "old bananas", "stale tortilla chips", "cola", "spiral ham", "green plantains", "water chestnuts", "spiced rum", "mitmita", "sauternes", "cream-filled snack cakes", "cottage cheese", "jackfruit", "araucana eggs", "coconut macaroons", "chocolate covered pretzels", "maraschino cherries", "Greek yogurt", "canned espresso", "corn nuts", "carrot juice", "almond flour", "candied ginger", "honeycomb", "banana chips", "sugar cane", "almond butter", "umeboshi", "zucchini blossoms", "dry roasted peanuts", "anise liqueur", "mamey[disambiguation needed]", "Okinawan sweet potatoes", "coconut flakes", "calvados", "marshmallows", "peanut brittle", "Mexican chocolate", "grape tomatoes", "sponge cake snacks", "ruby port", "olive oil gelato", "dried apricots", "French toast sticks", "circus peanuts", "passion fruit purée", "graham cracker cereal", "curry powder", "freeze dried grapes", "marrow bones", "Marcona almonds", "cannoli cream", "yellow rice", "persimmons", "sugar cane drink", "pine nuts", "kale", "fruit cocktail", "cottage cheese", "marrow bones", "lamingtons", "lemon verbena", "wattleseeds", "blueberry pomegranate lollies", "frozen yogurt", "amaretti cookies", "candied orange peels", "red curry paste", "bison grass vodka", "guava paste", "pistachios", "crustless PB & J sandwiches", "honey soaked nuts", "organic red wine", "calamansi limes", "salted butter crackers", "chateaubriand", "horseradish root", "tawny port", "stone crab claws", "pomegranate", "pilot bread crackers", "fruit chews", "freeze dried carrots", "clotted cream", "passion fruit purée", "spirulina", "angel food cake", "argan oil", "apricots", "fresh pasta sheets", "cheese spread", "coconut jam", "shredded phyllo dough", "ginger ale", "peanut caramel candy bars", "cranberries", "green tea powder", "edamame", "local honey", "steel cut oats", "feta cheese", "watermelon syrup", "huckleberries", "avocados", "pizza dough", "red jalapeño peppers", "chocolate sandwich cookies", "rosewater syrup", "almond butter", "rambutans", "mashed potato candy", "green cerignola olives", "honey distilled liqueur", "Lady Gala apples", "Kaiserschmarrn", "sorghum molasses", "kefir", "cactus pear", "pigs in a blanket", "speck", "sfogliatelle", "crabapples", "brewer's yeast", "kettle-style potato chips", "black currant jam", "red Anjou pears", "Japanese mayonnaise", "dehydrated chocolate covered strawberries", "hemp milk", "ataulfo mango", "mochi", "clementines", "cheese wedges", "Aleppo pepper", "frozen hot chocolate", "red bean paste", "jicama", "cilantro", "bacon jam", "cucumber salad", "cantaloupe", "sesame seed candy", "marshmallow spread", "spaetzle", "moustalevria", "walnuts", "Japanese cola candy", "candy blood", "deviled eggs", "pâte sucrée", "buffalo chestnuts", "butternut squash soup", "fennel", "orange cranberry muffins", "tofu turkey", "ends of bread loaves", "squeezed orange halves", "used coffee grinds", "hardened brown sugar", "guanabana nectar", "white chocolate chips", "pecans", "chipotle in adobo", "protein powder", "caramel coated popcorn", "tangelo", "olive oil cake", "aged cheddar cheese", "Granny Smith apples", "hamburger buns", "vanilla frosting", "cooked corn cobs", "pitcher of sangria", "duck sauce", "stale plain doughnuts", "chicken suckers", "chicken fat", "farm fresh eggs", "fruit cake", "yuzu marmalade", "whipped cream cheese", "hot sauce", "corn flakes cereal", "Araucana eggs", "waffles", "maple syrup", "Canadian bacon", "snow cones", "funnel cakes", "popcorn", "sour cream", "figs", "burrata", "piadina", "chinotto", "bubble tea", "papaya", "coconut butter", "chocolate-covered bananas", "opal basil", "orange blossom water", "dried apricots", "marshmallow snack cakes", "Douglas fir brandy", "plum pudding", "dried persimmon", "chocolate Santa", "blueberry scones", "ginger preserves", "rosemary", "gjetost cheese"];
    return Desserts;
  });