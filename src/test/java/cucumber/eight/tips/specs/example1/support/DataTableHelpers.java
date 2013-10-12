package cucumber.eight.tips.specs.example1.support;


import cucumber.api.DataTable;
import cucumber.eight.tips.example1.Keg;

import java.util.ArrayList;
import java.util.List;

/**
 * A set of static functions to aid in the conversion of DataTables to
 * collections of domain objects.
 */
public class DataTableHelpers {

    /**
     * Convert a DataTable representing a list of Kegs into a List of Kegs.
     * - Note: the first row is considered the headers describing the data table.
     * @param dataTable DataTable to convert.
     * @return a List of Kegs
     */
    public static List<Keg> convertDataTableToKegs(DataTable dataTable){

        ArrayList<Keg> kegs = new ArrayList<Keg>();

        int rowNumber = 0;

        for (List<String> row : dataTable.raw()){

            if (++rowNumber == 1) continue;

            String nameOfDrink = row.get(0);

            double alcoholContent = Double.parseDouble(row.get(1));

            kegs.add(new Keg(nameOfDrink, alcoholContent));
        }

        return kegs;
    }

}
