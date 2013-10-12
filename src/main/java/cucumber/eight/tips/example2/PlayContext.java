package cucumber.eight.tips.example2;

/**
 * Represents the status of playing a song in the media player.
 */
public class PlayContext {

    public enum PlayStates {
        Playing,
        Stopped
    }

    private int secondsIntoTrack;

    private Song currentTrack;

    private int trackIndex;

    private PlayStates playState;

    public PlayContext(int secondsIntoTrack, Song currentTrack, int trackIndex, PlayStates playState) {
        this.secondsIntoTrack = secondsIntoTrack;
        this.currentTrack = currentTrack;
        this.trackIndex = trackIndex;
        this.playState = playState;
    }

    public int getSecondsIntoTrack() {
        return secondsIntoTrack;
    }

    public Song getCurrentTrack() {
        return currentTrack;
    }

    public int getTrackIndex() {
        return trackIndex;
    }

    public PlayStates getPlayState() {
        return playState;
    }

    public void setSecondsIntoTrack(int secondsIntoTrack) {
        this.secondsIntoTrack = secondsIntoTrack;
    }

    public void setCurrentTrack(Song currentTrack) {
        this.currentTrack = currentTrack;
    }

    public void setTrackIndex(int trackIndex) {
        this.trackIndex = trackIndex;
    }

    public void setPlayState(PlayStates playState) {
        this.playState = playState;
    }
}
