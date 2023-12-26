import Image from "next/image";
import Link from "next/link";

const WorksBox = () => {
  return (
    <div className="containerWorksBox">
      <div className="worksBox">
        <h1 className="titleWork font-semibold text-3xl">Car Edit</h1>
        <p className="subtextWork">
          An interschool edit, made in{" "}
          <span className="font-semibold">Adobe After Effects</span> &{" "}
          <span className="font-semibold">Adobe Premiere Pro</span>. A car edit,
          using requried VFX and SFX.
        </p>
        <div className="btnLink">
          <Link href="https://youtu.be/nywipTtmBVs" target="_blank">
            Click here!
          </Link>
        </div>
      </div>
      <div className="worksBox">
        <h1 className="titleWork font-semibold text-3xl">EZREMEDY</h1>
        <p className="subtextWork">
          An interschool project, made using{" "}
          <span className="font-semibold">Figma</span>. An UI/UX prototype.
          EZREMEDY was project which was targeting the healthcare industry,
          mainly for old aged people
        </p>
        <div className="btnLink">
          <Link
            href="https://www.figma.com/file/xo0SkkXrpYFcjnfEkOlQOg/MOCKUP-(FINAL)?type=design&t=RlzlQhFOF0EuSdui-6"
            target="_blank"
          >
            Click here!
          </Link>
        </div>
      </div>
      <div className="worksBox">
        <h1 className="titleWork font-semibold text-3xl">CODE 2k22</h1>
        <p className="subtextWork">
          An interschool Tech fest, hosted by CODE Club of Apeejay School,
          NOIDA. Event Trailer for CODE 2022, made it using
          <span className="font-semibold">Adobe After Effects</span> &{" "}
          <span className="font-semibold">Adobe Premiere Pro</span>.
        </p>
        <div className="btnLink">
          <Link href="https://youtu.be/rs20y4RxPT0" target="_blank">
            Click here!
          </Link>
        </div>
      </div>
      <div className="worksBox">
        <h1 className="titleWork font-semibold text-3xl">CODE 2k23</h1>
        <p className="subtextWork">
          An interschool Tech fest, hosted by CODE Club of Apeejay School,
          NOIDA. Event Trailer for CODE 2023, made it using
          <span className="font-semibold">Adobe After Effects</span> &{" "}
          <span className="font-semibold">Adobe Premiere Pro</span>.
        </p>
        <div className="btnLink">
          <Link
            href="https://drive.google.com/file/d/1ZLk5qKt8JLsc2giuG-RzB2YGwoo6x0l6/view?usp=drivesdk"
            target="_blank"
          >
            Click here!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WorksBox;
