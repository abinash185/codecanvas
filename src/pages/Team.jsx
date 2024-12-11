import TeamCard from "../components/Card/TeamCard/TeamCard";
import { ourTeams } from "../utils/Constant";
import "../styles/Team.css";

export default function Team() {
  return (
    <div className="teamContainer">
      <header>
        <h1>
          The <span>A</span>
          <br />
          Team
        </h1>
        <p>
          We&apos;re the caffeinated, idea-generating, deadline-crushing crew
          that turns brands into rockstars. Think of us as your brand&apos;s
          personal cheerleaders, strategists, and hype squad all rolled into
          one.
        </p>
      </header>
      <section>
        {ourTeams.map((e, index) => {
          return (
            <div key={index} id="teamCardBox">
              <TeamCard
                cardId={index}
                empName={e.empName}
                empTitle={e.empTitle}
                empDescriptions={e.empDescriptions}
                empPictures={e.empPictures}
                key={index}
              />
            </div>
          );
        })}
      </section>
    </div>
  );
}
