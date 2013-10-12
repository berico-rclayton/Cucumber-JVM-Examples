package cucumber.eight.tips.example2;

/**
 * Represents a song that our media player can play.
 */
public class Song {

    private String artist;
    private String album;
    private String name;
    private String locationOnDisk;

    public Song(){}

    public Song(String artist, String album, String name, String locationOnDisk) {
        this.artist = artist;
        this.album = album;
        this.name = name;
        this.locationOnDisk = locationOnDisk;
    }

    public String getArtist() {
        return artist;
    }

    public void setArtist(String artist) {
        this.artist = artist;
    }

    public String getAlbum() {
        return album;
    }

    public void setAlbum(String album) {
        this.album = album;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLocationOnDisk() {
        return locationOnDisk;
    }

    public void setLocationOnDisk(String locationOnDisk) {
        this.locationOnDisk = locationOnDisk;
    }
}
