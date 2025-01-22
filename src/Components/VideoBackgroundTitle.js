import React from "react";

const VideoBackgroundTitle = ({original_title,overview})=>
{
    return (
        <div className="pt-80 pl-14 absolute text-white bg-gradient-to-r from-black w-screen aspect-video">
            <h1 className="font-bold text-6xl mb-6">{original_title}</h1>
            <p className="w-1/4 text-gray-400">{overview}</p>
            <div className="mt-4 opacity-80">
                <button className="bg-white px-12 py-3 rounded-lg text text-gray-900 font-bold hover:opacity-70">Play</button>
                <button className="ml-5 bg-slate-500 px-10 py-3 rounded-lg text text-white">More info</button>
            </div>
        </div>
    )
}

export default VideoBackgroundTitle;