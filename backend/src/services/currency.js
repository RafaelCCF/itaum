const request = require('request-promise');

exports.currencyList = { 
    AED: 'United Arab Emirates Dirham',
    AFN: 'Afghan Afghani',
    ALL: 'Albanian Lek',
    AMD: 'Armenian Dram',
    ANG: 'Netherlands Antillean Guilder',
    AOA: 'Angolan Kwanza',
    ARS: 'Argentine Peso',
    AUD: 'Australian Dollar',
    AWG: 'Aruban Florin',
    AZN: 'Azerbaijani Manat',
    BAM: 'Bosnia-Herzegovina Convertible Mark',
    BBD: 'Barbadian Dollar',
    BDT: 'Bangladeshi Taka',
    BGN: 'Bulgarian Lev',
    BHD: 'Bahraini Dinar',
    BIF: 'Burundian Franc',
    BMD: 'Bermudan Dollar',
    BND: 'Brunei Dollar',
    BOB: 'Bolivian Boliviano',
    BRL: 'Brazilian Real',
    BSD: 'Bahamian Dollar',
    BTC: 'Bitcoin',
    BTN: 'Bhutanese Ngultrum',
    BWP: 'Botswanan Pula',
    BYN: 'New Belarusian Ruble',
    BYR: 'Belarusian Ruble',
    BZD: 'Belize Dollar',
    CAD: 'Canadian Dollar',
    CDF: 'Congolese Franc',
    CHF: 'Swiss Franc',
    CLF: 'Chilean Unit of Account (UF)',
    CLP: 'Chilean Peso',
    CNY: 'Chinese Yuan',
    COP: 'Colombian Peso',
    CRC: 'Costa Rican Colón',
    CUC: 'Cuban Convertible Peso',
    CUP: 'Cuban Peso',
    CVE: 'Cape Verdean Escudo',
    CZK: 'Czech Republic Koruna',
    DJF: 'Djiboutian Franc',
    DKK: 'Danish Krone',
    DOP: 'Dominican Peso',
    DZD: 'Algerian Dinar',
    EGP: 'Egyptian Pound',
    ERN: 'Eritrean Nakfa',
    ETB: 'Ethiopian Birr',
    EUR: 'Euro',
    FJD: 'Fijian Dollar',
    FKP: 'Falkland Islands Pound',
    GBP: 'British Pound Sterling',
    GEL: 'Georgian Lari',
    GGP: 'Guernsey Pound',
    GHS: 'Ghanaian Cedi',
    GIP: 'Gibraltar Pound',
    GMD: 'Gambian Dalasi',
    GNF: 'Guinean Franc',
    GTQ: 'Guatemalan Quetzal',
    GYD: 'Guyanaese Dollar',
    HKD: 'Hong Kong Dollar',
    HNL: 'Honduran Lempira',
    HRK: 'Croatian Kuna',
    HTG: 'Haitian Gourde',
    HUF: 'Hungarian Forint',
    IDR: 'Indonesian Rupiah',
    ILS: 'Israeli New Sheqel',
    IMP: 'Manx pound',
    INR: 'Indian Rupee',
    IQD: 'Iraqi Dinar',
    IRR: 'Iranian Rial',
    ISK: 'Icelandic Króna',
    JEP: 'Jersey Pound',
    JMD: 'Jamaican Dollar',
    JOD: 'Jordanian Dinar',
    JPY: 'Japanese Yen',
    KES: 'Kenyan Shilling',
    KGS: 'Kyrgystani Som',
    KHR: 'Cambodian Riel',
    KMF: 'Comorian Franc',
    KPW: 'North Korean Won',
    KRW: 'South Korean Won',
    KWD: 'Kuwaiti Dinar',
    KYD: 'Cayman Islands Dollar',
    KZT: 'Kazakhstani Tenge',
    LAK: 'Laotian Kip',
    LBP: 'Lebanese Pound',
    LKR: 'Sri Lankan Rupee',
    LRD: 'Liberian Dollar',
    LSL: 'Lesotho Loti',
    LTL: 'Lithuanian Litas',
    LVL: 'Latvian Lats',
    LYD: 'Libyan Dinar',
    MAD: 'Moroccan Dirham',
    MDL: 'Moldovan Leu',
    MGA: 'Malagasy Ariary',
    MKD: 'Macedonian Denar',
    MMK: 'Myanma Kyat',
    MNT: 'Mongolian Tugrik',
    MOP: 'Macanese Pataca',
    MRO: 'Mauritanian Ouguiya',
    MUR: 'Mauritian Rupee',
    MVR: 'Maldivian Rufiyaa',
    MWK: 'Malawian Kwacha',
    MXN: 'Mexican Peso',
    MYR: 'Malaysian Ringgit',
    MZN: 'Mozambican Metical',
    NAD: 'Namibian Dollar',
    NGN: 'Nigerian Naira',
    NIO: 'Nicaraguan Córdoba',
    NOK: 'Norwegian Krone',
    NPR: 'Nepalese Rupee',
    NZD: 'New Zealand Dollar',
    OMR: 'Omani Rial',
    PAB: 'Panamanian Balboa',
    PEN: 'Peruvian Nuevo Sol',
    PGK: 'Papua New Guinean Kina',
    PHP: 'Philippine Peso',
    PKR: 'Pakistani Rupee',
    PLN: 'Polish Zloty',
    PYG: 'Paraguayan Guarani',
    QAR: 'Qatari Rial',
    RON: 'Romanian Leu',
    RSD: 'Serbian Dinar',
    RUB: 'Russian Ruble',
    RWF: 'Rwandan Franc',
    SAR: 'Saudi Riyal',
    SBD: 'Solomon Islands Dollar',
    SCR: 'Seychellois Rupee',
    SDG: 'Sudanese Pound',
    SEK: 'Swedish Krona',
    SGD: 'Singapore Dollar',
    SHP: 'Saint Helena Pound',
    SLL: 'Sierra Leonean Leone',
    SOS: 'Somali Shilling',
    SRD: 'Surinamese Dollar',
    STD: 'São Tomé and Príncipe Dobra',
    SVC: 'Salvadoran Colón',
    SYP: 'Syrian Pound',
    SZL: 'Swazi Lilangeni',
    THB: 'Thai Baht',
    TJS: 'Tajikistani Somoni',
    TMT: 'Turkmenistani Manat',
    TND: 'Tunisian Dinar',
    TOP: 'Tongan Paʻanga',
    TRY: 'Turkish Lira',
    TTD: 'Trinidad and Tobago Dollar',
    TWD: 'New Taiwan Dollar',
    TZS: 'Tanzanian Shilling',
    UAH: 'Ukrainian Hryvnia',
    UGX: 'Ugandan Shilling',
    USD: 'United States Dollar',
    UYU: 'Uruguayan Peso',
    UZS: 'Uzbekistan Som',
    VEF: 'Venezuelan Bolívar Fuerte',
    VND: 'Vietnamese Dong',
    VUV: 'Vanuatu Vatu',
    WST: 'Samoan Tala',
    XAF: 'CFA Franc BEAC',
    XAG: 'Silver (troy ounce)',
    XAU: 'Gold (troy ounce)',
    XCD: 'East Caribbean Dollar',
    XDR: 'Special Drawing Rights',
    XOF: 'CFA Franc BCEAO',
    XPF: 'CFP Franc',
    YER: 'Yemeni Rial',
    ZAR: 'South African Rand',
    ZMK: 'Zambian Kwacha (pre-2013)',
    ZMW: 'Zambian Kwacha',
    ZWL: 'Zimbabwean Dollar' 
};

