# xbrl-parser

![pr](https://github.com/exitplanner/xbrl-parser/actions/workflows/node.js.yml/badge.svg)
![npm publish](https://github.com/exitplanner/xbrl-parser/actions/workflows/npm-publish.yml/badge.svg)

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

### Things to watch out for in the annual reports

The code contains some comments for specific cases that have been discovered along the way. Some of the more interesting ones:

- Some companies report revenue while others report "gross profit". It is unclear what the difference is.
- Some companies report EBITDA in their PDF reports, but there is no EBITDA field in the taxonomy. As such, EBITDA is a calculated field in the mapped reports.

## XBRL spec notes

Usually, the xbrl instance root element is `<xbrli:xbrl>`.
The standard also mentions this here: https://specifications.xbrl.org/xbrl-essentials.html

However, in the wild, other namespaces (or no namespaces) have been observed (like `<xbrl>`), which may or may not be valid.

In order to make the output more consistent, there are two options:
1. Completely ignore the namespace prefix for all XML fields. This is not a good option because other namespaces are lost as well, and it could *potentially* (although unlikely) lead to name clashes of fields when parsed.
2. Recursively "fix" non-standard namespaces so they are the same.

This library uses the second choice, such that parsed XBRL documents use `xbrli:` as namespace prefix for XBRL-specific fields.

### Danish annual report specifics

The taxonomies for Danish annual reports is documented [here](https://erhvervsstyrelsen.dk/vejledning-teknisk-vejledning-og-dokumentation-regnskab-20-taksonomier-aktuelle) (in Danish).

For this taxonomy, namespace renaming also happens for some annual reports, and this library tries to correct it.

Some other notes:

**Note**: IFRS is not supported

**Note**: The field mapping is incomplete.

The mapping is done on a best-effort basis and will most definitely not be correct in all cases.

In other words: Use with caution :D
