import { useEffect, useRef } from "react";
import {Card} from "../componets/card";
import { TopBar } from "../componets/topBar";
import sampleVideo from '../image/sample.mp4'

export function Home(){
    return (
        <>
        <TopBar></TopBar>
        <VideoPlayer></VideoPlayer>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            <Card username={"Courses"}></Card>
            <Card username={"Faculty"}></Card>
            <Card username={"Opportunity"}></Card>
            <Card username={"Socities"}></Card>
            <Card username={"Infrastructure"}></Card>
            <Card username={"Academics"}></Card>
        </div>
        </>
    )
}

const VideoPlayer: React.FC = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play();
        }
    }, []);
    const handleVideoClick = () => {
        if (videoRef.current) {
            if (videoRef.current.paused) {
                videoRef.current.play();
            } else {
                videoRef.current.pause();
            }
        }
    };
    return (
        <div className="flex justify-center items-center p-4 h-[90vh]">
        <video 
         ref={videoRef}
         className="w-[85%] h-full rounded shadow-lg" 
         loop 
         autoPlay 
         muted 
         controls
         onClick={handleVideoClick}>
            <source src={sampleVideo} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    </div>
    );
};
