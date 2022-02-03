# xbrl-parser

XBRL parser and utility for extracting annual report data for Danish companies
Parse XBRL files and optionally transform them into easier-to-read formats like annual reports.

The library was created specifically for parsing XBRL annual reports for Danish companies to extract income statement and balance data from the (slightly different) taxonomies used for annual reports.

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

## Danish annual report taxonomy

The taxonomies for Danish annual reports is documented [here](https://erhvervsstyrelsen.dk/vejledning-teknisk-vejledning-og-dokumentation-regnskab-20-taksonomier-aktuelle) (in Danish).