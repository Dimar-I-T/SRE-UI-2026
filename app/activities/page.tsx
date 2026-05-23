import ActivityHero from "@/components/ui/activities/ActivityHero";
import ActivitySection from "@/components/ui/activities/ActivitySection";

export default function ActivitiesPage() {
  return (
    <main className="bg-[#f8fbf7] overflow-x-hidden">
        
    <div className="fixed top-0 left-[-200px] w-[500px] h-[500px] bg-[#7dc142]/10 blur-3xl rounded-full pointer-events-none" />
    <div className="fixed bottom-0 right-[-200px] w-[500px] h-[500px] bg-[#105D48]/10 blur-3xl rounded-full pointer-events-none" />
      <ActivityHero />

      <div className="px-6 lg:px-[120px] py-16 flex flex-col gap-24">

        {/* INTERNAL */}
        <ActivitySection
          category="Internal"
          division="Research & Development"
          title="Overhaul"
          description={`
            Overhaul is a gathering program aimed at strengthening the bond among members and creating a more connected internal community. Through fun, interactive, and engaging activities, this program encourages members to build closer relationships, improve teamwork, and create meaningful memories beyond organizational work.
          `}
          images={[
            "/activities/overhaul1.jpg",
            "/activities/overhaul2.jpg",
            "/activities/overhaul3.jpg",
            "/activities/overhaul4.jpg",
          ]}
        />

        {/* ACADEMIC */}
        <ActivitySection
          category="Academic"
          division="Training"
          title="Internal Training"
          description={`
            Internal Training is a flagship work program designed as an intensive workshop series to empower SRE UI Associates with essential soft and hard skills. This program serves as a comprehensive learning platform, bridging the gap between theoretical knowledge and practical industry application in the Renewable Energy (RE) sector.

            The workshop follows a structured pedagogical approach, ensuring that every participant moves from theory to mastery: Knowledge Delivery & Material Presentation, the workshop begins with in-depth sessions led by Training Associates. This phase covers the core Internal Training Curriculum, including:
            • Problem Identification & Research Methodologies
            • Analytical Tools & Insight Interpretation
            • Professional Slide Deck Creation & Data Visualization
            • OpenLCA Software Training (Fundamentals and Application)
            `}
          wideBottomText={`Capstone Case Study to conclude the workshop, participants engage in a hands-on Case Study. This serves as the practical climax of the program, where members apply the concepts and software skills they have just learned to analyze real-world scenarios within the RE sector. This ensures that the knowledge is not just heard, but practiced and internalized.
            `}
          images={[
            "/activities/training1.png",
            "/activities/training2.png",
            "/activities/training3.png",
            "/activities/training4.png",
          ]}
        />

        <ActivitySection
          category="Academic"
          division="Academic Learning Unit (Tech, Econ, Pol)"
          title="Bi-Weekly Meeting"
          description={`
            Bi-Weekly Meeting is a learning and discussion program initiated by the Academic Learning Unit to broaden members’ understanding of renewable energy from various perspectives, including technology, economics, and policy. This program provides members with essential conceptual knowledge, current issue awareness, and early-stage problem identification related to the renewable energy sector. Through interactive discussions and knowledge-sharing sessions held every two weeks, members are encouraged to develop critical thinking, gain interdisciplinary insights, and build a stronger foundation to support future projects, competitions, research, and organizational initiatives.
          `}
          images={[
            "/activities/bwm1.png",
            "/activities/bwm2.png",
            "/activities/bwm3.png",
            "/activities/bwm4.png",
          ]}
        />

        {/* EXTERNAL */}
        <ActivitySection
          category="External"
          division="Relations"
          title="Company Visit"
          description={`
            Company Visit is a student development initiative that provides direct exposure to the professional world, especially in renewable energy industries. From this program, participants gain insights into company operations, professional career, pursue future career opportunities, and help bridging academic learning and real-world experience.
          `}
          images={[
            "/activities/company1.png",
            "/activities/company2.png",
            "/activities/company3.png",
            "/activities/company4.png",
          ]}
        />

        <ActivitySection
          category="External"
          division="Relations"
          title="SRE GREEN (Gerakan Renewable Energy untuk Negeri)"
          description={`
            GREEN is a program that serves as a platform where high school students can learn, compete, and transform their ideas into tangible solutions. Through activities like problem-solving competitions, engaging roadshows, exciting networking events, and effective campaigns, GREEN aims to make a real impact on the growth of renewable energy in Indonesia.
          `}
          images={[
            "/activities/green1.png",
            "/activities/green2.png",
            "/activities/green3.png",
            "/activities/green4.png",
          ]}
        />

        <ActivitySection
          category="External"
          division="Relations"
          title="SUN (SRE UI Networking)"
          description={`
            A Flagship networking event held by SRE UI that aims to increase collaboration and networking opportunities of associates with other organizations in UI and around Jabodetabek.
          `}
          images={[
            "/activities/green4.png",
            "/activities/company1.png",
          ]}
        />

        <ActivitySection
          category="External"
          division="Community Development"
          title="SRE UI BRIGHT"
          description={`
            SRE UI Bright is a social-environment program initiated by SRE UI under the Community Development division. This program focuses on delivering practical and community-based renewable energy solutions through collaborative processes that empower local communities, strengthen local capacity, and supports Indonesia’s energy transition at the grassroots level.
          `}
          images={[
            "/activities/training1.png",
            "/activities/bwm1.png",
          ]}
        />

        <ActivitySection
          category="External"
          division="Marketing & Communication"
          title="WORE (What’s On RE)"
          description={`
            “What’s On RE?” (WORE) is an educational content campaign by Society of Renewable Energy Universitas Indonesia that delivers the latest updates and discussions about renewable energy in a simple and easy-to-understand format. The campaign aims to help audiences stay informed about current renewable energy issues without needing to read lengthy or complex articles. WORE will be published regularly every Saturday on the first week in the form of feed posts and on the third week as reel content, combining informative insights with engaging visual communication.
          `}
          images={[
            "/activities/wore1.png",
          ]}
        />

      </div>
    </main>
  );
}