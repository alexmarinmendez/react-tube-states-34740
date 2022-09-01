import { useEffect, useState } from 'react';

const Video = ({thumbnail, title, dateAdded, channel, description, start, report}) => {
    const [rate, setRate] = useState(start);    //hook
    const [isValid, setIsValid] = useState(false);

    const handleClick = () => {
        setRate(rate+1);
    }

    //componentDidUpdate
    useEffect(() => {
        console.log(`Video ${title} se actualizó`)
    }, [rate, isValid]);

    return (
        <div className="video-container">
            <div className="video-image">
            <img src={thumbnail} alt="Same alt value" />
            </div>
            <div className="video-info">
            <h3>{title}</h3>
            <button onClick={handleClick}>Rate</button> {rate} stars
            <button onClick={report}>Report</button>
            <p>Upload date: {dateAdded}</p>
            <h4>Channel's Title: {channel}</h4>
            <p>{description}</p>
            </div>
        </div>
    );
}

export default Video;