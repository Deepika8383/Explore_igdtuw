import { useEffect, useRef } from "react";
import { Card } from "../components/cardMain";
import { TopBar } from "../components/topBar";
import sampleVideo from '../image/sample.mp4'

export function Home() {
    return (
        <>
            <TopBar></TopBar>
            <VideoPlayer></VideoPlayer>
            <h1 className="text-white font-thin flex align-middle justify-center text-4xl"><i>Start your virtual tour:</i></h1>
            <hr className="w-2/3 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 p-4 flex items-center">
            <Card name={"Faculty"} image = {"https://img.freepik.com/premium-photo/man-is-standing-front-blackboard-that-says-earth_1252102-12698.jpg?size=626&ext=jpg&uid=R158122041&ga=GA1.1.1473895447.1722960613&semt=ais_hybrid"}></Card>
            <Card name={"Departments"} image={"https://img.freepik.com/premium-photo/elearning-online-education-concept-male-student-learning-lesson-process-holding-hands-laptop-keyboard-web-internet-technology-online-educational-webinar_183314-13576.jpg?w=900"}></Card>
            <Card name={"Societies"} image={"https://img.freepik.com/free-photo/excited-audience-watching-confetti-fireworks-having-fun-music-festival-night-copy-space_637285-559.jpg?t=st=1722962106~exp=1722965706~hmac=8082b6733ccc13634af16d81a9d2686a705611ecf57ad584677d68ad13824579&w=900"}></Card>
            <Card name={"Opportunities"}image={"https://img.freepik.com/free-photo/futuristic-business-scene-with-ultra-modern-ambiance_23-2151003761.jpg?t=st=1722961824~exp=1722965424~hmac=540e56b4cc2e417bd71efd46034ad7cf94eaaa2d49f475a146945748fadc67ed&w=900"}></Card>
            <Card name={"Infrastructure"} image={"https://storage.googleapis.com/prd-mercan-asset/2023/12/182951a6-img_4256-e1701917255923.jpg"}></Card>
            <Card name={"Academics"} image={"https://img.freepik.com/premium-photo/girl-with-diploma-diploma-her-hand_1291366-1906.jpg?size=626&ext=jpg&uid=R158122041&ga=GA1.1.1473895447.1722960613&semt=ais_hybrid"}></Card>
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
        <div className="flex w-full p-4 h-[90vh] mb-36">
            <video
                loop={true}
                ref={videoRef}
                className="w-full h-full rounded-xl">
                <source src={sampleVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};
