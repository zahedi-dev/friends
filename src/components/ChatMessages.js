import { CircularProgress } from "@material-ui/core";
import moment from "moment";
import AudioPlayer from "./AudioPlayer";

export default function ChatMessages({
    messages,
    user,
    roomId,
    audioId,
    setAudioId,
}) {
    if (!messages) return null;

    return messages.map((message) => {
        const isSender = message.uid === user.uid;
        const formatDate = (date) => {
            return moment(date).format("D MMM YYYY h:mm a");
        };
        return (
            <div
                key={message.id}
                className={`chat__message ${
                    isSender ? "chat__message--sender" : ""
                }`}
            >
                <span className="chat__name">{message.name}</span>

                {message.imageUrl === "uploading" ? (
                    <div className="image-container">
                        <div className="image__container--loader">
                            <CircularProgress
                                style={{
                                    width: 40,
                                    height: 40,
                                }}
                            />
                        </div>
                    </div>
                ) : message.imageUrl ? (
                    <div className="image-container">
                        <img src={message.imageUrl} alt={message.name} />
                    </div>
                ) : null}

                {message.audioName ? (
                    <AudioPlayer
                        sender={isSender}
                        roomId={roomId}
                        id={message.id}
                        audioUrl={message.audioUrl}
                        audioId={audioId}
                        setAudioId={setAudioId}
                    />
                ) : (
                    <span className="chat__message--message">
                        {message.message}
                    </span>
                )}

                <span className="chat__timestamp">
                    {formatDate(message.time)}
                    {/* {message.time} */}
                </span>
            </div>
        );
    });
}
