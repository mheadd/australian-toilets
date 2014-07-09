var fs = require('fs');
var xml2js = require('xml2js');

var parser = new xml2js.Parser({explicitArray: false});
var fileName = process.argv[2];
fs.readFile(__dirname + '/data/' + fileName, function(err, data) {
    parser.parseString(data, function (err, result) {
    	var locations = result.ToiletMapExport.ToiletDetails;
    	var locations_csv = "Name,Address1,Town,State,Postcode,Latitude,Longitude,Status,ToiletURL,Male,Female,FacilityType,ToiletType,AccessLimited,PaymentRequired,KeyRequired,Parking,AccessibleMale,AccessibleFemale,MLAK,ParkingAccessible,OpeningHours,BabyChange,Showers,DrinkingWater,SharpsDisposal,SanitaryDisposal\n";
    	for(var i=0; i<locations.length; i++) {

			var siteDetails = locations[i].$;
			var GeneralDetails = locations[i].GeneralDetails;
			var AccessibilityDetails = locations[i].AccessibilityDetails;
			var Features = locations[i].Features;
			var Icon = locations[i].Icon

			// Base site information.
			var Name = locations[i].Name;
			var Address1 = locations[i].Address1;
			var Town = locations[i].Town;
			var State = locations[i].State;
			var Postcode = locations[i].Postcode;

			// Site details
			var Latitude = siteDetails.Latitude;
			var Longitude = siteDetails.Longitude;
			var Status = siteDetails.Status;
			var ToiletURL = siteDetails.ToiletURL;

			// General details
			var Male = GeneralDetails.Male;
			var Female = GeneralDetails.Female;
			var FacilityType = GeneralDetails.FacilityType;
			var ToiletType = GeneralDetails.ToiletType;
			var AccessLimited = GeneralDetails.AccessLimited;
			var PaymentRequired = GeneralDetails.PaymentRequired;
			var KeyRequired = GeneralDetails.KeyRequired;
			var Parking = GeneralDetails.Parking;

			// Accessibility details
			var AccessibleMale = AccessibilityDetails.AccessibleMale;
			var AccessibleFemale = AccessibilityDetails.AccessibleFemale;
			var AccessibleUnisex = AccessibilityDetails.AccessibleUnisex;
			var MLAK = AccessibilityDetails.MLAK;
			var ParkingAccessible = AccessibilityDetails.ParkingAccessible;

			// Opening hours
			var OpeningHours = locations[i].OpeningHours.IsOpen;

			// Features
			var BabyChange = Features.BabyChange
			var Showers = Features.Showers
			var DrinkingWater = Features.DrinkingWater
			var SharpsDisposal = Features.SharpsDisposal
			var SanitaryDisposal = Features.SanitaryDisposal

			// Icon details
			var IconAltText = Icon.IconAltText
			var IconURL = Icon.IconURL

			locations_csv += '"'+Name+'","'+Address1+'","'+Town+'","'+State+'","'+Postcode+'","'+Latitude+'","'+Longitude+'","'+Status+'","'+ToiletURL+'","'+Male+'","'+Female+'","'+FacilityType+'","'+ToiletType+'",'+AccessLimited+','+PaymentRequired+','+KeyRequired+','+Parking+','+AccessibleMale+','+AccessibleFemale+','+MLAK+','+ParkingAccessible+',"'+OpeningHours+'",'+BabyChange+','+Showers+','+DrinkingWater+','+SharpsDisposal+','+SanitaryDisposal+'\n';;
    	}
    	console.log(locations_csv);

    });
});