# xbrl-parser

![pr](https://github.com/exitplanner/xbrl-parser/actions/workflows/node.js.yml/badge.svg)
![npm publish](https://github.com/exitplanner/xbrl-parser/actions/workflows/npm-publish.yml/badge.svg)

XBRL parser and utility for parsing XBRL files.

The library was created specifically for parsing XBRL annual reports for Danish companies to extract income statement and balance data from the (slightly different) taxonomies used for annual reports and consolidate them in the same JSON-like format.

It has very limited support for US-GAAP taxonomy as well.

## Install

```
npm install --save xbrl-parser
```

## Usage

Given a string containing an XBRL XML file (the full contents, not the filename), it will be parsed into a "raw" XBRL format which can be passed on to other parsers. The only parser supported right now is the Danish annual report parser.

```js
import { parseXbrlFile } from 'xbrl-parser';

// Maybe this was loaded with the fs module or from an http request
const xmlString = '<?xml version="1.0" encoding="UTF-8"?><xbrli:xbrl>...</xbrli:xbrl>';

const xbrl = parseXbrlFile(xmlString);
console.log(xbrl);
```

Using the Danish annual report parser:

```js
import { CvrParser, parseAnnualReport } from 'xbrl-parser';
const report = parseAnnualReport(xmlString, new CvrParser());
console.log(report);
```

The `CvrParser` is named like that since it parses information fetched from the Danish national registry [cvr.dk](cvr.dk). There is also a `USGAAPParser` for for parsing XBRL for the US-GAAP taxonomy.

### Things to watch out for in the annual reports

The code contains some comments for specific cases that have been discovered along the way. Some of the more interesting ones:

- Some companies report revenue while others report "gross profit". It is unclear what the difference is.
- Some companies report EBITDA in their PDF reports, but there is no EBITDA field in the taxonomy. As such, EBITDA is a *calculated field* in the mapped reports.

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

### US-GAAP annual report specifics

Taxonomies for US-GAAP are available [here](https://xbrl.us/home/filers/sec-reporting/taxonomies/).

The taxonomy is currenty mapped from only publicly traded companies which might have different reporting structure than SMEs.

### Notes to keep in mind

- IFRS is not supported
- The field mapping is incomplete.
- The mapping is done on a best-effort basis and will most definitely not be correct in all cases.

In other words: Use with caution :D
