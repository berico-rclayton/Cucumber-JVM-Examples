package cucumber.eight.tips.example1;


import java.util.List;

/**
 * Represents a tap system one can draw beer from.
 */
public interface TapSystem {

    /**
     * Place a new keg on Tap.
     * @param keg Keg to place
     * @return Id (index of the keg on the tap)
     * @throws NoTapsAvailableException
     */
    int placeOnTap(Keg keg) throws NoTapsAvailableException;

    /**
     * Remove a keg from the tap.
     * @param tapIndex Index of the keg in the TapSystem.
     * @throws InvalidTapIndexException
     * @throws NoTapsAvailableException
     */
    void removeFromTap(int tapIndex) throws InvalidTapIndexException, NoKegAtIndexOnTapException;

    /**
     * Get the list of available drinks on tap.
     * @return List of drinks on tap.
     */
    List<String> getAvailableDrinks();
}
