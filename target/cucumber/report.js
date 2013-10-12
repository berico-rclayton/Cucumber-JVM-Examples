$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("cucumber/eight/tips/specs/example1/TapSystem.feature");
formatter.feature({
  "id": "tap-system",
  "description": "\nDescribes the expected behavior of a Tap System.",
  "name": "Tap System",
  "keyword": "Feature",
  "line": 1
});
formatter.scenario({
  "id": "tap-system;keg-is-added-to-the-tap-system",
  "description": "",
  "name": "Keg is added to the Tap System",
  "keyword": "Scenario",
  "line": 5,
  "type": "scenario"
});
formatter.step({
  "name": "a keg of Coors with 3% alcohol content per volume",
  "keyword": "Given ",
  "line": 7
});
formatter.step({
  "name": "I place the keg on the tap system",
  "keyword": "When ",
  "line": 9
});
formatter.step({
  "name": "I should have the following drinks on tap: Coors",
  "keyword": "Then ",
  "line": 11
});
formatter.match({
  "arguments": [
    {
      "val": "Coors",
      "offset": 9
    },
    {
      "val": "3",
      "offset": 20
    }
  ],
  "location": "TapSystemSteps.create_a_keg_instance_and_stage_for_tapping(String,int)"
});
formatter.result({
  "duration": 201031000,
  "status": "passed"
});
formatter.match({
  "location": "TapSystemSteps.place_keg_on_tap_and_trap_results()"
});
formatter.result({
  "duration": 38000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Coors",
      "offset": 43
    }
  ],
  "location": "TapSystemSteps.assert_tap_system_contains_the_following_drinks(String\u003e)"
});
formatter.result({
  "duration": 1595000,
  "status": "passed"
});
formatter.scenario({
  "id": "tap-system;remove-a-keg-from-the-tap-system",
  "description": "",
  "name": "Remove a keg from the Tap System",
  "keyword": "Scenario",
  "line": 14,
  "type": "scenario"
});
formatter.step({
  "name": "the following kegs are already on tap:",
  "keyword": "Given ",
  "line": 16,
  "rows": [
    {
      "cells": [
        "Drink",
        "Alcohol Content"
      ],
      "line": 17
    },
    {
      "cells": [
        "Bud Light",
        "3.5"
      ],
      "line": 18
    },
    {
      "cells": [
        "Miller",
        "3.3"
      ],
      "line": 19
    },
    {
      "cells": [
        "Blue Moon",
        "4.6"
      ],
      "line": 20
    },
    {
      "cells": [
        "New Castle",
        "5.2"
      ],
      "line": 21
    }
  ]
});
formatter.step({
  "name": "I remove the first keg from the tap system",
  "keyword": "When ",
  "line": 23
});
formatter.step({
  "name": "I should have the following drinks on tap: Miller, Blue Moon, New Castle",
  "keyword": "Then ",
  "line": 25
});
formatter.match({
  "location": "TapSystemSteps.create_and_add_kegs_to_tap(DataTable)"
});
formatter.result({
  "duration": 2840000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "first",
      "offset": 13
    }
  ],
  "location": "TapSystemSteps.remove_keg_from_tap_and_trap_results(String)"
});
formatter.result({
  "duration": 147000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Miller, Blue Moon, New Castle",
      "offset": 43
    }
  ],
  "location": "TapSystemSteps.assert_tap_system_contains_the_following_drinks(String\u003e)"
});
formatter.result({
  "duration": 114000,
  "status": "passed"
});
formatter.scenario({
  "id": "tap-system;an-error-should-occur-if-too-many-kegs-are-already-on-tap",
  "description": "",
  "name": "An error should occur if too many kegs are already on tap",
  "keyword": "Scenario",
  "line": 28,
  "type": "scenario"
});
formatter.step({
  "name": "the following kegs are already on tap:",
  "keyword": "Given ",
  "line": 30,
  "rows": [
    {
      "cells": [
        "Drink",
        "Alcohol Content"
      ],
      "line": 31
    },
    {
      "cells": [
        "Bud Light",
        "3.5"
      ],
      "line": 32
    },
    {
      "cells": [
        "Miller",
        "3.3"
      ],
      "line": 33
    },
    {
      "cells": [
        "Blue Moon",
        "4.6"
      ],
      "line": 34
    },
    {
      "cells": [
        "New Castle",
        "5.2"
      ],
      "line": 35
    },
    {
      "cells": [
        "Chimay",
        "7.3"
      ],
      "line": 36
    },
    {
      "cells": [
        "Shock Top",
        "4.2"
      ],
      "line": 37
    },
    {
      "cells": [
        "Woodchuck",
        "2.5"
      ],
      "line": 38
    }
  ]
});
formatter.step({
  "name": "a keg of Guinness with 8% alcohol content per volume",
  "keyword": "And ",
  "line": 40
});
formatter.step({
  "name": "I place the keg on the tap system",
  "keyword": "When ",
  "line": 42
});
formatter.step({
  "name": "I should receive the \u0027No taps available\u0027 error from the tap system",
  "keyword": "Then ",
  "line": 44
});
formatter.match({
  "location": "TapSystemSteps.create_and_add_kegs_to_tap(DataTable)"
});
formatter.result({
  "duration": 2339000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Guinness",
      "offset": 9
    },
    {
      "val": "8",
      "offset": 23
    }
  ],
  "location": "TapSystemSteps.create_a_keg_instance_and_stage_for_tapping(String,int)"
});
formatter.result({
  "duration": 114000,
  "status": "passed"
});
formatter.match({
  "location": "TapSystemSteps.place_keg_on_tap_and_trap_results()"
});
formatter.result({
  "duration": 56000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "No taps available",
      "offset": 22
    }
  ],
  "location": "TapSystemSteps.assert_last_operation_returned_an_error(Throwable\u003e)"
});
formatter.result({
  "duration": 122000,
  "status": "passed"
});
formatter.scenario({
  "id": "tap-system;an-error-should-occur-if-there-is-no-keg-at-the-specified-location-on-tap",
  "description": "",
  "name": "An error should occur if there is no keg at the specified location on tap",
  "keyword": "Scenario",
  "line": 47,
  "type": "scenario"
});
formatter.step({
  "name": "the following kegs are already on tap:",
  "keyword": "Given ",
  "line": 49,
  "rows": [
    {
      "cells": [
        "Drink",
        "Alcohol Content"
      ],
      "line": 50
    },
    {
      "cells": [
        "Bud Light",
        "3.5"
      ],
      "line": 51
    },
    {
      "cells": [
        "Miller",
        "3.3"
      ],
      "line": 52
    }
  ]
});
formatter.step({
  "name": "I remove the third keg from the tap system",
  "keyword": "When ",
  "line": 54
});
formatter.step({
  "name": "I should receive the \u0027No keg at that position\u0027 error from the tap system",
  "keyword": "Then ",
  "line": 56
});
formatter.match({
  "location": "TapSystemSteps.create_and_add_kegs_to_tap(DataTable)"
});
formatter.result({
  "duration": 2002000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "third",
      "offset": 13
    }
  ],
  "location": "TapSystemSteps.remove_keg_from_tap_and_trap_results(String)"
});
formatter.result({
  "duration": 77000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "No keg at that position",
      "offset": 22
    }
  ],
  "location": "TapSystemSteps.assert_last_operation_returned_an_error(Throwable\u003e)"
});
formatter.result({
  "duration": 44000,
  "status": "passed"
});
formatter.scenario({
  "id": "tap-system;an-error-should-occur-if-the-keg-position-does-not-exist-on-the-tap-system",
  "description": "",
  "name": "An error should occur if the keg position does not exist on the tap system",
  "keyword": "Scenario",
  "line": 59,
  "type": "scenario"
});
formatter.step({
  "name": "the following kegs are already on tap:",
  "keyword": "Given ",
  "line": 61,
  "rows": [
    {
      "cells": [
        "Drink",
        "Alcohol Content"
      ],
      "line": 62
    },
    {
      "cells": [
        "Bud Light",
        "3.5"
      ],
      "line": 63
    },
    {
      "cells": [
        "Miller",
        "3.3"
      ],
      "line": 64
    }
  ]
});
formatter.step({
  "name": "I remove the eighth keg from the tap system",
  "keyword": "When ",
  "line": 66
});
formatter.step({
  "name": "I should receive the \u0027Invalid position on tap\u0027 error from the tap system",
  "keyword": "Then ",
  "line": 68
});
formatter.match({
  "location": "TapSystemSteps.create_and_add_kegs_to_tap(DataTable)"
});
formatter.result({
  "duration": 2238000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "eighth",
      "offset": 13
    }
  ],
  "location": "TapSystemSteps.remove_keg_from_tap_and_trap_results(String)"
});
formatter.result({
  "duration": 88000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid position on tap",
      "offset": 22
    }
  ],
  "location": "TapSystemSteps.assert_last_operation_returned_an_error(Throwable\u003e)"
});
formatter.result({
  "duration": 44000,
  "status": "passed"
});
formatter.uri("cucumber/eight/tips/specs/example2/MediaPlayer.feature");
formatter.feature({
  "id": "simple-media-player",
  "description": "\nA simple media player that one might want to embed into another Java application.",
  "name": "Simple Media Player",
  "keyword": "Feature",
  "line": 1
});
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 5,
  "type": "background"
});
formatter.step({
  "name": "the following list of songs in my playlist:",
  "keyword": "Given ",
  "line": 7,
  "rows": [
    {
      "cells": [
        "Artist",
        "Album",
        "Name",
        "Location On Disk"
      ],
      "line": 8
    },
    {
      "cells": [
        "Cold Play",
        "Mylo Xyloto",
        "Paradise",
        "/music/cold_play/mylo_xyloto/paradise.mp3"
      ],
      "line": 9
    },
    {
      "cells": [
        "Kings of Leon",
        "Aha Shake Heartbreak",
        "Milk",
        "/music/kings_of_leon/aha_shake/milk.mp3"
      ],
      "line": 10
    },
    {
      "cells": [
        "The Killers",
        "Sawdust",
        "Romeo And Juliet",
        "/music/the_killers/sawdust/romeo_and_juliet.mp3"
      ],
      "line": 11
    }
  ]
});
formatter.match({
  "location": "MediaPlayerSteps.add_songs_to_playlist(DataTable)"
});
formatter.result({
  "duration": 70765000,
  "status": "passed"
});
formatter.scenario({
  "id": "simple-media-player;add-a-list-of-songs",
  "description": "",
  "name": "Add a list of songs",
  "keyword": "Scenario",
  "line": 14,
  "type": "scenario"
});
formatter.step({
  "name": "I queue the following songs in the media player:",
  "keyword": "When ",
  "line": 16,
  "rows": [
    {
      "cells": [
        "The Lumineers",
        "The Lumineers",
        "Stubborn Love",
        "/music/the_lumineers/the_lumineers/stubborn_love.mp3"
      ],
      "line": 17
    }
  ]
});
formatter.step({
  "name": "I should have the following tracks in my playlist: Paradise, Milk, Romeo And Juliet, Stubborn Love",
  "keyword": "Then ",
  "line": 19
});
formatter.match({
  "location": "MediaPlayerSteps.queue_songs_with_playlist(DataTable)"
});
formatter.result({
  "duration": 262000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Paradise, Milk, Romeo And Juliet, Stubborn Love",
      "offset": 51
    }
  ],
  "location": "MediaPlayerSteps.assert_queue_has_tracks(String\u003e)"
});
formatter.result({
  "duration": 142000,
  "status": "passed"
});
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 5,
  "type": "background"
});
formatter.step({
  "name": "the following list of songs in my playlist:",
  "keyword": "Given ",
  "line": 7,
  "rows": [
    {
      "cells": [
        "Artist",
        "Album",
        "Name",
        "Location On Disk"
      ],
      "line": 8
    },
    {
      "cells": [
        "Cold Play",
        "Mylo Xyloto",
        "Paradise",
        "/music/cold_play/mylo_xyloto/paradise.mp3"
      ],
      "line": 9
    },
    {
      "cells": [
        "Kings of Leon",
        "Aha Shake Heartbreak",
        "Milk",
        "/music/kings_of_leon/aha_shake/milk.mp3"
      ],
      "line": 10
    },
    {
      "cells": [
        "The Killers",
        "Sawdust",
        "Romeo And Juliet",
        "/music/the_killers/sawdust/romeo_and_juliet.mp3"
      ],
      "line": 11
    }
  ]
});
formatter.match({
  "location": "MediaPlayerSteps.add_songs_to_playlist(DataTable)"
});
formatter.result({
  "duration": 3410000,
  "status": "passed"
});
formatter.scenario({
  "id": "simple-media-player;play-a-song",
  "description": "",
  "name": "Play a song",
  "keyword": "Scenario",
  "line": 22,
  "type": "scenario"
});
formatter.step({
  "name": "I press play",
  "keyword": "When ",
  "line": 24
});
formatter.step({
  "name": "the current track should be: Cold Play - Paradise",
  "keyword": "Then ",
  "line": 26
});
formatter.match({
  "location": "MediaPlayerSteps.press_play()"
});
formatter.result({
  "duration": 29000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cold Play",
      "offset": 29
    },
    {
      "val": "Paradise",
      "offset": 41
    }
  ],
  "location": "MediaPlayerSteps.assert_current_track(String,String)"
});
formatter.result({
  "duration": 1472000,
  "status": "passed"
});
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 5,
  "type": "background"
});
formatter.step({
  "name": "the following list of songs in my playlist:",
  "keyword": "Given ",
  "line": 7,
  "rows": [
    {
      "cells": [
        "Artist",
        "Album",
        "Name",
        "Location On Disk"
      ],
      "line": 8
    },
    {
      "cells": [
        "Cold Play",
        "Mylo Xyloto",
        "Paradise",
        "/music/cold_play/mylo_xyloto/paradise.mp3"
      ],
      "line": 9
    },
    {
      "cells": [
        "Kings of Leon",
        "Aha Shake Heartbreak",
        "Milk",
        "/music/kings_of_leon/aha_shake/milk.mp3"
      ],
      "line": 10
    },
    {
      "cells": [
        "The Killers",
        "Sawdust",
        "Romeo And Juliet",
        "/music/the_killers/sawdust/romeo_and_juliet.mp3"
      ],
      "line": 11
    }
  ]
});
formatter.match({
  "location": "MediaPlayerSteps.add_songs_to_playlist(DataTable)"
});
formatter.result({
  "duration": 4808000,
  "status": "passed"
});
formatter.scenario({
  "id": "simple-media-player;play-a-song-at-a-specific-index",
  "description": "",
  "name": "Play a song at a specific index",
  "keyword": "Scenario",
  "line": 29,
  "type": "scenario"
});
formatter.step({
  "name": "I play the second track",
  "keyword": "When ",
  "line": 31
});
formatter.step({
  "name": "the current track should be: Kings of Leon - Milk",
  "keyword": "Then ",
  "line": 33
});
formatter.match({
  "arguments": [
    {
      "val": "second",
      "offset": 11
    }
  ],
  "location": "MediaPlayerSteps.play_track_at_index(int)"
});
formatter.result({
  "duration": 85000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Kings of Leon",
      "offset": 29
    },
    {
      "val": "Milk",
      "offset": 45
    }
  ],
  "location": "MediaPlayerSteps.assert_current_track(String,String)"
});
formatter.result({
  "duration": 78000,
  "status": "passed"
});
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 5,
  "type": "background"
});
formatter.step({
  "name": "the following list of songs in my playlist:",
  "keyword": "Given ",
  "line": 7,
  "rows": [
    {
      "cells": [
        "Artist",
        "Album",
        "Name",
        "Location On Disk"
      ],
      "line": 8
    },
    {
      "cells": [
        "Cold Play",
        "Mylo Xyloto",
        "Paradise",
        "/music/cold_play/mylo_xyloto/paradise.mp3"
      ],
      "line": 9
    },
    {
      "cells": [
        "Kings of Leon",
        "Aha Shake Heartbreak",
        "Milk",
        "/music/kings_of_leon/aha_shake/milk.mp3"
      ],
      "line": 10
    },
    {
      "cells": [
        "The Killers",
        "Sawdust",
        "Romeo And Juliet",
        "/music/the_killers/sawdust/romeo_and_juliet.mp3"
      ],
      "line": 11
    }
  ]
});
formatter.match({
  "location": "MediaPlayerSteps.add_songs_to_playlist(DataTable)"
});
formatter.result({
  "duration": 4284000,
  "status": "passed"
});
formatter.scenario({
  "id": "simple-media-player;stop-the-track",
  "description": "",
  "name": "Stop the track",
  "keyword": "Scenario",
  "line": 36,
  "type": "scenario"
});
formatter.step({
  "name": "the media player is playing the first track",
  "keyword": "Given ",
  "line": 38
});
formatter.step({
  "name": "I press stop",
  "keyword": "When ",
  "line": 40
});
formatter.step({
  "name": "the current track should not be playing",
  "keyword": "Then ",
  "line": 42
});
formatter.match({
  "arguments": [
    {
      "val": "first",
      "offset": 32
    }
  ],
  "location": "MediaPlayerSteps.set_active_track(int)"
});
formatter.result({
  "duration": 63000,
  "status": "passed"
});
formatter.match({
  "location": "MediaPlayerSteps.press_stop()"
});
formatter.result({
  "duration": 28000,
  "status": "passed"
});
formatter.match({
  "location": "MediaPlayerSteps.assert_current_track_is_stopped()"
});
formatter.result({
  "duration": 43000,
  "status": "passed"
});
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 5,
  "type": "background"
});
formatter.step({
  "name": "the following list of songs in my playlist:",
  "keyword": "Given ",
  "line": 7,
  "rows": [
    {
      "cells": [
        "Artist",
        "Album",
        "Name",
        "Location On Disk"
      ],
      "line": 8
    },
    {
      "cells": [
        "Cold Play",
        "Mylo Xyloto",
        "Paradise",
        "/music/cold_play/mylo_xyloto/paradise.mp3"
      ],
      "line": 9
    },
    {
      "cells": [
        "Kings of Leon",
        "Aha Shake Heartbreak",
        "Milk",
        "/music/kings_of_leon/aha_shake/milk.mp3"
      ],
      "line": 10
    },
    {
      "cells": [
        "The Killers",
        "Sawdust",
        "Romeo And Juliet",
        "/music/the_killers/sawdust/romeo_and_juliet.mp3"
      ],
      "line": 11
    }
  ]
});
formatter.match({
  "location": "MediaPlayerSteps.add_songs_to_playlist(DataTable)"
});
formatter.result({
  "duration": 3152000,
  "status": "passed"
});
formatter.scenario({
  "id": "simple-media-player;go-to-the-next-track",
  "description": "",
  "name": "Go to the next track",
  "keyword": "Scenario",
  "line": 45,
  "type": "scenario"
});
formatter.step({
  "name": "I press next",
  "keyword": "When ",
  "line": 47
});
formatter.step({
  "name": "the current track should be: Kings of Leon - Milk",
  "keyword": "Then ",
  "line": 49
});
formatter.match({
  "location": "MediaPlayerSteps.press_next()"
});
formatter.result({
  "duration": 28000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Kings of Leon",
      "offset": 29
    },
    {
      "val": "Milk",
      "offset": 45
    }
  ],
  "location": "MediaPlayerSteps.assert_current_track(String,String)"
});
formatter.result({
  "duration": 58000,
  "status": "passed"
});
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 5,
  "type": "background"
});
formatter.step({
  "name": "the following list of songs in my playlist:",
  "keyword": "Given ",
  "line": 7,
  "rows": [
    {
      "cells": [
        "Artist",
        "Album",
        "Name",
        "Location On Disk"
      ],
      "line": 8
    },
    {
      "cells": [
        "Cold Play",
        "Mylo Xyloto",
        "Paradise",
        "/music/cold_play/mylo_xyloto/paradise.mp3"
      ],
      "line": 9
    },
    {
      "cells": [
        "Kings of Leon",
        "Aha Shake Heartbreak",
        "Milk",
        "/music/kings_of_leon/aha_shake/milk.mp3"
      ],
      "line": 10
    },
    {
      "cells": [
        "The Killers",
        "Sawdust",
        "Romeo And Juliet",
        "/music/the_killers/sawdust/romeo_and_juliet.mp3"
      ],
      "line": 11
    }
  ]
});
formatter.match({
  "location": "MediaPlayerSteps.add_songs_to_playlist(DataTable)"
});
formatter.result({
  "duration": 3307000,
  "status": "passed"
});
formatter.scenario({
  "id": "simple-media-player;go-to-the-previous-track",
  "description": "",
  "name": "Go to the previous track",
  "keyword": "Scenario",
  "line": 52,
  "type": "scenario"
});
formatter.step({
  "name": "the media player is playing the third track",
  "keyword": "Given ",
  "line": 54
});
formatter.step({
  "name": "I press previous",
  "keyword": "When ",
  "line": 56
});
formatter.step({
  "name": "the current track should be: Kings of Leon - Milk",
  "keyword": "Then ",
  "line": 58
});
formatter.match({
  "arguments": [
    {
      "val": "third",
      "offset": 32
    }
  ],
  "location": "MediaPlayerSteps.set_active_track(int)"
});
formatter.result({
  "duration": 60000,
  "status": "passed"
});
formatter.match({
  "location": "MediaPlayerSteps.press_previous()"
});
formatter.result({
  "duration": 32000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Kings of Leon",
      "offset": 29
    },
    {
      "val": "Milk",
      "offset": 45
    }
  ],
  "location": "MediaPlayerSteps.assert_current_track(String,String)"
});
formatter.result({
  "duration": 70000,
  "status": "passed"
});
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 5,
  "type": "background"
});
formatter.step({
  "name": "the following list of songs in my playlist:",
  "keyword": "Given ",
  "line": 7,
  "rows": [
    {
      "cells": [
        "Artist",
        "Album",
        "Name",
        "Location On Disk"
      ],
      "line": 8
    },
    {
      "cells": [
        "Cold Play",
        "Mylo Xyloto",
        "Paradise",
        "/music/cold_play/mylo_xyloto/paradise.mp3"
      ],
      "line": 9
    },
    {
      "cells": [
        "Kings of Leon",
        "Aha Shake Heartbreak",
        "Milk",
        "/music/kings_of_leon/aha_shake/milk.mp3"
      ],
      "line": 10
    },
    {
      "cells": [
        "The Killers",
        "Sawdust",
        "Romeo And Juliet",
        "/music/the_killers/sawdust/romeo_and_juliet.mp3"
      ],
      "line": 11
    }
  ]
});
formatter.match({
  "location": "MediaPlayerSteps.add_songs_to_playlist(DataTable)"
});
formatter.result({
  "duration": 3433000,
  "status": "passed"
});
formatter.scenario({
  "id": "simple-media-player;remove-a-song-from-the-playlist",
  "description": "",
  "name": "Remove a song from the playlist",
  "keyword": "Scenario",
  "line": 61,
  "type": "scenario"
});
formatter.step({
  "name": "I remove the second song from the playlist",
  "keyword": "When ",
  "line": 63
});
formatter.step({
  "name": "I should have the following tracks in my playlist: Paradise, Romeo And Juliet",
  "keyword": "Then ",
  "line": 65
});
formatter.match({
  "arguments": [
    {
      "val": "second",
      "offset": 13
    }
  ],
  "location": "MediaPlayerSteps.remove_song_at_index(int)"
});
formatter.result({
  "duration": 118000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Paradise, Romeo And Juliet",
      "offset": 51
    }
  ],
  "location": "MediaPlayerSteps.assert_queue_has_tracks(String\u003e)"
});
formatter.result({
  "duration": 127000,
  "status": "passed"
});
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 5,
  "type": "background"
});
formatter.step({
  "name": "the following list of songs in my playlist:",
  "keyword": "Given ",
  "line": 7,
  "rows": [
    {
      "cells": [
        "Artist",
        "Album",
        "Name",
        "Location On Disk"
      ],
      "line": 8
    },
    {
      "cells": [
        "Cold Play",
        "Mylo Xyloto",
        "Paradise",
        "/music/cold_play/mylo_xyloto/paradise.mp3"
      ],
      "line": 9
    },
    {
      "cells": [
        "Kings of Leon",
        "Aha Shake Heartbreak",
        "Milk",
        "/music/kings_of_leon/aha_shake/milk.mp3"
      ],
      "line": 10
    },
    {
      "cells": [
        "The Killers",
        "Sawdust",
        "Romeo And Juliet",
        "/music/the_killers/sawdust/romeo_and_juliet.mp3"
      ],
      "line": 11
    }
  ]
});
formatter.match({
  "location": "MediaPlayerSteps.add_songs_to_playlist(DataTable)"
});
formatter.result({
  "duration": 4197000,
  "status": "passed"
});
formatter.scenario({
  "id": "simple-media-player;clear-the-playlist",
  "description": "",
  "name": "Clear the playlist",
  "keyword": "Scenario",
  "line": 68,
  "type": "scenario"
});
formatter.step({
  "name": "I clear the playlist",
  "keyword": "When ",
  "line": 70
});
formatter.step({
  "name": "the playlist should be empty",
  "keyword": "Then ",
  "line": 72
});
formatter.match({
  "location": "MediaPlayerSteps.clear_playlist()"
});
formatter.result({
  "duration": 50000,
  "status": "passed"
});
formatter.match({
  "location": "MediaPlayerSteps.assert_playlist_empty()"
});
formatter.result({
  "duration": 73000,
  "status": "passed"
});
formatter.uri("cucumber/eight/tips/specs/example3/ObjectMarshalling.feature");
formatter.feature({
  "id": "examples-of-object-marshalling",
  "description": "",
  "name": "Examples of object marshalling",
  "keyword": "Feature",
  "line": 1
});
formatter.scenario({
  "id": "examples-of-object-marshalling;an-example-of-implicit-type-conversion",
  "description": "",
  "name": "An example of implicit type conversion",
  "keyword": "Scenario",
  "line": 3,
  "type": "scenario"
});
formatter.step({
  "name": "I need numbers or booleans",
  "keyword": "When ",
  "line": 5
});
formatter.step({
  "name": "sometimes it\u0027s easier to let Cucumber convert values 1 or 1.1 or true instead of me",
  "keyword": "Then ",
  "line": 7
});
formatter.match({
  "location": "ObjectMarshallingSteps.I_need_numbers_or_booleans()"
});
formatter.result({
  "duration": 224000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 53
    },
    {
      "val": "1.1",
      "offset": 58
    },
    {
      "val": "true",
      "offset": 65
    }
  ],
  "location": "ObjectMarshallingSteps.sometimes_it_s_easier_to_let_cucumber_convert_values(int,double,boolean)"
});
formatter.result({
  "duration": 347000,
  "status": "passed"
});
formatter.scenario({
  "id": "examples-of-object-marshalling;an-example-of-implicit-conversion-of-lists",
  "description": "",
  "name": "An example of implicit conversion of lists",
  "keyword": "Scenario",
  "line": 10,
  "type": "scenario"
});
formatter.step({
  "name": "I need a bunch of items",
  "keyword": "When ",
  "line": 12
});
formatter.step({
  "name": "sometimes it\u0027s easier to deal with a list: apples, bananas, oranges",
  "keyword": "Then ",
  "line": 14
});
formatter.match({
  "location": "ObjectMarshallingSteps.I_need_a_bunch_of_items()"
});
formatter.result({
  "duration": 219000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "apples, bananas, oranges",
      "offset": 43
    }
  ],
  "location": "ObjectMarshallingSteps.sometimes_its_easier_to_deal_with_a_lists(String\u003e)"
});
formatter.result({
  "duration": 146000,
  "status": "passed"
});
formatter.scenario({
  "id": "examples-of-object-marshalling;convert-more-complex-values-using-special-formats",
  "description": "",
  "name": "Convert more complex values using special formats",
  "keyword": "Scenario",
  "line": 17,
  "type": "scenario"
});
formatter.step({
  "name": "I need to do something with dates",
  "keyword": "When ",
  "line": 19
});
formatter.step({
  "name": "I should be able to use 10/31/2013 or 10/31/2013 12:32:22 and get a Date object back",
  "keyword": "Then ",
  "line": 21
});
formatter.match({
  "location": "ObjectMarshallingSteps.I_need_to_do_something_with_dates()"
});
formatter.result({
  "duration": 181000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10/31/2013",
      "offset": 24
    },
    {
      "val": "10/31/2013 12:32:22",
      "offset": 38
    }
  ],
  "location": "ObjectMarshallingSteps.I_should_be_able_to_use_or_AM_and_get_a_Date_object_back(Calendar,Calendar)"
});
formatter.result({
  "duration": 943000,
  "status": "passed"
});
formatter.scenario({
  "id": "examples-of-object-marshalling;transform-something-more-complex-using-a-custom-transform",
  "description": "",
  "name": "Transform something more complex using a custom transform",
  "keyword": "Scenario",
  "line": 24,
  "type": "scenario"
});
formatter.step({
  "name": "I need to work with IP Addresses or Phone Numbers",
  "keyword": "When ",
  "line": 26
});
formatter.step({
  "name": "I should be able to parse 127.0.0.1 or 555-555-5555 and get custom objects back",
  "keyword": "Then ",
  "line": 28
});
formatter.match({
  "location": "ObjectMarshallingSteps.I_need_to_work_with_IP_Addresses_or_Phone_Numbers()"
});
formatter.result({
  "duration": 188000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "127.0.0.1",
      "offset": 26
    },
    {
      "val": "555-555-5555",
      "offset": 39
    }
  ],
  "location": "ObjectMarshallingSteps.I_should_be_able_to_parse_or_and_get_custom_objects_back(InetAddress,PhoneNumber)"
});
formatter.result({
  "duration": 2104000,
  "status": "passed"
});
formatter.scenario({
  "id": "examples-of-object-marshalling;transform-a-data-table-into-a-list-of-strongly-typed-objects",
  "description": "",
  "name": "Transform a data table into a list of strongly typed objects",
  "keyword": "Scenario",
  "line": 31,
  "type": "scenario"
});
formatter.step({
  "name": "I need to specify a lot of data as a table",
  "keyword": "When ",
  "line": 33
});
formatter.step({
  "name": "I should be able to get a list of real objects back:",
  "keyword": "Then ",
  "line": 35,
  "rows": [
    {
      "cells": [
        "First Name",
        "Last Name",
        "Age",
        "Is Male"
      ],
      "line": 36
    },
    {
      "cells": [
        "Obi-Wan",
        "Kenobi",
        "55",
        "true"
      ],
      "line": 37
    },
    {
      "cells": [
        "Han",
        "Solo",
        "35",
        "true"
      ],
      "line": 38
    },
    {
      "cells": [
        "Luke",
        "Skywalker",
        "24",
        "true"
      ],
      "line": 39
    },
    {
      "cells": [
        "Leia",
        "Organa",
        "24",
        "false"
      ],
      "line": 40
    }
  ]
});
formatter.match({
  "location": "ObjectMarshallingSteps.I_need_to_specify_a_lot_of_data_as_a_table()"
});
formatter.result({
  "duration": 237000,
  "status": "passed"
});
formatter.match({
  "location": "ObjectMarshallingSteps.I_should_be_able_to_get_a_list_of_real_objects_back(Person\u003e)"
});
formatter.result({
  "duration": 2407000,
  "status": "passed"
});
});