package cucumber.eight.tips.example2.impl;

import cucumber.eight.tips.example2.MediaPlayer;
import cucumber.eight.tips.example2.PlayContext;
import cucumber.eight.tips.example2.Song;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

/**
 * A very basic implementation of the MediaPlayer
 */
public class SimpleMediaPlayer implements MediaPlayer {

    ArrayList<Song> queue = new ArrayList<Song>();

    int currentTrack = 0;

    boolean isPlaying = false;

    @Override
    public void play() {

       isPlaying = true;

       // In some more impressive implementation, we would actually start the track and
       // keep track of the position in the song.
    }

    @Override
    public void play(int index) throws IndexOutOfBoundsException {

        if (index < 0 || index >= queue.size()) throw new IndexOutOfBoundsException();

        currentTrack = index;

        play();
    }

    @Override
    public void stop() {

        isPlaying = false;
    }

    @Override
    public int next() {

        currentTrack = (currentTrack + 1 == queue.size())? 0 : currentTrack + 1;

        play();

        return currentTrack;
    }

    @Override
    public int previous() {

        currentTrack = (currentTrack - 1 == -1)? queue.size() - 1 : currentTrack - 1;

        play();

        return currentTrack;
    }

    @Override
    public void queue(List<Song> songs) {

        queue.addAll(songs);
    }

    @Override
    public void clear() {

        queue.clear();
    }

    @Override
    public void remove(int... songs) throws IndexOutOfBoundsException {

        ArrayList<Integer> tracksToRemove = new ArrayList<Integer>();

        for (int i = 0; i < songs.length; i++) tracksToRemove.add(songs[i]);

        ArrayList<Song> newQueue = new ArrayList<Song>();

        for (int i = 0; i < queue.size(); i++){

           if (!tracksToRemove.contains(i)) newQueue.add(queue.get(i));
        }

        queue = newQueue;
    }

    @Override
    public List<Song> getQueue() {

        return queue;
    }

    @Override
    public PlayContext getPlayStatus() {

        return new PlayContext(0, queue.get(currentTrack), currentTrack,
                (isPlaying)? PlayContext.PlayStates.Playing : PlayContext.PlayStates.Stopped);
    }
}
