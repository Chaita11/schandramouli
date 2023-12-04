import WorksBox from "@/comp/Works";
import data from "@/utils/Achievement.json";
export default function Works() {
  return (
    <main>
      <div className="containerMore">
        <div className="containerWorks">
          <div className="containerWorksText">
            <h1 className="headingMore">Works</h1>
            <p className="subHeadingMore">
              Listing some of my recents works here. I hope you like them. Not
              perfect in UI/UX but yeah it works! :)
            </p>
          </div>
          <WorksBox />
        </div>
        <div className="containerAchievements" id="achievements">
          <div className="containerWorksText">
            <h1 className="headingMore">Achievements</h1>
            <p className="subHeadingMore">
              Some of my achievements in the field of tech.
            </p>
            <div className="containerAcheivementText mt-2">
              {data &&
                data.map((data, i) => (
                  <div className="acheiveContainer" key={i}>
                    <div className="gap-1">
                      <h1 className="font-semibold text-3xl max-[550px]:text-xl mappedText">
                        {data.school}
                      </h1>
                      <p className="font-normal text-sm dark:text-neutral-400">
                        {data.event}
                      </p>
                    </div>
                    {data.outcome &&
                      data.outcome.map((name, index, outcome) => (
                        <div key={index}>
                          <p className="font-normal text-lg">{name}</p>
                        </div>
                      ))}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
