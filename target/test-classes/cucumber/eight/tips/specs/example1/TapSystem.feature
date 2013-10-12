Feature: Tap System

  Describes the expected behavior of a Tap System.

  Scenario: Keg is added to the Tap System

    Given a keg of Coors with 3% alcohol content per volume

    When I place the keg on the tap system

    Then I should have the following drinks on tap: Coors


  Scenario: Remove a keg from the Tap System

    Given the following kegs are already on tap:
      | Drink      | Alcohol Content |
      | Bud Light  | 3.5             |
      | Miller     | 3.3             |
      | Blue Moon  | 4.6             |
      | New Castle | 5.2             |

    When I remove the first keg from the tap system

    Then I should have the following drinks on tap: Miller, Blue Moon, New Castle


  Scenario: An error should occur if too many kegs are already on tap

    Given the following kegs are already on tap:
      | Drink      | Alcohol Content |
      | Bud Light  | 3.5             |
      | Miller     | 3.3             |
      | Blue Moon  | 4.6             |
      | New Castle | 5.2             |
      | Chimay     | 7.3             |
      | Shock Top  | 4.2             |
      | Woodchuck  | 2.5             |

    And a keg of Guinness with 8% alcohol content per volume

    When I place the keg on the tap system

    Then I should receive the 'No taps available' error from the tap system


  Scenario: An error should occur if there is no keg at the specified location on tap

    Given the following kegs are already on tap:
      | Drink      | Alcohol Content |
      | Bud Light  | 3.5             |
      | Miller     | 3.3             |

    When I remove the third keg from the tap system

    Then I should receive the 'No keg at that position' error from the tap system


  Scenario: An error should occur if the keg position does not exist on the tap system

    Given the following kegs are already on tap:
      | Drink      | Alcohol Content |
      | Bud Light  | 3.5             |
      | Miller     | 3.3             |

    When I remove the eighth keg from the tap system

    Then I should receive the 'Invalid position on tap' error from the tap system
