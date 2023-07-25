import React from "react";
import Layout from "../components/layout/Layout";
import TeamMember from "../components/elements/TeamMember";

const Team = () => {
  return (
    <>
      <Layout>
        <section className="pt-20 bg-top bg-no-repeat xl:bg-contain" style={{ backgroundImage: "url('assets/imgs/backgrounds/intersect.svg')" }}>
          <div className="container text-center">
            <div className="max-w-lg mx-auto mb-12">
              <h2 className="mt-2 mb-4 text-3xl font-bold md:text-4xl font-heading wow animate__animated animate__fadeIn animated" data-wow-delay=".3s">
                Meet the team!
              </h2>
              <p className="leading-loose text-blueGray-400 wow animate__animated animate__fadeIn animated" data-wow-delay=".1s"></p>
            </div>
            <div className="flex flex-wrap -mx-3">
              <TeamMember name={"Jack"} title={"CEO, Founder"} image={"/assets/imgs/team/team-member-placeholder.webp"} />
              <TeamMember name={"Bethany"} title={"Law Officer"} image={"/assets/imgs/team/team-member-placeholder.webp"} />
              <TeamMember name={"Alex"} title={"Director"} image={"/assets/imgs/team/team-member-placeholder.webp"} />
              <TeamMember name={"Mick"} title={"Director"} image={"/assets/imgs/team/team-member-placeholder.webp"} />
              <TeamMember name={"Debbie"} title={"Director"} image={"/assets/imgs/team/team-member-placeholder.webp"} />
              <TeamMember name={"Blue"} title={"Office Dog"} image={"/assets/imgs/team/team-member-placeholder.webp"} />
              <TeamMember name={"Arlo"} title={"Office Dog"} image={"/assets/imgs/team/team-member-placeholder.webp"} />
              <TeamMember name={"Tello"} title={"Office Dog"} image={"/assets/imgs/team/team-member-placeholder.webp"} />
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Team;