/**
 * Esta funcion permite hacer update a la lista de monedas disponibles
 */
exports.updateCurrencyList = () =>{
    request.get(`http://apilayer.net/api/list?access_key=${process.env.CURRENCY_API_KEY}`)
        .then( response => {
            response = JSON.parse(response);
            this.currencyList = response.currencies;
        }).catch( error =>{
            console.log(`Ha ocurrido un error al hacer update de lista de monedas: ${error}`);
        });
};

exports.currencyValues = {
    "USDAED": 3.673204,
    "USDAFN": 78.301041,
    "USDALL": 111.375041,
    "USDAMD": 475.670403,
    "USDANG": 1.754704,
    "USDAOA": 372.441041,
    "USDARS": 57.159504,
    "USDAUD": 1.47865,
    "USDAWG": 1.8,
    "USDAZN": 1.705041,
    "USDBAM": 1.78755,
    "USDBBD": 2.0187,
    "USDBDT": 84.535041,
    "USDBGN": 1.78755,
    "USDBHD": 0.37702,
    "USDBIF": 1847.2,
    "USDBMD": 1,
    "USDBND": 1.378041,
    "USDBOB": 6.913804,
    "USDBRL": 4.17005,
    "USDBSD": 0.999805,
    "USDBTC": 0.000124,
    "USDBTN": 70.569041,
    "USDBWP": 11.023504,
    "USDBYN": 2.072304,
    "USDBYR": 19600,
    "USDBZD": 2.015304,
    "USDCAD": 1.324795,
    "USDCDF": 1666.000362,
    "USDCHF": 0.990865,
    "USDCLF": 0.026322,
    "USDCLP": 726.285041,
    "USDCNY": 7.122804,
    "USDCOP": 3446.4,
    "USDCRC": 582.440395,
    "USDCUC": 1,
    "USDCUP": 26.5,
    "USDCVE": 100.790394,
    "USDCZK": 23.61804,
    "USDDJF": 177.720394,
    "USDDKK": 6.824404,
    "USDDOP": 52.090393,
    "USDDZD": 120.66504,
    "USDEGP": 16.31104,
    "USDERN": 15.000358,
    "USDETB": 29.403504,
    "USDEUR": 0.91399,
    "USDFJD": 2.190204,
    "USDFKP": 0.811155,
    "USDGBP": 0.81377,
    "USDGEL": 2.960391,
    "USDGGP": 0.813554,
    "USDGHS": 5.41405,
    "USDGIP": 0.811155,
    "USDGMD": 50.18504,
    "USDGNF": 9234.85039,
    "USDGTQ": 7.728604,
    "USDGYD": 208.770389,
    "USDHKD": 7.840204,
    "USDHNL": 24.60804,
    "USDHRK": 6.772604,
    "USDHTG": 96.13304,
    "USDHUF": 306.550388,
    "USDIDR": 14194.8,
    "USDILS": 3.48185,
    "USDIMP": 0.813554,
    "USDINR": 70.508504,
    "USDIQD": 1193,
    "USDIRR": 42105.000352,
    "USDISK": 123.110386,
    "USDJEP": 0.813554,
    "USDJMD": 135.16504,
    "USDJOD": 0.70904,
    "USDJPY": 107.93504,
    "USDKES": 103.910385,
    "USDKGS": 69.703904,
    "USDKHR": 4099.203799,
    "USDKMF": 450.503796,
    "USDKPW": 900.232466,
    "USDKRW": 1203.00035,
    "USDKWD": 0.30425,
    "USDKYD": 0.83319,
    "USDKZT": 387.950383,
    "USDLAK": 8821.403782,
    "USDLBP": 1511.950382,
    "USDLKR": 181.840382,
    "USDLRD": 209.125039,
    "USDLSL": 15.090382,
    "USDLTL": 2.95274,
    "USDLVL": 0.60489,
    "USDLYD": 1.41475,
    "USDMAD": 9.73605,
    "USDMDL": 17.747039,
    "USDMGA": 3761.803758,
    "USDMKD": 56.315504,
    "USDMMK": 1531.75038,
    "USDMNT": 2661.51845,
    "USDMOP": 8.074404,
    "USDMRO": 357.000346,
    "USDMUR": 36.505039,
    "USDMVR": 15.410378,
    "USDMWK": 734.720378,
    "USDMXN": 19.69135,
    "USDMYR": 4.193039,
    "USDMZN": 61.915039,
    "USDNAD": 15.090377,
    "USDNGN": 362.000344,
    "USDNIO": 33.549039,
    "USDNOK": 9.076804,
    "USDNPR": 112.915039,
    "USDNZD": 1.58795,
    "USDOMR": 0.385055,
    "USDPAB": 0.99983,
    "USDPEN": 3.38185,
    "USDPGK": 3.40295,
    "USDPHP": 51.894504,
    "USDPKR": 156.820375,
    "USDPLN": 4.00445,
    "USDPYG": 6384.303699,
    "USDQAR": 3.641038,
    "USDRON": 4.347304,
    "USDRSD": 107.375038,
    "USDRUB": 64.661104,
    "USDRWF": 923.115,
    "USDSAR": 3.75145,
    "USDSBD": 8.24175,
    "USDSCR": 13.702038,
    "USDSDG": 45.098038,
    "USDSEK": 9.794904,
    "USDSGD": 1.38143,
    "USDSHP": 1.320904,
    "USDSLL": 9450.000339,
    "USDSOS": 581.000338,
    "USDSRD": 7.458038,
    "USDSTD": 21560.79,
    "USDSVC": 8.748704,
    "USDSYP": 515.000338,
    "USDSZL": 15.052504,
    "USDTHB": 30.636038,
    "USDTJS": 9.68825,
    "USDTMT": 3.51,
    "USDTND": 2.869304,
    "USDTOP": 2.32785,
    "USDTRY": 5.670704,
    "USDTTD": 6.775804,
    "USDTWD": 31.047038,
    "USDTZS": 2297.603635,
    "USDUAH": 24.092038,
    "USDUGX": 3684.303631,
    "USDUSD": 1,
    "USDUYU": 36.878504,
    "USDUZS": 9433.303624,
    "USDVEF": 9.987504,
    "USDVND": 23200.7,
    "USDVUV": 116.450921,
    "USDWST": 2.658875,
    "USDXAF": 599.540365,
    "USDXAG": 0.057065,
    "USDXAU": 0.000668,
    "USDXCD": 2.70255,
    "USDXDR": 0.733004,
    "USDXOF": 599.540364,
    "USDXPF": 109.000332,
    "USDYER": 250.350364,
    "USDZAR": 15.156304,
    "USDZMK": 9001.203593,
    "USDZMW": 13.172504,
    "USDZWL": 322.000001
};

/**
 * Esta funcion permite hacer update a la lista de cambio entre USD y el resto de las monedas
 */
exports.updateCurrencyValues = () =>{
    request.get(`http://apilayer.net/api/live?access_key=${process.env.CURRENCY_API_KEY}`)
        .then(response =>{
            response = JSON.parse(response);
            this.currencyValues = response.quotes;
        }).catch(error =>{
            console.log(`Ha ocurrido un error al hacer update de currencyValues: ${error}`);
        });
};

exports.convertFromTo = (to, from, quantity, beerPriceFrom) =>{
    let value = null;
    let error = null;
    let fromValue = this.currencyValues[`USD${from.toUpperCase()}`];
    let toValue = this.currencyValues[`USD${to.toUpperCase()}`];
    if(!fromValue || !toValue) error = "No se encontró el formato de moneda";
    let perunity = fromValue / toValue;
    value = perunity * quantity* beerPriceFrom;
    return [error, value];
};
