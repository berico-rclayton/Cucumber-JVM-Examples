package cucumber.eight.tips.specs.example1.steps;

import cucumber.api.DataTable;
import cucumber.api.Transform;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.eight.tips.example1.Keg;
import cucumber.eight.tips.example1.TapSystem;
import cucumber.eight.tips.specs.example1.support.ErrorDescriptionTransform;
import cucumber.eight.tips.specs.common.OrdinalPositions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;

import java.util.List;

import static org.junit.Assert.*;
import static cucumber.eight.tips.specs.example1.support.DataTableHelpers.*;

/**
 * Step Definitions for the TapSystem.feature.
 */
@ContextConfiguration("classpath:cucumber.xml")
public class TapSystemSteps {

    @Autowired
    private TapSystem tapSystem;

    // A keg staged to be added to the Tap System.
    // A @When call will trap the result of adding the keg.
    Keg kegStagedToBeTapped = null;

    // The index value of the keg added on the Tap System.
    int resultantIndexOfStagedKegAddedToTap = -1;

    // If an error occurs during a trapped @When operation, it will
    // be referenced here.
    Exception errorReturnedFromOperation = null;

    @Given("^a keg of (\\w+) with (\\d+)% alcohol content per volume$")
    public void create_a_keg_instance_and_stage_for_tapping(String drinkName, int percentAlcohol){

        kegStagedToBeTapped = new Keg(drinkName, percentAlcohol * 0.01);
    }


    @Given("^the following kegs are already on tap:$")
    public void create_and_add_kegs_to_tap(DataTable dataTable) throws Exception {

        List<Keg> kegs = convertDataTableToKegs(dataTable);

        for (Keg keg : kegs){

            tapSystem.placeOnTap(keg);
        }
    }


    @When("^I place the keg on the tap system$")
    public void place_keg_on_tap_and_trap_results(){

        // Trap the result of the operation
        try {

            this.resultantIndexOfStagedKegAddedToTap =
                    tapSystem.placeOnTap(this.kegStagedToBeTapped);

        } catch (Exception e){

            this.errorReturnedFromOperation = e;
        }
    }


    @When("^I remove the (first|second|third|fourth|fifth|sixth|seventh|eighth) keg from the tap system$")
    public void remove_keg_from_tap_and_trap_results(String position){

        int kegIndex = OrdinalPositions.valueOf(position).getPosition();

        try {

            this.tapSystem.removeFromTap(kegIndex);

        } catch (Exception e){

            this.errorReturnedFromOperation = e;
        }
    }


    @Then("^I should have the following drinks on tap: ((?:\\w|,|\\s)+)$")
    public void assert_tap_system_contains_the_following_drinks(List<String> expectedDrinks){

        assertTrue(expectedDrinks.containsAll(tapSystem.getAvailableDrinks()));
    }


    @Then("^I should receive the '((?:\\w|\\s)+)' error from the tap system$")
    public void assert_last_operation_returned_an_error(
            @Transform(ErrorDescriptionTransform.class) Class<? extends Throwable> expectedException){

        assertTrue( this.errorReturnedFromOperation.getClass().isAssignableFrom( expectedException ) );
    }

}
