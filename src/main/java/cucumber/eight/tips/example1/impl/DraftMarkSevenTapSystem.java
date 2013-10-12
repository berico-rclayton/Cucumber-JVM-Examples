package cucumber.eight.tips.example1.impl;


import cucumber.eight.tips.example1.*;

import java.util.ArrayList;
import java.util.List;

/**
 * A DraftMark brand 7 tap system.
 */
public class DraftMarkSevenTapSystem implements TapSystem {

    Keg[] kegsOnTap = new Keg[7];

    /**
     * Place a new keg on Tap.
     * @param keg Keg to place
     * @return Id (index of the keg on the tap)
     * @throws cucumber.eight.tips.example1.NoTapsAvailableException
     */
    @Override
    public int placeOnTap(Keg keg) throws NoTapsAvailableException {

        int availableTap = findNextTap();

        if (availableTap == -1) throw new NoTapsAvailableException();

        kegsOnTap[availableTap] = keg;

        return availableTap;
    }

    /**
     * Remove a keg from the tap.
     * @param tapIndex Index of the keg in the TapSystem.
     * @throws cucumber.eight.tips.example1.InvalidTapIndexException
     * @throws NoTapsAvailableException
     */
    @Override
    public void removeFromTap(int tapIndex) throws InvalidTapIndexException, NoKegAtIndexOnTapException {

        if (tapIndex < 0 || tapIndex >= kegsOnTap.length)
            throw new InvalidTapIndexException();

        if (kegsOnTap[tapIndex] == null)
            throw new NoKegAtIndexOnTapException();

        kegsOnTap[tapIndex] = null;
    }

    /**
     * Get the list of available drinks on tap.
     * @return List of drinks on tap.
     */
    @Override
    public List<String> getAvailableDrinks() {

        ArrayList<String> availableDrinks = new ArrayList<String>();

        for (int i = 0; i < kegsOnTap.length; i++){

           if (kegsOnTap[i] != null)
               availableDrinks.add(kegsOnTap[i].getNameOfDrink());
        }

        return availableDrinks;
    }

    /**
     * Find the first empty tap and return the index.  If the tap is full, return -1.
     * @return First available tap or -1 if the taps are occupied.
     */
    private int findNextTap(){

        for(int i = 0; i < kegsOnTap.length; i++){

            if (kegsOnTap[i] == null){

                return i;
            }
        }

        return -1;
    }
}
