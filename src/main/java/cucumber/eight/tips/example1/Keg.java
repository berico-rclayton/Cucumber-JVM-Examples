package cucumber.eight.tips.example1;


/**
 * Represents a Keg that can be added to a TapSystem.
 */
public class Keg {

    private String nameOfDrink;

    private double alcoholContent = 0;

    /**
     * Default Constructor
     */
    public Keg(){}

    /**
     * Initialize with state
     * @param nameOfDrink Name of the drink in the keg
     * @param alcoholContent Percentage of alcohol
     */
    public Keg(String nameOfDrink, double alcoholContent) {
        this.nameOfDrink = nameOfDrink;
        this.alcoholContent = alcoholContent;
    }

    /**
     * Get the name of the drink in the keg
     * @return Name of the drink
     */
    public String getNameOfDrink() {
        return nameOfDrink;
    }

    /**
     * Set the name of the drink in the keg
     * @param nameOfDrink Name of the drink
     */
    public void setNameOfDrink(String nameOfDrink) {
        this.nameOfDrink = nameOfDrink;
    }

    /**
     * Get the alcohol content of a drink
     * @return alcohol content
     */
    public double getAlcoholContent() {
        return alcoholContent;
    }

    /**
     * Set the alcohol content of a drink
     * @param alcoholContent alcohol content
     */
    public void setAlcoholContent(double alcoholContent) {
        this.alcoholContent = alcoholContent;
    }
}
