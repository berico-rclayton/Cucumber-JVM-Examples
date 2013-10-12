package cucumber.eight.tips.specs.example3;

import cucumber.api.Format;
import cucumber.api.Transform;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.eight.tips.example3.Person;

import java.net.InetAddress;
import java.util.Arrays;
import java.util.Calendar;
import java.util.List;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

/**
  Examples of Transformation and Marshalling Techniques using Cucumber
 */
public class ObjectMarshallingSteps {

    @When("^I need numbers or booleans$")
    public void I_need_numbers_or_booleans(){}

    @When("^I need a bunch of items$")
    public void I_need_a_bunch_of_items(){}

    @When("^I need to do something with dates$")
    public void I_need_to_do_something_with_dates(){}

    @When("^I need to work with IP Addresses or Phone Numbers$")
    public void I_need_to_work_with_IP_Addresses_or_Phone_Numbers(){}

    @When("^I need to specify a lot of data as a table$")
    public void I_need_to_specify_a_lot_of_data_as_a_table(){}



    @Then("^sometimes it's easier to let Cucumber convert values (\\d+) or ((?:\\d|\\.)+) or (true|false) instead of me$")
    public void sometimes_it_s_easier_to_let_cucumber_convert_values(int integer, double decimal, boolean bool) {

        assertEquals(1, integer);
        assertEquals(1.1d, decimal, 0);
        assertTrue(bool);
    }

    @Then("^sometimes it's easier to deal with a list: ((?:\\s|\\w|,)+)$")
    public void sometimes_its_easier_to_deal_with_a_lists(List<String> list) {

        assertTrue(list.containsAll(Arrays.asList("apples", "oranges", "bananas")));
    }

    @Then("^I should be able to use ((?:\\d|\\/)+) or ((?:\\d|\\/|:|\\s)+) and get a Date object back$")
    public void I_should_be_able_to_use_or_AM_and_get_a_Date_object_back(
            @Format("MM/dd/yyyy") Calendar actualCalendar1,
            @Format("MM/dd/yyyy HH:mm:ss") Calendar actualCalendar2)  {

        Calendar expectedCalendar1 = Calendar.getInstance();
        expectedCalendar1.set(2013, 9, 31, 0, 0, 0);

        Calendar expectedCalendar2 = Calendar.getInstance();
        expectedCalendar2.set(2013, 9, 31, 12, 32, 22);

        assertEquals(expectedCalendar1.getTime().getYear(), actualCalendar1.getTime().getYear());
        assertEquals(expectedCalendar1.getTime().getMonth(), actualCalendar1.getTime().getMonth());
        assertEquals(expectedCalendar1.getTime().getDate(), actualCalendar1.getTime().getDate());

        assertEquals(expectedCalendar2.getTime().getYear(), actualCalendar2.getTime().getYear());
        assertEquals(expectedCalendar2.getTime().getMonth(), actualCalendar2.getTime().getMonth());
        assertEquals(expectedCalendar2.getTime().getDate(), actualCalendar2.getTime().getDate());
        assertEquals(expectedCalendar2.getTime().getHours(), actualCalendar2.getTime().getHours());
        assertEquals(expectedCalendar2.getTime().getMinutes(), actualCalendar2.getTime().getMinutes());
        assertEquals(expectedCalendar2.getTime().getSeconds(), actualCalendar2.getTime().getSeconds());
    }

    @Then("^I should be able to parse (\\d+(?:[.]\\d+){3}) or (\\d+(?:-\\d+){2}) and get custom objects back$")
    public void I_should_be_able_to_parse_or_and_get_custom_objects_back(
            @Transform(IPAddressTransformer.class) InetAddress ipAddress,
            @Transform(PhoneNumberTransformer.class) PhoneNumber phoneNumber) {

        assertTrue(ipAddress.isLoopbackAddress());

        assertEquals(555, phoneNumber.getAreaCode());
        assertEquals(555, phoneNumber.getPrefix());
        assertEquals(5555, phoneNumber.getLineNumber());
    }

    @Then("^I should be able to get a list of real objects back:$")
    public void I_should_be_able_to_get_a_list_of_real_objects_back(List<Person> persons)  {

        assertEquals(4, persons.size());
    }
}
