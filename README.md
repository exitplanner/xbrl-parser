# xbrl-parser

XBRL parser and utility for parsing XBRL files.

The library was created specifically for parsing XBRL annual reports for Danish companies to extract income statement and balance data from the (slightly different) taxonomies used for annual reports and consolidate them in the same JSON-like format.

The library will parse all XBRL files since they are just XML, but the specific financial information from those taxonomies will not be mapped to a 

## Usage

Given a string containing an XBRL XML file, it will be parsed into a "raw" XBRL format which can be passed on to other parsers. The only parser supported right now is the Danish annual report parser.

```js
import { parseXbrlFile } from 'xbrl-parser';
const xbrl = parseXbrlFile(myFileString);
console.log(xbrl);
```

```js
import { CvrParser, parseAnnualReport } from 'xbrl-parser';
const report = parseAnnualReport(xmlString, new CvrParser());
console.log(report);
```

The `CvrParser` is named like that since it parses information fetched from the Danish national registry [cvr.dk](cvr.dk).

## Danish annual report taxonomy

The taxonomies for Danish annual reports is documented [here](https://erhvervsstyrelsen.dk/vejledning-teknisk-vejledning-og-dokumentation-regnskab-20-taksonomier-aktuelle) (in Danish).

**Note**: IFRS is not supported

**Note**: In the wild, we have encountered non-conforming namespaces. These are not supported either.

**Note**: The field mapping is incomplete.

The mapping is done on a best-effort basis and will most definitely not be correct in all cases.

In other words: Use with caution :D


### Things to watch out for

The code contains a some comments for specific cases that have been discovered along the way. Some of the more interesting ones:

- Some companies report revenue while others report "gross profit". It is unclear what the difference is.
- Some companies report EBITDA in their PDF reports, but there is no EBITDA field in the taxonomy. As such, EBITDA is a calculated field in the mapped reports.
