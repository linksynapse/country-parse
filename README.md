# country-parse

[![MIT License][license-image]][license-url]
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Flinksynapse%2Fcountry-parse.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2Flinksynapse%2Fcountry-parse?ref=badge_shield)

## Project Status
country-parse is currently preparing to add features.

Please write down the recommended function or bug issue here.

- [Issue](https://github.com/linksynapse/country-parse/issues)
- [Changelog](CHANGELOG.md)

## Install
```bash
npm install --save country-parse
```

## Example
### useage - get all list
```javascript
/* search country property list */
import countryParse from "country-parse";

const list = countryParse.GetAll();
console.log(list);
```

### useage - find list
```javascript
/* search country property list by country name */
import countryParse from "country-parse";

// return country list include 'k' data
const list = countryParse.LikeByName('k');
//           countryParse.LikeByAlpha2('k');
//           countryParse.LikeByAlpha3('kor');
console.log(list);
```
### output
```json
[
  { name: 'Burkina Faso', alpha2: 'BF', alpha3: 'BFA', numeric: 854 },
  {
    name: 'Cocos (Keeling) Islands (the)',
    alpha2: 'CC',
    alpha3: 'CCK',
    numeric: 166    
  },
  {
    name: 'Cook Islands (the)',
    alpha2: 'CK',
    alpha3: 'COK',
    numeric: 184
  },
  { name: 'Denmark', alpha2: 'DK', alpha3: 'DNK', numeric: 208 },
  {
    name: 'Falkland Islands (the) [Malvinas]',
    alpha2: 'FK',
    alpha3: 'FLK',
    numeric: 238
  },
  { name: 'Hong Kong', alpha2: 'HK', alpha3: 'HKG', numeric: 344 },
  { name: 'Kazakhstan', alpha2: 'KZ', alpha3: 'KAZ', numeric: 398 },
  { name: 'Kenya', alpha2: 'KE', alpha3: 'KEN', numeric: 404 },
  { name: 'Kiribati', alpha2: 'KI', alpha3: 'KIR', numeric: 296 },
  {
    name: "Korea (the Democratic People's Republic of)",
    alpha2: 'KP',
    alpha3: 'PRK',
    numeric: 408
  },
  {
    name: 'Korea (the Republic of)',
    alpha2: 'KR',
    alpha3: 'KOR',
    numeric: 410
  },
  { name: 'Kuwait', alpha2: 'KW', alpha3: 'KWT', numeric: 414 },
  { name: 'Kyrgyzstan', alpha2: 'KG', alpha3: 'KGZ', numeric: 417 },
  { name: 'Norfolk Island', alpha2: 'NF', alpha3: 'NFK', numeric: 574 },
  { name: 'Pakistan', alpha2: 'PK', alpha3: 'PAK', numeric: 586 },
  {
    name: 'Saint Kitts and Nevis',
    alpha2: 'KN',
    alpha3: 'KNA',
    numeric: 659
  },
  { name: 'Slovakia', alpha2: 'SK', alpha3: 'SVK', numeric: 703 },
  { name: 'Sri Lanka', alpha2: 'LK', alpha3: 'LKA', numeric: 144 },
  { name: 'Tajikistan', alpha2: 'TJ', alpha3: 'TJK', numeric: 762 },
  { name: 'Tokelau', alpha2: 'TK', alpha3: 'TKL', numeric: 772 },
  { name: 'Turkey', alpha2: 'TR', alpha3: 'TUR', numeric: 792 },
  { name: 'Turkmenistan', alpha2: 'TM', alpha3: 'TKM', numeric: 795 },
  {
    name: 'Turks and Caicos Islands (the)',
    alpha2: 'TC',
    alpha3: 'TCA',
    numeric: 796
  },
  { name: 'Ukraine', alpha2: 'UA', alpha3: 'UKR', numeric: 804 },
  {
    name: 'United Kingdom of Great Britain and Northern Ireland (the)',
    alpha2: 'GB',
    alpha3: 'GBR',
    numeric: 826
  },
  { name: 'Uzbekistan', alpha2: 'UZ', alpha3: 'UZB', numeric: 860 }
]
```

### usage - find one
```javascript
/* search country property */

import countryParse from "country-parse";

// return country list include exact spell
// but do not mind big or small charactor
const property = countryParse.findOneByName('korea (the Republic of)');
//               countryParse.findOneByAlpha2('kr');
//               countryParse.findOneByAlpha3('kor');
//               countryParse.findOneByNumeric(410);
console.log(property);
```
### output
```json

/* 
{
    name: 'Korea (the Republic of)',
    alpha2: 'KR',
    alpha3: 'KOR',
    numeric: 410
}
*/
```

[license-image]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat
[license-url]: LICENSE
