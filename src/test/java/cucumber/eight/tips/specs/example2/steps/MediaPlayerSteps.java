package cucumber.eight.tips.specs.example2.steps;


import cucumber.api.DataTable;
import cucumber.api.Transform;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.eight.tips.example2.PlayContext;
import cucumber.eight.tips.example2.Song;
import cucumber.eight.tips.specs.common.OrdinalTransformer;
import org.springframework.beans.factory.annotation.Autowired;

import cucumber.eight.tips.example2.MediaPlayer;
import org.springframework.test.context.ContextConfiguration;

import java.util.List;

import static org.junit.Assert.*;

/**
 * Step Definitions for the MediaPlayer.feature.
 */
@ContextConfiguration("classpath:cucumber2.xml")
public class MediaPlayerSteps {


    @Autowired
    MediaPlayer mediaPlayer;

    @Given("^the following list of songs in my playlist:$")
    public void add_songs_to_playlist(DataTable dataTable){

        List<Song> songs = dataTable.asList(Song.class);

        mediaPlayer.queue(songs);
    }

    @Given("^the media player is playing the (\\w+) track$")
    public void set_active_track(
            @Transform(OrdinalTransformer.class) int index){

        mediaPlayer.play(index);
    }

    @When("^I queue the following songs in the media player:$")
    public void queue_songs_with_playlist(DataTable dataTable){

        List<Song> songs = dataTable.asList(Song.class);

        mediaPlayer.queue(songs);
    }

    @When("^I press play$")
    public void press_play(){

        mediaPlayer.play();
    }

    @When("^I play the (\\w+) track$")
    public void play_track_at_index(
            @Transform(OrdinalTransformer.class) int index) {

        mediaPlayer.play(index);
    }

    @When("^I press stop$")
    public void press_stop(){

        mediaPlayer.stop();
    }

    @When("^I press next$")
    public void press_next(){

        mediaPlayer.next();
    }

    @When("^I press previous$")
    public void press_previous(){

        mediaPlayer.previous();
    }

    @When("^I remove the (\\w+) song from the playlist$")
    public void remove_song_at_index(
            @Transform(OrdinalTransformer.class) int index){

        mediaPlayer.remove(index);
    }

    @When("^I clear the playlist")
    public void clear_playlist(){

        mediaPlayer.clear();
    }

    @Then("^I should have the following tracks in my playlist: ((?:\\w|,|\\s)+)$")
    public void assert_queue_has_tracks(List<String> songNames){

        List<Song> queue = mediaPlayer.getQueue();

        for (Song song : queue){

            assertTrue(songNames.contains(song.getName()));
        }
    }

    @Then("^the current track should be: ((?:\\w|\\s)+) - ((?:\\w|\\s)+)$")
    public void assert_current_track(String expectedArtist, String expectedSong){

        PlayContext playContext = mediaPlayer.getPlayStatus();

        assertEquals(expectedArtist, playContext.getCurrentTrack().getArtist());
        assertEquals(expectedSong, playContext.getCurrentTrack().getName());
    }

    @Then("^the current track should not be playing$")
    public void assert_current_track_is_stopped(){

        PlayContext playContext = mediaPlayer.getPlayStatus();

        assertEquals(PlayContext.PlayStates.Stopped, playContext.getPlayState());
    }


    @Then("^the playlist should be empty$")
    public void assert_playlist_empty(){

        List<Song> queue = mediaPlayer.getQueue();

        assertEquals(0, queue.size());
    }
}
