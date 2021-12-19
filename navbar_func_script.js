function navbar() {
  return `
    <div id="headMain">
    <div id="headTop">
      <div>
        <a href="#">
          <img
            src="https://techstory.in/wp-content/uploads/2018/03/Pepperfry.png"
        /></a>
      </div>
      <div id="search_2_half">
        <div id="search_bar">
          <input placeholder="Search" />
          <button>
            <i class="material-icons" style="font-size: 21px">search</i>
          </button>
        </div>
        <div id="user_help">
          <ul>
            <li>
              <a href="#">
                <div class="icon">
                  <i class="material-icons" style="font-size: 21px"
                    >local_shipping</i
                  >
                  <p>Track</p>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div class="icon">
                  <i class="material-icons" style="font-size: 21px"
                    >favorite_border</i
                  >
                  <p>Wishlist</p>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div class="icon">
                  <i class="fa fa-shopping-cart" style="font-size: 21px"></i>
                  <p>Cart</p>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div class="icon">
                  <i class="material-icons" style="font-size: 21px">person</i>
                  <p>Profile</p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div id="classify_out">
      <div id="clasify">
        <div class="type_list">
          Furniture
          <div class="try">
            
            <div>
              <p>Sofas</p>
              <hr>
              <ul>
                <li>1 Seater Sofas</li>
                <li>2 Seater Sofas</li>
                <li>3 Seater Sofas</li>
                <li>Sofa Sets</li>
                <li>Sectional Sofas</li>
                <li>Sofa Cum Beds</li>
                <li>Recliners</li>
                <li>Futons</li>
                <li>Sofa Spa</li>
              </ul>
            </div>
            <div>
              <P>Seating</P>
              <hr>
              <ul>
              <li id="settes">Settees</li>
              <li>Benches</li>
              <li >Chaise Loungers</li>
              <li >Recamiers</li>
                <li>Ottomans</li>
                <li>Pouffes</li>
                <li>Foot Stools</li>
                <li>Seating Stools</li>
                <li>Bean Bags</li>
                <li>Swings</li>
                <li>Hammocks</li>
              </ul>
            </div>
            <div>
              <p>Chairs</p>
              <hr>
              <ul>
                <li>Arm Chairs</li>
                <li>Rocking Chairs</li>
                <li>Lounge Chairs</li>
                <li>Cafe Chairs</li>
                <li>Iconic Chairs</li>
                <li>Slipper Chairs</li>
                <li>Barrel Chairs</li>
                <li>Cantilever Chairs</li>
                <li>Folding Chairs</li>
                <li>Plastic Chairs</li>
                <li>Wing Chairs</li>
                <li>Office Chairs</li>
                <li>Patio Chairs</li>
              </ul>
            </div>
            <div>
              <p>Tables</p>
              <hr>
              <ul>
                <li>Coffee Tables</li>
                <li>Coffee Table Sets</li>
                <li>End Tables</li>
                <li>Nest of Tables</li>
                <li>Console Tables</li>
                <li>Portable Tables</li>
                <li>Study Tables</li>
                <li>Dressing Tables</li>
                <li>Bedside Tables</li>
                <li>Office Tables</li>
                <li>Patio Tables & Sets</li>
                <li>Patio Sets</li>
                <li>Patio Tables</li>
              </ul>
            </div>
            <div>
              <p>Cabinetry</p>
              <hr>
              <ul>
                <li>Shoe Racks</li>
                <li>Entertainment Units</li>
                <li>Cabinet & Sideboards</li>
                <li>Chest of Drawers</li>
                <li>Book Shelves</li>
                <li>Book Cases</li>
                <li>Trunks</li>
                <li>Wardrobes</li>
                <li>Modular Wardrobes</li>
                <li>Plastic Cabinets</li>
                <li>Office Cabinets</li>
              </ul>
            </div>
            <div>
              <p>Dining & Bar</p>
              <hr>
              <ul>
                <li>Dining Sets</li>
                <li>Dining Chairs</li>
                <li>Dining Tables</li>
                <li>Bar Cabinets</li>
                <li>Bar Trolleys</li>
                <li>Wine Racks</li>
                <li>Bar Stools</li>
                <li>Bar Table Sets</li>
                <li>Modular Kitchens</li>
              </ul>
            </div>
            <div>
              <p>Beds</p>
              <hr>
              <ul>
                <li>Beds</li>
                <li>Single Beds</li>
                <li>Queen Size Beds</li>
                <li>King Size Beds</li>
                <li>Upholstered Beds</li>
                <li>Poster Beds</li>
                <li>Bunk Beds</li>
                <li>Folding Beds</li>
                <li>Mattresses</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="type_list">
          Living
          <div class="try">
            <div>
              <p>Sofas</p>
              <hr>
              <ul>
                <li>Sofas</li>
                <li>1 Seater Sofas</li>
                <li>2 Seater Sofas</li>
                <li>3 Seater Sofas</li>
                <li>Sofa Sets</li>
                <li>Sectional Sofas</li>
                <li>Sofa Cum Beds</li>
                <li>Recliners</li>
                <li>Futons</li>
                <li>Sofa Spa</li>
              </ul>
            </div>
            <div>
              <p>Seating</p>
              <hr>
              <ul>
                <li onclick="Settees_f()">Settees</li>
                <li onclick="Benches_f()">Benches</li>
                <li onclick="Chaise_loungers_f()">Chaise Loungers</li>
                <li onclick="Recamiers_f()">Recamiers</li>
                <li>Ottomans</li>
                <li>Pouffes</li>
                <li>Foot Stools</li>
                <li>Seating Stools</li>
                <li>Bean Bags</li>
                <li>Bar Stools</li>
              </ul>
            </div>
            <div>
              <p>Chairs</p>
              <hr>
              <ul>
                <li>Arm Chairs</li>
                <li>Rocking Chairs</li>
                <li>Lounge Chairs</li>
                <li>Cafe Chairs</li>
                <li>Iconic Chairs</li>
                <li>Slipper Chairs</li>
                <li>Barrel Chairs</li>
                <li>Cantilever Chairs</li>
                <li>Folding Chairs</li>
                <li>Plastic Chairs</li>
                <li>Wing Chairs</li>
                <li>Chair Spa</li>
              </ul>
            </div>
            <div>
              <p>Tables</p>
              <hr>
              <ul>
                <li>Coffee Tables</li>
                <li>Coffee Table Sets</li>
                <li>End Tables</li>
                <li>Nest of Tables</li>
                <li>Console Tables</li>
                <li>Study Tables</li>
                <li>Portable Tables</li>
                <li>Bar Table Sets</li>
              </ul>
            </div>
            <div>
              <p>Cabinetry</p>
              <hr>
              <ul>
                <li>Shoe Racks</li>
                <li>Entertainment Units</li>
                <li>Cabinet & Sideboards</li>
                <li>Book Shelves</li>
                <li>Book Cases</li>
                <li>Trunks</li>
                <li>Plastic Cabinets</li>
                <li>Bar Cabinets</li>
                <li>Bar Trolleys</li>
              </ul>
            </div>
            <div>
              <p>Decor</p>
              <hr>
              <ul>
                <li>Wall Shelves</li>
                <li>Wall Art</li>
                <li>Clocks</li>
                <li>Mandirs</li>
                <li>Table Decor</li>
                <li>Vases</li>
                <li>Figurines</li>
                <li>Photo Frames</li>
                <li>Key Holders</li>
              </ul>
            </div>
            <div>
              <p>Lighting</p>
              <hr>
              <ul>
                <li>Chandeliers</li>
                <li>Wall Lights</li>
                <li>Floor Lamps</li>
                <li>Hanging Lights</li>
                <li>Table Lamps</li>
                <li>Flush Mounts</li>
                <li>Panel Lights</li>
                <li>Tea Light Holders</li>
                <li>String Lights</li>
                <li>Picture Light</li>
                <li>Candle Holders</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="type_list">
          Bedroom
          <div class="try">
            <div>
              <p>Beds</p>
              <hr>
              <ul>
                <li>Beds</li>
                <li>Single Beds</li>
                <li>Queen Size Beds</li>
                <li>King Size Beds</li>
                <li>Upholstered Beds</li>
                <li>Poster Beds</li>
                <li>Bunk Beds</li>
                <li>Folding Beds</li>
                <li>Sofa Cum Beds</li>
                <li>Futons</li>
              </ul>
            </div>
            <div>
              <p>Mattresses</p>
              <hr>
              <ul>
                <li>Mattresses</li>
                <li>Single Bed Mattress</li>
                <li>Queen Bed Mattress</li>
                <li>King Bed Mattress</li>
                <li>Foldable Mattress</li>
                <li>Baby Mattress</li>
                <li>Kids Mattress</li>
                <li>Mattress Protectors</li>
                <li>Mattress Toppers</li>
                <li>Pillows</li>
                <li>Bed Wedges</li>
                <li>Mattress Steaming</li>
              </ul>
            </div>
            <div>
              <p>Furnishings</p>
              <hr>
              <ul>
                <li>Bed Sheets</li>
                <li>Bed Covers</li>
                <li>Bedding Sets</li>
                <li>Duvets</li>
                <li>Quilts & Comforters</li>
                <li>Blankets</li>
                <li>Dohars</li>
                <li>Carpets</li>
                <li>Runners</li>
                <li>Curtains & Drapers</li>
                <li>Carpet Spa</li>
                <li>Curtain Steaming</li>
              </ul>
            </div>
            <div>
              <p>Tables</p>
              <hr>
              <ul>
                <li>Bedside Tables</li>
                <li>Dressing Tables</li>
                <li>Study Tables</li>
                <li>Portable Tables</li>
              </ul>
            </div>
            <div>
              <p>Storage</p>
              <hr>
              <ul>
                <li>Wardrobes</li>
                <li>Modular Wardrobes</li>
                <li>Chest of Drawers</li>
                <li>Cabinets</li>
                <li>Entertainment Units</li>
                <li>Trunks</li>
                <li>Book Cases</li>
                <li>Book Shelves</li>
                <li>Plastic Cabinets</li>
              </ul>
            </div>
            <div>
              <p>Decor</p>
              <hr>
              <ul>
                <li>Mirrors</li>
                <li>Photo Frames</li>
                <li>Clocks</li>
                <li>Wall Cabinets</li>
                <li>Wall Art</li>
                <li>Table Decor</li>
              </ul>
            </div>
            <div>
              <p>Lighting</p>
              <ul>
                <li>Wall Lights</li>
                <li>Table Lamps</li>
                <li>Study Lamps</li>
                <li>Floor Lamps</li>
                <li>Smart Lamps</li>
                <li>Candles</li>
                <li>Candle Holders</li>
                <li>Hanging Lights</li>
                <li>Flush Mounts</li>
                <li>Panel Lights</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="type_list">
          Kids Room
          <div class="try">
            <div>
              <p>Bed</p>
              <hr>
              <ul>
                <li>Cribs</li>
                <li>Panel Beds</li>
                <li>Bunk Beds</li>
                <li>Loft Beds</li>
                <li>Trundle Beds</li>
                <li>Bookcase Beds</li>
                <li>Novelty Beds</li>
                <li>Tent Beds</li>
                <li>Bed Units</li>
              </ul>
            </div>
            <div>
              <p>Study</p>
              <hr>
              <ul>
                <li>Study Tables</li>
                <li>Infant Desks</li>
                <li>Study Chairs</li>
                <li>Activity Tables</li>
                <li>Boards</li>
                <li>Art Easels</li>
              </ul>
            </div>
            <div>
              <p>Storage</p>
              <hr>
              <ul>
                <li>Book Shelves</li>
                <li>Bookcases</li>
                <li>Storage Cabinets</li>
                <li>Chest of Drawers</li>
                <li>Storage Baskets</li>
                <li>Storage Boxes</li>
                <li>Wardrobes</li>
                <li>Bedside Tables</li>
              </ul>
            </div>
            <div>
              <p>Seating</p>
              <hr>
              <ul>
                <li>Study Chairs</li>
                <li>Infant Chairs</li>
                <li>Baby High Chair</li>
                <li>Stools</li>
                <li>Sofas</li>
                <li>Bean Bags</li>
                <li>Swings</li>
              </ul>
            </div>
            <div>
              <p>Decor</p>
              <hr>
              <ul>
                <li>Wall Shelves</li>
                <li>Book Ends</li>
                <li>Wall Art</li>
                <li>Lamps</li>
                <li>Wall Lights</li>
                <li>Clocks</li>
                <li>Mirrors</li>
                <li>Height Charts</li>
              </ul>
            </div>
            <div>
              <p>Furnishings</p>
              <hr>
              <ul>
                <li>Bed Linen</li>
                <li>Bed Sheets</li>
                <li>Pillows</li>
                <li>Cushion Covers</li>
                <li>Blankets</li>
                <li>Comforters</li>
                <li>Flooring</li>
                <li>Carpets</li>
                <li>Floor Mats</li>
                <li>Curtains</li>
                <li>Towels</li>
                <li>Sleeping Bags</li>
                <li>Mattresses</li>
              </ul>
            </div>
            <div>
              <p>Play & Gear</p>
              <hr>
              <ul>
                <li>Fun & Learn</li>
                <li>Play House</li>
                <li>Play Mats</li>
                <li>Prams & Strollers</li>
                <li>Walkers</li>
                <li>Rockers</li>
                <li>Baby Carrier</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="type_list">
          Mattresses
          <div class="try">
            <div></div>
            <div>
              <p>Mattresses</p>
              <hr>
              <ul>
                <li>Mattresses</li>
                <li>Single Bed Mattress</li>
                <li>Queen Bed Mattress</li>
                <li>King Bed Mattress</li>
                <li>Foldable Mattress</li>
                <li>Baby Mattress</li>
                <li>Kids Mattress</li>
                <li>Mattress Protectors</li>
                <li>Mattress Toppers</li>
                <li>Pillows</li>
                <li>Bed Wedges</li>
                <li>Mattress Steaming</li>
              </ul>
            </div>
            <div>
              <p>Mattresses Type</p>
              <hr>
              <ul>
                <li>Coir</li>
                <li>Foam</li>
                <li>Memory Foam</li>
                <li>Bonnell Spring</li>
                <li>Pocket Spring</li>
                <li>Latex</li>
                <li>Coir & Foam</li>
                <li>HR Foam</li>
                <li>Cool Gel Foam</li>
                <li>Rebonded Foam</li>
              </ul>
            </div>
            <div>
              <p>Mattress Firmness</p>
              <hr>
              <ul>
                <li>Soft</li>
                <li>Medium Soft</li>
                <li>Medium Firm</li>
                <li>Firm</li>
              </ul>
            </div>
            <div>
              <p>Mattress Brand</p>
              <hr>
              <ul>
                <li>Clouddio</li>
                <li>Sleepyhead</li>
                <li>Wakefit</li>
                <li>springtek</li>
                <li>Duroflex</li>
                <li>Durfi</li>
                <li>Comforto</li>
                <li>Amore International</li>
                <li>I Sleep Seven</li>
                <li>SleepSpa</li>
                <li>Kurl-on</li>
                <li>SleepX</li>
              </ul>
            </div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div class="type_list">
          Furnishings
          <div class="try">
            <div>
              <p>Bed Linen</p>
              <hr>
              <ul>
                <li>Bed Sheets</li>
                <li>Bed Covers</li>
                <li>Bedding Sets</li>
                <li>Duvet Inserts</li>
                <li>Duvet Covers</li>
                <li>Blankets</li>
                <li>Quilts & Comforters</li>
                <li>Dohars</li>
                <li>Pillows</li>
                <li>Pillow Covers</li>
                <li>Diwan Sets</li>
              </ul>
            </div>
            <div>
              <p>Flooring</p>
              <hr>
              <ul>
                <li>Carpets</li>
                <li>Dhurries</li>
                <li>Runners</li>
                <li>Door Mats</li>
                <li>Carpet Spa</li>
              </ul>
            </div>
            <div>
              <p>Curtains</p>
              <hr>
              <ul>
                <li>Curtains & Drapes</li>
                <li>Door Curtains</li>
                <li>Window Curtains</li>
                <li>Blinds & Shades</li>
                <li>Curtain Steaming</li>
                <li>Macrame Curtains</li>
                <li>Curtain Rods</li>
                <li>Tie Backs</li>
              </ul>
            </div>
            <div>
              <p>Bath Linen</p>
              <hr>
              <ul>
                <li>Bath Mats</li>
                <li>Shower Curtains</li>
                <li>Bath Towels</li>
                <li>Hand Towels</li>
                <li>Face Towels</li>
                <li>Towel Sets</li>
              </ul>
            </div>
            <div>
              <p>Cushion & Covers</p>
              <hr>
              <ul>
                <li>Cushion Covers</li>
                <li>Chair Pads</li>
                <li>Chair Covers</li>
                <li>Cushion Inserts</li>
                <li>Floor Cushions</li>
                <li>Decorative Cushions</li>
                <li>Sofa Covers</li>
                <li>Sofa Throws</li>
              </ul>
            </div>
            <div>
              <p>Table Linen</p>
              <hr>
              <ul>
                <li>Table Runners</li>
                <li>Table Cloths</li>
                <li>Placemats</li>
              </ul>
            </div>
            <div>
              <p>Essentials</p>
              <hr>
              <ul>
                <li>Umbrellas</li>
                <li>Yoga Mats</li>
                <li>Masks</li>
                <li>Organisers</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="type_list">
          Decor
          <div class="try">
            <div>
              <p>Wall Accents</p>
              <hr>
              <ul>
                <li>Wall Shelves</li>
                <li>Wall Cabinets</li>
                <li>Mirrors</li>
                <li>Clocks</li>
                <li>Screens & Dividers</li>
                <li>Photo Frames</li>
                <li>Key Holders</li>
                <li>Magazine Holders</li>
                <li>Set Top Box Holders</li>
                <li>Jharokhas</li>
                <li>Decor Clearance Sale</li>
              </ul>
            </div>
            <div>
              <p>Wall Art</p>
              <hr>
              <ul>
                <li>Metal Wall Art</li>
                <li>Wooden Wall Art</li>
                <li>Wall Plates</li>
                <li>Original Paintings</li>
                <li>Art Panels</li>
                <li>Art Prints</li>
                <li>Ethnic Art</li>
                <li>Wall Masks</li>
                <li>Faux Animal Busts</li>
              </ul>
            </div>
            <div>
              <p>Table Decor</p>
              <hr>
              <ul>
                <li>Vases</li>
                <li>Table Clocks</li>
                <li>Table Photo Frames</li>
                <li>Home Fragrances</li>
                <li>Figurines</li>
                <li>Transport Decor</li>
                <li>Nautical Decor</li>
                <li>Monuments Decor</li>
                <li>Vintage Decor</li>
                <li>Military Decor</li>
                <li>Table Organizers</li>
                <li>Decorative Plates</li>
              </ul>
            </div>
            <div>
              <p>Spiritual</p>
              <hr>
              <ul>
                <li>Mandirs</li>
                <li>Pooja Shelves</li>
                <li>Religious Idols</li>
                <li>Religious Frames</li>
                <li>Chowkies</li>
                <li>Feng Shui</li>
                <li>Pooja Essentials</li>
                <li>Festive Decor</li>
                <li>Prayer Mats</li>
                <li>Spiritual Coins</li>
              </ul>
            </div>
            <div>
              <p>Home Garden</p>
              <hr>
              <ul>
                <li>Pots & Planters</li>
                <li>Planter Stands</li>
                <li>Natural Plants</li>
                <li>Artificial Plants</li>
                <li>Artificial Flowers</li>
                <li>Artificial Grass</li>
                <li>Indoor Fountains</li>
                <li>Decorative Pebbles</li>
                <li>Garden Figurines</li>
                <li>Bird Houses</li>
                <li>Gardening Tools</li>
              </ul>
            </div>
            <div>
              <p>Tableware</p>
              <hr>
              <ul>
                <li>Teaware</li>
                <li>Dinnerware</li>
                <li>Serveware</li>
                <li>Drinkware</li>
                <li>Barware</li>
                <li>Bakeware</li>
                <li>Coasters and Trivets</li>
                <li>Placemats</li>
                <li>Table Runners</li>
                <li>Knives & Cutlery</li>
                <li>Clearance Sale</li>
              </ul>
            </div>
            <div>
              <p>Home Services</p>
              <hr>
              <ul>
                <li>Furniture Care</li>
                <li>Sofa Spa</li>
                <li>Chair Spa</li>
                <li>Carpet Spa</li>
                <li>Curtain Steaming</li>
                <li>Mattress Steaming</li>
                <li>Home Cleaning</li>
                <li>Kitchen and Bathroom</li>
                <li>Pest Control</li>
                <li>Termite Control</li>
                <li>Bed bug Control</li>
                <li>Cockroach Control</li>
                <li>Disinfection Service</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="type_list">
          Lighting
          <div class="try">
            <div>
              <p>Lamps</p>
              <hr>
              <ul>
                <li>Floor Lamps</li>
                <li>Table Lamps</li>
                <li>Study Lamps</li>
                <li>Lampshades</li>
                <li>Table Lanterns</li>
                <li>Filament Bulbs</li>
              </ul>
            </div>
            <div>
              <p>Wall Lights</p>
              <hr>
              <ul>
                <li>Wall Sconces</li>
                <li>Wall Lanterns</li>
                <li>Picture Lights</li>
                <li>Bath Lights</li>
              </ul>
            </div>
            <div>
              <p>Ceiling Lights</p>
              <hr>
              <ul>
                <li>Chandeliers</li>
                <li>Hanging Lights</li>
                <li>Flush Mounts</li>
                <li>Panel Lights</li>
                <li>Spot Lights</li>
              </ul>
            </div>
            <div>
              <p>Smart Lights</p>
              <hr>
              <ul>
                <li>Smart Homes</li>
                <li>Smart Lamps</li>
                <li>Smart Chandeliers</li>
                <li>Smart Ceiling Lights</li>
              </ul>
            </div>
            <div>
              <p>Outdoor Lights</p>
              <hr>
              <ul>
                <li>Gate Lights</li>
                <li>Outdoor Wall Lights</li>
                <li>Outdoor Hanging</li>
                <li>Garden Lights</li>
              </ul>
            </div>
            <div>
              <p>Festive Lights</p>
              <hr>
              <ul>
                <li>Candles</li>
                <li>Decorative Candles</li>
                <li>Scented Candles</li>
                <li>Tea Lights Candles</li>
                <li>Candle Holders</li>
                <li>String Lights</li>
                <li>Decorative Lights</li>
                <li>Tea Light Holders</li>
                <li>Diffusers</li>
              </ul>
            </div>
            <div>
              <p>LED Lights</p>
              <hr>
              <ul>
                <li>LED Lamps</li>
                <li>LED Ceiling Lights</li>
                <li>LED Wall Lights</li>
                <li>LED Bulbs</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="type_list">
          Appliances
          <div class="try">
            <div></div>
            <div>
              <p>Kitchen Appliances</p>
              <hr>
              <ul>
                <li>Ovens and OTGs</li>
                <li>Microwaves</li>
                <li>Fryers</li>
                <li>Mixer & Grinders</li>
                <li>Food Processors</li>
                <li>Hand Blenders</li>
                <li>Choppers</li>
                <li>Sandwich Makers</li>
                <li>Toasters</li>
                <li>Bread Makers</li>
                <li>Coffee Makers</li>
                <li>Electric Kettles</li>
                <li>Rice Cookers</li>
              </ul>
            </div>
            <div>
              <p>Home Appliances</p>
              <hr>
              <ul>
                <li>Air Purifiers</li>
                <li>Water Purifiers</li>
                <li>Air Coolers</li>
                <li>Room Heaters</li>
                <li>Vacuum Cleaners</li>
                <li>Water Geysers</li>
                <li>Fans</li>
                <li>Iron and Steamers</li>
                <li>Refrigerators</li>
                <li>Washing Machines</li>
                <li>Dishwashers</li>
                <li>Air Conditioners</li>
                <li>Televisions</li>
              </ul>
            </div>
            <div>
              <p>Bar Appliances</p>
              <hr>
              <ul>
                <li>Wine Chillers</li>
                <li>Mini Refrigerators</li>
              </ul>
            </div>
            <div>
              <p>Chimneys</p>
              <hr>
              <ul>
                <li>Wall-Mounted</li>
                <li>Island Chimneys</li>
                <li>Designer Chimneys</li>
                <li>Straight Line</li>
              </ul>
            </div>
            <div>
              <p>Cooktops</p>
              <hr>
              <ul>
                <li>Gas Stoves</li>
                <li>Induction Cooktops</li>
                <li>Cooking Ranges</li>
              </ul>
            </div>
            <div>
              <p>Built-in Appliance</p>
              <hr>
              <ul>
                <li>Built-in Microwaves</li>
                <li>Built-in Ovens</li>
                <li>Built-in Hobs</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="type_list">
          Modular Furniture
          <div class="try">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  </div>
    `;
}

export default navbar;
