import { useState } from "react";
import Song from "./Song";

export type SongType = {title : string, artist: string, votes: number};

const SongList = () => {

    const [visible, setVisible] = useState<boolean>(true);

    const [song1, setSong1] = 
    useState<SongType>({title : "BarbieGirl", artist: "Aqua", votes: 0});
    
    const [song2, setSong2] = 
    useState<SongType>({title : "We will rock you", artist: "Queen",votes: 0});

    const initialSongs: SongType[] = [
        {title: "Barbie Girl", artist: "Aqua", votes: 0},
        {title: "We will rock you", artist: "Queen",votes: 0},
        {title: "Bicycle Race", artist: "Queen", votes: 0}
    ]

    const [listOfSongs, setListOfSongs] = useState(initialSongs);

    const voteForSong = (position : number) => {
        const copyList = listOfSongs;
        const songTobeVotedOn = copyList[position];
        copyList[position] = {...songTobeVotedOn, votes : songTobeVotedOn.votes + 1};
        setListOfSongs(copyList);
    }

    const songsForDisplay: JSX.Element[] = listOfSongs.map (
        (nextSong, position) => {
        return <Song key={position }song={nextSong} voteFunction={() => voteForSong(position)} />
        }
     )
     const toggleVisibility = () =>{
        setVisible(!visible);
    }
    
    return <div>
        {visible ? <p>Visible is true</p> : <p>visible is false</p>}
    <ul style={{ display : visible ? "block" : "none" }}    >
       {listOfSongs.map ( 
            (nextSong, position) => {
            return <Song key={position} song={nextSong} voteFunction={() => voteForSong(position)}  />
            }   
        )}
    </ul>
    <button onClick={toggleVisibility} >{ visible ? "Hide songs" : "Show songs"}</button>
</div>
}
export default SongList;