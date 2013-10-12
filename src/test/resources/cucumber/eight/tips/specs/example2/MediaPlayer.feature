Feature:  Simple Media Player

  A simple media player that one might want to embed into another Java application.

  Background:

    Given the following list of songs in my playlist:
      | Artist        | Album                | Name             | Location On Disk                                     |
      | Cold Play     | Mylo Xyloto          | Paradise         | /music/cold_play/mylo_xyloto/paradise.mp3            |
      | Kings of Leon | Aha Shake Heartbreak | Milk             | /music/kings_of_leon/aha_shake/milk.mp3              |
      | The Killers   | Sawdust              | Romeo And Juliet | /music/the_killers/sawdust/romeo_and_juliet.mp3      |


  Scenario: Add a list of songs

    When I queue the following songs in the media player:
      | The Lumineers | The Lumineers | Stubborn Love | /music/the_lumineers/the_lumineers/stubborn_love.mp3 |

    Then I should have the following tracks in my playlist: Paradise, Milk, Romeo And Juliet, Stubborn Love


  Scenario: Play a song

    When I press play

    Then the current track should be: Cold Play - Paradise


  Scenario: Play a song at a specific index

    When I play the second track

    Then the current track should be: Kings of Leon - Milk


  Scenario: Stop the track

    Given the media player is playing the first track

    When I press stop

    Then the current track should not be playing


  Scenario: Go to the next track

    When I press next

    Then the current track should be: Kings of Leon - Milk


  Scenario: Go to the previous track

    Given the media player is playing the third track

    When I press previous

    Then the current track should be: Kings of Leon - Milk


  Scenario: Remove a song from the playlist

    When I remove the second song from the playlist

    Then I should have the following tracks in my playlist: Paradise, Romeo And Juliet


  Scenario: Clear the playlist

    When I clear the playlist

    Then the playlist should be empty