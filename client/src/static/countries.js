const countries = [
    { symbol:"AF", name:"Afghanistan" },
    { symbol:"AL", name:"Albania" },
    { symbol:"DZ", name:"Algeria" },
    { symbol:"AS", name:"American Samoa" },
    { symbol:"AD", name:"Andorra" },
    { symbol:"AO", name:"Angola" },
    { symbol:"AI", name:"Anguilla" },
    { symbol:"AQ", name:"Antarctica" },
    { symbol:"AG", name:"Antigua and Barbuda" },
    { symbol:"AR", name:"Argentina" },
    { symbol:"AM", name:"Armenia" },
    { symbol:"AW", name:"Aruba" },
    { symbol:"AU", name:"Australia" },
    { symbol:"AT", name:"Austria" },
    { symbol:"AZ", name:"Azerbaijan" },
    { symbol:"BS", name:"Bahamas" },
    { symbol:"BH", name:"Bahrain" },
    { symbol:"BD", name:"Bangladesh" },
    { symbol:"BB", name:"Barbados" },
    { symbol:"BY", name:"Belarus" },
    { symbol:"BE", name:"Belgium" },
    { symbol:"BZ", name:"Belize" },
    { symbol:"BJ", name:"Benin" },
    { symbol:"BM", name:"Bermuda" },
    { symbol:"BT", name:"Bhutan" },
    { symbol:"BO", name:"Bolivia" },
    { symbol:"BA", name:"Bosnia and Herzegovina" },
    { symbol:"BW", name:"Botswana" },
    { symbol:"BV", name:"Bouvet Island" },
    { symbol:"BR", name:"Brazil" },
    { symbol:"BQ", name:"British Antarctic Territory" },
    { symbol:"IO", name:"British Indian Ocean Territory" },
    { symbol:"VG", name:"British Virgin Islands" },
    { symbol:"BN", name:"Brunei" },
    { symbol:"BG", name:"Bulgaria" },
    { symbol:"BF", name:"Burkina Faso" },
    { symbol:"BI", name:"Burundi" },
    { symbol:"KH", name:"Cambodia" },
    { symbol:"CM", name:"Cameroon" },
    { symbol:"CA", name:"Canada" },
    { symbol:"CT", name:"Canton and Enderbury Islands" },
    { symbol:"CV", name:"Cape Verde" },
    { symbol:"KY", name:"Cayman Islands" },
    { symbol:"CF", name:"Central African Republic" },
    { symbol:"TD", name:"Chad" },
    { symbol:"CL", name:"Chile" },
    { symbol:"CN", name:"China" },
    { symbol:"CX", name:"Christmas Island" },
    { symbol:"CC", name:"Cocos Island" },
    { symbol:"CO", name:"Colombia" },
    { symbol:"KM", name:"Comoros" },
    { symbol:"CG", name:"Congo - Brazzaville" },
    { symbol:"CD", name:"Congo - Kinshasa" },
    { symbol:"CK", name:"Cook Islands" },
    { symbol:"CR", name:"Costa Rica" },
    { symbol:"HR", name:"Croatia" },
    { symbol:"CU", name:"Cuba" },
    { symbol:"CY", name:"Cyprus" },
    { symbol:"CZ", name:"Czech Republic" },
    { symbol:"CI", name:"Côte d’Ivoire" },
    { symbol:"DK", name:"Denmark" },
    { symbol:"DJ", name:"Djibouti" },
    { symbol:"DM", name:"Dominica" },
    { symbol:"DO", name:"Dominican Republic" },
    { symbol:"NQ", name:"Dronning Maud Land" },
    { symbol:"DD", name:"East Germany" },
    { symbol:"EC", name:"Ecuador" },
    { symbol:"EG", name:"Egypt" },
    { symbol:"SV", name:"El Salvador" },
    { symbol:"GQ", name:"Equatorial Guinea" },
    { symbol:"ER", name:"Eritrea" },
    { symbol:"EE", name:"Estonia" },
    { symbol:"ET", name:"Ethiopia" },
    { symbol:"FK", name:"Falkland Islands" },
    { symbol:"FO", name:"Faroe Islands" },
    { symbol:"FJ", name:"Fiji" },
    { symbol:"FI", name:"Finland" },
    { symbol:"FR", name:"France" },
    { symbol:"GF", name:"French Guiana" },
    { symbol:"PF", name:"French Polynesia" },
    { symbol:"TF", name:"French SouthernTerritories" },
    { symbol:"FQ", name:"French Southern and Antarctic Territories" },
    { symbol:"GA", name:"Gabon" },
    { symbol:"GM", name:"Gambia" },
    { symbol:"GE", name:"Georgia" },
    { symbol:"DE", name:"Germany" },
    { symbol:"GH", name:"Ghana" },
    { symbol:"GI", name:"Gibraltar" },
    { symbol:"GR", name:"Greece" },
    { symbol:"GL", name:"Greenland" },
    { symbol:"GD", name:"Grenada" },
    { symbol:"GP", name:"Guadeloupe" },
    { symbol:"GU", name:"Guam" },
    { symbol:"GT", name:"Guatemala" },
    { symbol:"GG", name:"Guernsey" },
    { symbol:"GN", name:"Guinea" },
    { symbol:"GW", name:"Guinea - Bissau" },
    { symbol:"GY", name:"Guyana" },
    { symbol:"HT", name:"Haiti" },
    { symbol:"HM", name:"Heard Island and McDonald Islands" },
    { symbol:"HN", name:"Honduras" },
    { symbol:"HK", name:"Hong Kong SAR China" },
    { symbol:"HU", name:"Hungary" },
    { symbol:"IS", name:"Iceland" },
    { symbol:"IN", name:"India" },
    { symbol:"ID", name:"Indonesia" },
    { symbol:"IR", name:"Iran" },
    { symbol:"IQ", name:"Iraq" },
    { symbol:"IE", name:"Ireland" },
    { symbol:"IM", name:"Isle of Man" },
    { symbol:"IL", name:"Israel" },
    { symbol:"IT", name:"Italy" },
    { symbol:"JM", name:"Jamaica" },
    { symbol:"JP", name:"Japan" },
    { symbol:"JE", name:"Jersey" },
    { symbol:"JT", name:"Johnston Island" },
    { symbol:"JO", name:"Jordan" },
    { symbol:"KZ", name:"Kazakhstan" },
    { symbol:"KE", name:"Kenya" },
    { symbol:"KI", name:"Kiribati" },
    { symbol:"KW", name:"Kuwait" },
    { symbol:"KG", name:"Kyrgyzstan" },
    { symbol:"LA", name:"Laos" },
    { symbol:"LV", name:"Latvia" },
    { symbol:"LB", name:"Lebanon" },
    { symbol:"LS", name:"Lesotho" },
    { symbol:"LR", name:"Liberia" },
    { symbol:"LY", name:"Libya" },
    { symbol:"LI", name:"Liechtenstein" },
    { symbol:"LT", name:"Lithuania" },
    { symbol:"LU", name:"Luxembourg" },
    { symbol:"MO", name:"Macau SAR China" },
    { symbol:"MK", name:"Macedonia" },
    { symbol:"MG", name:"Madagascar" },
    { symbol:"MW", name:"Malawi" },
    { symbol:"MY", name:"Malaysia" },
    { symbol:"MV", name:"Maldives" },
    { symbol:"ML", name:"Mali" },
    { symbol:"MT", name:"Malta" },
    { symbol:"MH", name:"Marshall Islands" },
    { symbol:"MQ", name:"Martinique" },
    { symbol:"MR", name:"Mauritania" },
    { symbol:"MU", name:"Mauritius" },
    { symbol:"YT", name:"Mayotte" },
    { symbol:"FX", name:"Metropolitan France" },
    { symbol:"MX", name:"Mexico" },
    { symbol:"FM", name:"Micronesia" },
    { symbol:"MI", name:"Midway Islands" },
    { symbol:"MD", name:"Moldova" },
    { symbol:"MC", name:"Monaco" },
    { symbol:"MN", name:"Mongolia" },
    { symbol:"ME", name:"Montenegro" },
    { symbol:"MS", name:"Montserrat" },
    { symbol:"MA", name:"Morocco" },
    { symbol:"MZ", name:"Mozambique" },
    { symbol:"MM", name:"Myanmar[Burma]" },
    { symbol:"NA", name:"Namibia" },
    { symbol:"NR", name:"Nauru" },
    { symbol:"NP", name:"Nepal" },
    { symbol:"NL", name:"Netherlands" },
    { symbol:"AN", name:"Netherlands Antilles" },
    { symbol:"NT", name:"Neutral Zone" },
    { symbol:"NC", name:"New Caledonia" },
    { symbol:"NZ", name:"New Zealand" },
    { symbol:"NI", name:"Nicaragua" },
    { symbol:"NE", name:"Niger" },
    { symbol:"NG", name:"Nigeria" },
    { symbol:"NU", name:"Niue" },
    { symbol:"NF", name:"Norfolk Island" },
    { symbol:"KP", name:"North Korea" },
    { symbol:"VD", name:"North Vietnam" },
    { symbol:"MP", name:"Northern Mariana Islands" },
    { symbol:"NO", name:"Norway" },
    { symbol:"OM", name:"Oman" },
    { symbol:"PC", name:"Pacific Islands Trust Territory" },
    { symbol:"PK", name:"Pakistan" },
    { symbol:"PW", name:"Palau" },
    { symbol:"PS", name:"Palestinian Territories" },
    { symbol:"PA", name:"Panama" },
    { symbol:"PZ", name:"Panama Canal Zone" },
    { symbol:"PG", name:"Papua New Guinea" },
    { symbol:"PY", name:"Paraguay" },
    { symbol:"YD", name:"People's Democratic Republic of Yemen" },
    { symbol:"PE", name:"Peru" },
    { symbol:"PH", name:"Philippines" },
    { symbol:"PN", name:"Pitcairn Islands" },
    { symbol:"PL", name:"Poland" },
    { symbol:"PT", name:"Portugal" },
    { symbol:"PR", name:"Puerto Rico" },
    { symbol:"QA", name:"Qatar" },
    { symbol:"RO", name:"Romania" },
    { symbol:"RU", name:"Russia" },
    { symbol:"RW", name:"Rwanda" },
    { symbol:"RE", name:"Réunion" },
    { symbol:"BL", name:"Saint Barthélemy" },
    { symbol:"SH", name:"Saint Helena" },
    { symbol:"KN", name:"Saint Kitts and Nevis" },
    { symbol:"LC", name:"Saint Lucia" },
    { symbol:"MF", name:"Saint Martin" },
    { symbol:"PM", name:"Saint Pierre and Miquelon" },
    { symbol:"VC", name:"Saint Vincent and        the Grenadines" },
    { symbol:"WS", name:"Samoa" },
    { symbol:"SM", name:"San Marino" },
    { symbol:"SA", name:"Saudi Arabia" },
    { symbol:"SN", name:"Senegal" },
    { symbol:"RS", name:"Serbia" },
    { symbol:"CS", name:"Serbia and Montenegro" },
    { symbol:"SC", name:"Seychelles" },
    { symbol:"SL", name:"Sierra Leone" },
    { symbol:"SG", name:"Singapore" },
    { symbol:"SK", name:"Slovakia" },
    { symbol:"SI", name:"Slovenia" },
    { symbol:"SB", name:"Solomon Islands" },
    { symbol:"SO", name:"Somalia" },
    { symbol:"ZA", name:"South Africa" },
    { symbol:"GS", name:"South Georgia and the South Sandwich Islands" },
    { symbol:"KR", name:"South Korea" },
    { symbol:"ES", name:"Spain" },
    { symbol:"LK", name:"Sri Lanka" },
    { symbol:"SD", name:"Sudan" },
    { symbol:"SR", name:"Suriname" },
    { symbol:"SJ", name:"Svalbard and        Jan        Mayen" },
    { symbol:"SZ", name:"Swaziland" },
    { symbol:"SE", name:"Sweden" },
    { symbol:"CH", name:"Switzerland" },
    { symbol:"SY", name:"Syria" },
    { symbol:"ST", name:"São Tomé and Príncipe" },
    { symbol:"TW", name:"Taiwan" },
    { symbol:"TJ", name:"Tajikistan" },
    { symbol:"TZ", name:"Tanzania" },
    { symbol:"TH", name:"Thailand" },
    { symbol:"TL", name:"Timor - Leste" },
    { symbol:"TG", name:"Togo" },
    { symbol:"TK", name:"Tokelau" },
    { symbol:"TO", name:"Tonga" },
    { symbol:"TT", name:"Trinidad and Tobago" },
    { symbol:"TN", name:"Tunisia" },
    { symbol:"TR", name:"Turkey" },
    { symbol:"TM", name:"Turkmenistan" },
    { symbol:"TC", name:"Turks and Caicos Islands" },
    { symbol:"TV", name:"Tuvalu" },
    { symbol:"UM", name:"U.S.Minor Outlying Islands" },
    { symbol:"PU", name:"U.S.Miscellaneous Pacific Islands" },
    { symbol:"VI", name:"U.S.Virgin Islands" },
    { symbol:"UG", name:"Uganda" },
    { symbol:"UA", name:"Ukraine" },
    { symbol:"SU", name:"Union of Soviet Socialist Republics" },
    { symbol:"AE", name:"United Arab Emirates" },
    { symbol:"GB", name:"United Kingdom" },
    { symbol:"US", name:"United States" },
    { symbol:"UY", name:"Uruguay" },
    { symbol:"UZ", name:"Uzbekistan" },
    { symbol:"VU", name:"Vanuatu" },
    { symbol:"VA", name:"Vatican City" },
    { symbol:"VE", name:"Venezuela" },
    { symbol:"VN", name:"Vietnam" },
    { symbol:"WK", name:"Wake Island" },
    { symbol:"WF", name:"Wallis and Futuna" },
    { symbol:"EH", name:"Western Sahara" },
    { symbol:"YE", name:"Yemen" },
    { symbol:"ZM", name:"Zambia" },
    { symbol:"ZW", name:"Zimbabwe" },
    { symbol:"AX", name:"Åland Islands" }
];

export default countries