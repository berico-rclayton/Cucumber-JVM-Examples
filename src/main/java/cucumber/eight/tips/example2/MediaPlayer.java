package cucumber.eight.tips.example2;

import java.util.List;

/**
 * Describes the desired behavior of our media player.
 */
public interface MediaPlayer {

    /**
     * Play the current song.
     */
    void play();

    /**
     * Play the song at the specified index.
     * @param index Index of the song to play.
     * @throws IndexOutOfBoundsException thrown if the index is invalid.
     */
    void play(int index) throws IndexOutOfBoundsException;

    /**
     * Stop playing the current song.
     */
    void stop();

    /**
     * Move to the next song.
     * @return the current index after moving to the next song.
     */
    int next();

    /**
     * Move to the previous song.
     * @return the current index after moving to the previous song.
     */
    int previous();

    /**
     * Queue the provided songs.
     * @param songs Songs to be added to the queue.
     */
    void queue(List<Song> songs);

    /**
     * Clear the song queue.
     */
    void clear();

    /**
     * Remove the supplied songs from the queue.
     * @param songs Indexes of the songs to remove.
     * @throws IndexOutOfBoundsException thrown if the index is invalid.
     */
    void remove(int... songs) throws IndexOutOfBoundsException;

    /**
     * Return the song queue.
     * @return All the songs in the queue.
     */
    List<Song> getQueue();


    /**
     * Retrieves the current song and play information about the song (seconds into song).
     * @return PlayContext
     */
    PlayContext getPlayStatus();
}
