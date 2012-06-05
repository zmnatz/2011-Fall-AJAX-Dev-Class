package Data;

import java.util.ArrayList;
import java.util.List;

public class CityDatabase {
	private static final String CITIES = 
			"Albany,Aberdeen,Abilene,Alamo,Babylon,Buckeystown,Baldwin,Baltimore";
	private static final String[] CITY_ARRAY = CITIES.split(",");
	
	public static List<String> findCities(String cityPrefix) {
	    cityPrefix = cityPrefix.toUpperCase();
	    List<String> languages = new ArrayList<String>();
	    for(String language: CITY_ARRAY) {
	      if(language.toUpperCase().startsWith(cityPrefix)) {
	        languages.add(language);
	      }
	    }
	    return(languages);
	  }
}
