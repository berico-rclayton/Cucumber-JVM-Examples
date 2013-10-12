Feature: Examples of object marshalling

   Scenario: An example of implicit type conversion

     When I need numbers or booleans

     Then sometimes it's easier to let Cucumber convert values 1 or 1.1 or true instead of me


   Scenario: An example of implicit conversion of lists

     When I need a bunch of items

     Then sometimes it's easier to deal with a list: apples, bananas, oranges


   Scenario: Convert more complex values using special formats

     When I need to do something with dates

     Then I should be able to use 10/31/2013 or 10/31/2013 12:32:22 and get a Date object back


   Scenario: Transform something more complex using a custom transform

     When I need to work with IP Addresses or Phone Numbers

     Then I should be able to parse 127.0.0.1 or 555-555-5555 and get custom objects back


   Scenario: Transform a data table into a list of strongly typed objects

     When I need to specify a lot of data as a table

     Then I should be able to get a list of real objects back:
      | First Name | Last Name | Age | Is Male |
      | Obi-Wan    | Kenobi    | 55  | true    |
      | Han        | Solo      | 35  | true    |
      | Luke       | Skywalker | 24  | true    |
      | Leia       | Organa    | 24  | false   |

