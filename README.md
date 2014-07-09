## Australian Toilets

A simple Node.js script to convert the [XML file](http://data.gov.au/dataset/national-public-toilet-map) provided by Commonwealth of Australia (which powers the Australian [National Public Toilets Map](https://toiletmap.gov.au/)) to CSV.

### Usage

* Clone the repo.
* Place the XML file to be converted in the <code>/data</code> directory.
* Run <code>npm install</code>.
* Invoke thusly:

<pre>
node index.js [fileName] > shiny-new.csv
</pre>

Download a converted CSV file updated as of December 10, 2013 from [CivicData.com](http://www.civicdata.com/en/dataset/national-public-toilet-map-data/resource/8a7cc861-b49b-4506-872e-2153aff575c6)