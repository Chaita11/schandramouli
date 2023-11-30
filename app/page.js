import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center">
      <div className="containerLanding flex justify-center items-center">
        <div className="containerFlex">
          <div className="containerTextLanding">
            <h1 className="textLanding">Greetings</h1>
            <h1 className="textLanding">
              This is <span className="spanGrad">Chandramouli</span>
            </h1>
            <p className="textParaLanding">
              Hello there, I am Chandramouli. I am a student and a tech geek.
              UI/UX developer, Video Editor, and front-end developer. I actively
              take part in Designathon & Hackathons.
            </p>
            <p className="textParaLanding">
              Apart from being so much associated with tech, I am also an Indian
              Classical Violinst.
            </p>
          </div>
        </div>
        <div className="containerImageLanding">
          <Image src="/me.png" width={335} height={335} unoptimized />
        </div>
      </div>
    </main>
  );
}
