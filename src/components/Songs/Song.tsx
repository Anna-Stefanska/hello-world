import { SongType } from "./SongList";

const Song= (props : SongProps) => {
    return <li> {props.song.title} by {props.song.artist}. Votes: {props.song.votes} 
    <button onClick={props.voteFunction}> Vote Now</button>
     </li>
};

type SongProps = {
    song : SongType
    voteFunction : () => void
};
export default Song;